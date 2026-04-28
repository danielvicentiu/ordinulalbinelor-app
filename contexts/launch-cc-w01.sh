#!/bin/bash
# ============================================================
# Ordinul Albinelor — W01 launch script (AX42)
# Pattern v2 (22 mar 2026): script separat + PROMPT=$(cat ...) + tmux
# ============================================================

set -e

REPO_DIR="$HOME/workspace/repos/ordinulalbinelor-app"
CONTEXTS_DIR="$REPO_DIR/contexts"
CC_PROMPT="$CONTEXTS_DIR/W01-FULL-BUILD.md"
CC_COPY="$CONTEXTS_DIR/W01-COPY.md"
TMUX_SESSION="oa-w01"
LAUNCH_SCRIPT="/tmp/launch-oa-w01.sh"
LOG_FILE="/tmp/oa-w01.log"

# ============================================================
# VERIFICĂRI PRE-FLIGHT
# ============================================================

echo "==================================================="
echo "  Ordinul Albinelor W01 — CC Launch (pattern v2)"
echo "==================================================="

[ -d "$REPO_DIR" ] || { echo "✗ Repo lipsește: $REPO_DIR"; exit 1; }
[ -f "$CC_PROMPT" ] || { echo "✗ Prompt lipsește: $CC_PROMPT"; exit 1; }
[ -f "$CC_COPY" ] || { echo "✗ Copy lipsește: $CC_COPY"; exit 1; }
[ -f "$REPO_DIR/.env.local" ] || echo "⚠ .env.local lipsește — CC va eșua când va testa Supabase/Resend"

command -v claude >/dev/null 2>&1 || { echo "✗ Claude CLI lipsește din PATH"; exit 1; }

cd "$REPO_DIR"
git pull origin main 2>/dev/null || true

# Configurează git identity dacă lipsește
git config user.email >/dev/null 2>&1 || git config user.email "daniel.vicentiu@gmail.com"
git config user.name >/dev/null 2>&1 || git config user.name "Daniel V"

# ============================================================
# CREARE SCRIPT SEPARAT (pattern v2 — tmux nu moștenește env)
# ============================================================

cat > "$LAUNCH_SCRIPT" << 'EOF'
#!/bin/bash
# Script intern executat în tmux session
export PATH=/home/danielv/.npm-global/bin:$PATH
export CLAUDE_CODE_MAX_OUTPUT_TOKENS=100000

REPO_DIR="$HOME/workspace/repos/ordinulalbinelor-app"
CC_PROMPT="$REPO_DIR/contexts/W01-FULL-BUILD.md"

cd "$REPO_DIR"

echo "=== START $(date) ==="
echo "=== Repo: $(pwd) ==="
echo "=== Branch: $(git rev-parse --abbrev-ref HEAD) ==="
echo "=== Last commit: $(git log --oneline -1) ==="
echo ""

PROMPT=$(cat "$CC_PROMPT")
echo "PROMPT length: ${#PROMPT} chars"
echo ""

claude -p "$PROMPT" --permission-mode bypassPermissions --max-turns 80
EXIT_CODE=$?

echo ""
echo "=== EXIT_CODE=$EXIT_CODE ==="
echo "=== END $(date) ==="

# Hold session vie 1h pentru inspecție
sleep 3600
EOF

chmod +x "$LAUNCH_SCRIPT"

# ============================================================
# LANSARE TMUX
# ============================================================

tmux kill-session -t "$TMUX_SESSION" 2>/dev/null || true
tmux new -s "$TMUX_SESSION" -d "bash $LAUNCH_SCRIPT 2>&1 | tee $LOG_FILE"

echo ""
echo "==================================================="
echo "✓ CC lansat în tmux session: $TMUX_SESSION"
echo "✓ Log: $LOG_FILE"
echo "==================================================="
echo ""
echo "MONITORIZARE (copy-paste):"
echo ""
echo "  Status snapshot:"
echo "    tmux capture-pane -t $TMUX_SESSION -p | tail -30"
echo ""
echo "  Tail log live:"
echo "    tail -f $LOG_FILE"
echo ""
echo "  Atașează interactiv (Ctrl+B apoi D ca să detașezi):"
echo "    tmux attach -t $TMUX_SESSION"
echo ""
echo "  Verifică progres git:"
echo "    cd $REPO_DIR && git log --oneline -20"
echo ""
echo "  Verifică build după CC:"
echo "    cd $REPO_DIR && npm run build"
echo ""
