# W01-COPY — Ordinul Albinelor

**Pentru CC:** acest document conține TOT textul client-facing al site-ului. Folosește exact textele de mai jos. Tonul fiecărei pagini e marcat. ZERO inventare suplimentare. Dacă e nevoie de microcopy în plus (button labels, alt text, error messages), adaptează în spiritul tonului paginii.

**Operator GDPR:** persoană fizică — Daniel Vicențiu

---

## VOCI

- **Glas de Staroste** = solemn, ceremonial, ușor arhaic, propoziții scurte și grave, vocativ medieval ("oaspete", "drumețule"), latină ocazională pe ranguri/sigilii
- **Glas de Prieten** = cald, modern, narativ, fără infantilizare, dialog natural

---

## `/` HOMEPAGE — Glas de Prieten

### Hero
**Titlu mare (h1):**
```
Ordinul Albinelor
```
**Subtitlu (h2):**
```
Povești pentru copii din Cetatea de Ceară
```
**Hero text:**
```
Aici se țes povești despre cei mai harnici cavaleri ai Pământului — albinele. 
Despre Regina-Mamă, despre străjerii care apără cetatea, 
despre culegătoarele care zboară în lume după aurul florilor.
```
**CTA principal (scroll spre form):**
```
Primește scrisorile Starostelui
```

### Secțiune "Cine suntem" → link `/despre-ordin`
**Heading:**
```
Cine suntem
```
**Text:**
```
Suntem un Ordin de povestitori. Adunăm legendele Cetății de Ceară 
și le trimitem, prin pergament electronic, copiilor curioși de pretutindeni. 
Pentru fiecare copil care intră în Ordin, povestea continuă.
```
**Link buton:**
```
Citește despre Ordin →
```

### Secțiune "Codul Ordinului" — 4 hexagoane → link `/codul-ordinului`
**Heading:**
```
Codul Ordinului
```
**Cele 4 carduri hexagonale:**

| Hexagon | Titlu | Text |
|---|---|---|
| 1 | DISCIPLINĂ | Fiecare albină știe ce are de făcut. Și o face. |
| 2 | SACRIFICIU | Cavalerul-albină dă totul pentru cetate. |
| 3 | COMUNIUNE | Singură, albina nu e nimic. Împreună, sunt minune. |
| 4 | MISIUNE | Polenizăm lumea. Asta e darul nostru. |

**Link buton:**
```
Învață Codul →
```

### Secțiune "Prima poveste" → link `/povesti/floricica`
**Heading:**
```
Prima poveste
```
**Preview text:**
```
Floricica era cea mai mică floare din lunca de la marginea pădurii. 
Și totuși, într-o dimineață, a sosit la ea o oaspetă cu aripi de aur...
```
**Link buton:**
```
Citește povestea →
```

### Newsletter form
**Heading:**
```
Intră în Ordin
```
**Lead text:**
```
Primește, o dată la două săptămâni, o scrisoare de la Starostele Daniel 
cu o poveste nouă din Cetatea de Ceară. Copiii pot scrie înapoi.
```
**Câmpuri:**
- `email` (required) — label: "Pergament digital (email)"
- `prenume_parinte` (required) — label: "Prenumele tău"
- `prenume_copil_N` (opțional, max 4) — label: "Prenumele copilului"
- `varsta_copil_N` (opțional, 0-18) — label: "Vârsta"
- buton: `+ Adaugă încă un copil`
- checkbox GDPR (required) — label: "Sunt de acord ca datele mele să fie folosite pentru a primi scrisorile Ordinului. Detalii în [Confidențialitate]."

**Submit button:**
```
Trimite pergamentul
```

**Mesaj sub buton (text mic):**
```
Vom trimite o scrisoare de confirmare. Apasă sigiliul din ea pentru a finaliza.
```

### Footer
- Link: Confidențialitate
- Link: Scrisoare către Staroste
- Text mic: `© Ordinul Albinelor 2026 • Pergamente trimise cu drag de la marginea pădurii`

---

## `/despre-ordin` — Glas de Staroste

### Header
**h1:**
```
Despre Ordin
```

### Cuvântul Starostelui
**h2:**
```
Cuvântul Starostelui
```
**Text:**
```
Eu sunt Starostele Daniel, păstrătorul stupilor și scribul Ordinului.

Ascultă, oaspete, povestea acelora care zboară pe aripi de aur 
și clădesc cetăți de ceară. Sunt cavalerii cei mai vechi ai Pământului. 
Au fost aici înainte de noi, oamenii. Vor fi aici, dacă-i lăsăm, după ce noi vom fi pulbere.

Albinele nu cunosc trândăvia. Nu cunosc minciuna. Nu cunosc trădarea cetății. 
Ele cunosc Codul, Legea și Misiunea. Și asta-i tot ce le trebuie.

Ordinul Albinelor s-a născut dintr-o întrebare simplă: 
ce-ar fi dacă noi, oamenii, am învăța din nou de la ele? 
Nu cum să facem mierea — asta o știu numai ele. 
Ci cum să trăim. Cum să fim cetate, nu turmă. 
Cum să dăm fără să cerem. Cum să muncim fără să ne plângem.

Pe acest pământ digital am așezat sigiliul Ordinului. 
Aici vin copiii și învață. Aici vin părinții și-și aduc aminte. 
Aici scriem pergamente despre Regina-Mamă, despre Cavalerul Guardian, 
despre Floricica și prietenii ei.

Dacă citești aceste rânduri, ești deja chemat. 
Tot ce-ți rămâne e să răspunzi.
```
**Semnătură:**
```
— Starostele Daniel, păstrătorul Cetății de Ceară
```

**Placeholder vizual:** componentă `StarosteBadge` (SVG silueta + insignă hexagon aurit) — foto reală vine ulterior.

### Secțiune "De ce un Ordin?"
**h2:**
```
De ce un Ordin?
```

**3 sub-secțiuni (h3 + text):**

```
Pentru că haosul nu mai e de ajuns.

Copiii noștri cresc între ecrane care nu cer nimic și nu dau nimic. 
Ordinul cere. Ordinul dă.
```

```
Pentru că lumea are nevoie de cavaleri.

Nu cu sabia, ci cu polenul. Nu împotriva cuiva, ci pentru toți. 
Albina e cavalerul de care lumea are cea mai mare nevoie.
```

```
Pentru că poveștile salvează.

Salvează atenția, salvează blândețea, salvează curiozitatea. 
Iar fără ele, copilăria e doar o vârstă.
```

### CTA secundar (jos de tot)
```
Intră în Ordin →
```
(scroll/anchor la newsletter form de pe homepage sau buton care duce la `/#newsletter`)

---

## `/codul-ordinului` — Glas de Staroste

### Header
**h1:**
```
Codul Ordinului
```
**Intro:**
```
Acesta este Codul. Cine intră în Ordin îl învață pe de rost. 
Cine îl învață, îl trăiește.
```

### Cei Patru Piloni
**h2:**
```
Cei Patru Piloni
```

**4 carduri (titlu RO + nume LATIN + text):**

```
DISCIPLINĂ — Disciplina
În stup, fiecare știe ce are de făcut. Doica îngrijește, 
Cercetașul caută, Zidarul clădește, Apărătorul stă la poartă. 
Nimeni nu se laudă. Nimeni nu se plânge. 
Așa ne învață cavalerii cu aripi de aur.
```

```
SACRIFICIU — Sacrificium
Cavalerul-Albină pune cetatea înaintea sa. 
Apărătorul moare apărând. Culegătoarea zboară până cade. 
În Ordin nu există "eu" mai mare decât "noi".
```

```
COMUNIUNE — Communio
Singură, albina nu trăiește o zi. 
Împreună, fac cetatea care trăiește o mie de ani. 
Așa și omul: singur — nimic, împreună — minune.
```

```
MISIUNE — Missio
Albina nu strânge mierea pentru sine. Polenizează lumea, 
hrănește florile, dă viață câmpurilor. 
Cine intră în Ordin primește o misiune: să dea, înainte să ceară.
```

### Cele Șapte Legi
**h2:**
```
Cele Șapte Legi ale Ordinului
```

**Listă cu numerotare romană:**
```
I.   Cinstește-o pe Regina-Mamă, căci ea e izvorul cetății.

II.  Apără cetatea cu prețul vieții tale, căci fără cetate ești nimic.

III. Împarte-ți mierea cu fratele tău cavaler, căci ce e al tău e și al lui.

IV.  Lucrează în zorii zilei și odihnește-te în zorii nopții, 
     căci așa e legea soarelui.

V.   Caută florile și nu păstra pentru tine ce-ai cules, 
     căci aurul polenului trece prin tine, nu rămâne.

VI.  Vorbește prin dans, nu prin strigăt, 
     căci vocea cea mai înaltă nu e cea mai dreaptă.

VII. Lasă-ți urma în lume polenizând tot ce atingi, 
     căci asta-i toată misiunea cavalerului.
```

### Jurământul
**h2:**
```
Jurământul Cavalerului-Albină
```

**Cartuș central (italic, font ceremonial Cardo):**
```
Eu, oaspete chemat la sigiliul de aur,
jur pe pâinea Reginei și pe ceara cetății
să țin Codul Ordinului —
Disciplină, Sacrificiu, Comuniune, Misiune.

Voi munci în zori,
voi împărți mierea,
voi apăra stupul,
voi poleniza tot ce voi atinge.

Așa să-mi ajute florile,
aurul soarelui
și Regina-Mamă a Cetății de Ceară.
```

### Cele Zece Ranguri
**h2:**
```
Cele Zece Ranguri
```

**Tabel:**

| # | Rang | Latin | Cine este |
|---|---|---|---|
| 1 | Regina-Mamă | *Apium Regina* | Mama întregii cetăți. Una singură. Ea dă viață. |
| 2 | Cavaler Guardian | *Eques Custodis* | Stă la poarta stupului. Apără. Moare apărând. |
| 3 | Cercetaș | *Exploratorius* | Pleacă întâi. Caută florile. Aduce vestea. |
| 4 | Culegător de Miere | *Collector Mellis* | Zboară mii de zboruri. Adună aurul florilor. |
| 5 | Zidarul de Ceară | *Faber Cerae* | Clădește hexagoanele cetății. Geometru născut. |
| 6 | Doica | *Nutrix* | Îngrijește puii. Hrănește generația care vine. |
| 7 | Ucenicul | *Tirocinium* | Învață. Toți încep aici. Nimeni n-a sărit treapta asta. |
| 8 | Ventilatorul | *Ventilator Aulae* | Răcorește cetatea cu aripile. Munca cea tăcută. |
| 9 | Aparul | *Aquarius* | Aduce apă. Fără el, cetatea piere de sete. |
| 10 | Prinții | *Principes Otiosi* | Stau pe pernă, până într-o zi când zboară spre soare. |

---

## `/legenda` — Glas de Staroste

### Header
**h1:**
```
Legenda Cetății de Ceară
```

### Text narativ
```
În vremurile când oamenii încă vorbeau cu pădurea și cu apa, 
trăia la marginea unui sat un staroste bătrân pe nume Velian. 
Nu era nici bogat, nici numeros la moșii. 
Avea însă un dar: înțelegea limba albinelor.

Într-o seară de iunie, când soarele se oprise jos peste lunca de la cotul râului, 
Velian s-a așezat lângă stupii lui și a auzit, pentru prima dată, un cuvânt limpede:

— Stăpâne, a zis vocea cea subțire, Cetatea moare.

Era Regina-Mamă a stupilor lui. 
Vorbea încet, cum vorbesc cei foarte bătrâni sau foarte răniți.

— De ce, Mamă? a întrebat Velian.

— Pentru că oamenii au uitat. Au uitat că noi suntem cavalerii Pământului. 
Au uitat Codul. Au uitat Legea. Au uitat că fără noi nu mai cresc florile, 
fără flori nu mai crește pâinea, fără pâine nu mai sunt copii.

Velian a îngenuncheat. 
Era pentru întâia oară când îngenunchea în fața unei vietăți mai mici decât pumnul lui.

— Ce să fac, Mamă?

— Întemeiază un Ordin. Adună copiii. Spune-le poveștile. Învață-i Codul. 
Pune-le sigiliul nostru pe inimă. 
Cât timp un copil va ști cine suntem, vom mai trăi.

A doua zi, Velian a luat un fagure și l-a apăsat în ceară curată. 
Așa s-a născut Sigiliul Ordinului — hexagonul de aur cu albina la mijloc.

Au trecut sute de ani. Velian s-a făcut pulbere. 
Stupii lui s-au mutat în alte locuri. 
Dar Ordinul a rămas. Trece din staroste în staroste. Din pergament în pergament. 
Acum a ajuns la mine, Starostele Daniel.

Și-acum ajunge la tine.

Dacă citești asta — ești chemat.
```

**Ornamente:** hexagoane fagure pe margini, sigiliu mic la final.

---

## `/povesti/floricica` — Glas de Prieten

### Header
**h1:**
```
Povestea Floricicăi
```

**Ilustrație:** SVG simplu inline — floare 5 petale + albină stilizată zburând spre ea.

### Text narativ
```
Floricica era cea mai mică floare din lunca de la marginea pădurii.

Atât de mică, încât toate celelalte flori o uitau. 
Macul cel roșu se lăuda cu pălăria lui. 
Margareta număra petalele și se mira singură cât e de frumoasă. 
Albăstrelul vorbea numai cu cerul. 
Iar Floricica stătea jos, lângă rădăcini, 
și se întreba dacă are vreun rost pe lume.

— Sunt prea mică, își spunea. Nimeni n-o să mă vadă niciodată.

Într-o dimineață, când soarele abia răsărise peste lunca, 
a sosit la ea o oaspetă cu aripi de aur.

— Bună dimineața, Floricica, a zis oaspetele.

Floricica a tresărit. 
Era o albină. O albină adevărată, cu ochi mari, 
cu picioare îmbrăcate în polen galben, 
cu un zumzet blând ca o mângâiere.

— Mă cunoști? a întrebat Floricica, mirată.

— Te cunoaștem toate, a zis albina. Ești pe pergamentul Reginei. 
Pe locul al patrulea, sub Macul Roșu și deasupra Trifoiului.

— Pe pergamentul Reginei? a îngânat Floricica.

— Bineînțeles. Noi avem o hartă a tuturor florilor. 
Și știi de ce ești pe ea?

— Pentru că sunt mică și nu mă vede nimeni?

— Nu, a zâmbit albina. 
Pentru că polenul tău e cel mai dulce din toată lunca. 
L-am gustat săptămâna trecută. 
Mama-Regină a zis: „Mâine să mergeți întâi la Floricica." 
Așa că iată-mă.

Floricica a rămas fără cuvinte.

— Tu... mă cunoști pe nume?

— Toate florile au nume în Ordinul nostru, a zis albina. 
Te cheamă Floricica. 
Iar polenul tău, dacă vrei să-mi dai puțin, 
va merge mâine în mierea Reginei. 
Iar mierea Reginei va hrăni un Cavaler Guardian. 
Iar Cavalerul Guardian va apăra cetatea. 
Iar cetatea va trimite, peste vară, alte albine la alte flori. 
Așa lucrează lumea, Floricica. Tu ești în mijloc.

Floricica a întins petalele cu toată puterea ei mică.

— Atunci ia, a zis. Ia tot.

Albina a luat polenul ei dulce, 
a făcut o plecăciune scurtă 
și a zburat înapoi spre cetate.

Și de-atunci, în fiecare dimineață, 
Floricica nu mai era cea mai mică floare a luncii.

Era cea mai dulce.
```

### CTA jos
```
Vrei să afli cum a sosit Floricica pe pergamentul Reginei? 
Cere scrisoarea Starostelui și află, săptămâna viitoare, povestea a doua.
```
Buton: `Cere scrisoarea →` (link la `/#newsletter`)

---

## `/scrisoare-catre-staroste` — Glas de Staroste

### Header
**h1:**
```
Scrisoare către Staroste
```

### Text
```
Dacă ai o întrebare, o poveste de copil, o vorbă bună sau una grea, scrie-mi.

Eu citesc fiecare pergament. 
Răspund la toate, deși uneori îmi ia câteva zile, 
căci stupii cer atenție și pădurea își are toanele ei.

Pergamentele se trimit la:
```

**Email afișat (clickable mailto, font mare ceremonial):**
```
staroste@ordinulalbinelor.ro
```

```
Dacă ești copil, roagă-l pe părinte să apese pe sigiliu. 
Dacă ești părinte, scrie ce vrei. 
Dacă ești învățător, învățătoare, bunic sau bunică — 
îmi e drag de toți. Ordinul nu face deosebire.
```

**Semnătură:**
```
— Starostele Daniel
```

**Notă:** NU se afișează adresă fizică (apiar). Doar email.

---

## `/confidentialitate` — Neutru-formal cu sigiliu Ordin

### Header
**h1:**
```
Confidențialitate
```

### Operator
```
Operator de date cu caracter personal:
Daniel Vicențiu — persoană fizică
Email: staroste@ordinulalbinelor.ro
```

### Date colectate
```
Colectăm strict datele necesare pentru a-ți trimite scrisorile Ordinului:
- Adresa de email
- Prenumele tău (părinte)
- Opțional: prenumele și vârsta copiilor (dacă vrei povești adaptate)
- Adresa IP și agentul browserului la momentul înscrierii (pentru evidență consimțământ)
```

### Scop
```
Trimiterea unui newsletter ceremonial cu povești pentru copii, 
maximum 2 (două) trimiteri pe lună.

Nu vindem, nu cedăm și nu împărtășim datele tale cu nimeni. 
Nu folosim datele copiilor pentru profiling sau publicitate.
```

### Temei legal
```
Articolul 6 alineatul (1) litera (a) din Regulamentul (UE) 2016/679 (GDPR) — 
consimțământul tău explicit, confirmat prin double opt-in 
(apăsarea pe sigiliul din emailul de confirmare).
```

### Drepturi
```
Conform GDPR, ai dreptul:
- de acces la datele tale
- de rectificare
- de ștergere (dreptul de a fi uitat)
- de opoziție
- de retragere a consimțământului oricând

Te poți dezabona instant cu un click din fiecare scrisoare a Ordinului.

Pentru orice cerere, scrie la: staroste@ordinulalbinelor.ro
Răspundem în maximum 30 de zile.
```

### Stocare
```
- Datele de înscriere: Supabase (server în Frankfurt, Germania, UE)
- Trimiterea emailurilor: Resend (server în Irlanda, UE)
- Retenție: până la dezabonarea ta. După dezabonare, ștergem complet datele.
- Cookies: NU folosim cookies de tracking. Nici Google Analytics, nici Facebook Pixel, nici altele.
```

### Plângeri
```
Dacă crezi că-ți încălcăm drepturile, ai dreptul să te plângi la:

Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP)
B-dul G-ral. Gheorghe Magheru 28-30, Sector 1, București
Email: anspdcp@dataprotection.ro
Web: www.dataprotection.ro
```

### Modificări
```
Această politică poate fi actualizată. 
Versiunea curentă a fost publicată la [data deploy].
```

---

## `/multumesc` — Glas de Staroste (post-signup, înainte confirm)

### Header
**h1:**
```
Pergamentul a fost trimis
```

### Text central (cu sigiliu mare deasupra)
```
Verifică-ți cutia de scrisori. 
Starostele așteaptă confirmarea ta.

Apasă pe sigiliul din email pentru a închide cercul Ordinului.
```

### Notă mică (font mic)
```
Dacă scrisoarea nu sosește în 5 minute, uită-te în „spam" sau „promoții" — 
pergamentele moderne se rătăcesc uneori printre reclame.

Dacă tot nu o găsești, scrie-mi: staroste@ordinulalbinelor.ro
```

---

## `/confirma/[token]` — Glas de Staroste

### Stare 1: SUCCES (token valid, pending → confirmed)

**Header:**
```
Bine ai venit în Ordin
```

**Text central (sigiliu aprins deasupra):**
```
Sigiliul tău e aprins.

Prima scrisoare sosește la sfârșitul săptămânii.

Până atunci, citește Codul Ordinului și Legenda Cetății de Ceară.
```

**Butoane:**
- `Citește Codul →` (link `/codul-ordinului`)
- `Citește Legenda →` (link `/legenda`)

### Stare 2: DEJA CONFIRMAT

**Header:**
```
Ești deja în Ordin
```
**Text:**
```
Sigiliul tău era deja aprins. 
Continuă să primești scrisorile Starostelui — 
prima sau următoarea sosește la sfârșitul săptămânii.
```

### Stare 3: TOKEN INVALID/EXPIRAT

**Header:**
```
Pergamentul nu mai e valid
```
**Text:**
```
Sigiliul s-a stins înainte să apuci să-l atingi.

Trimite-ne din nou semnul, din pagina de început, 
și Starostele te va primi.
```
**Buton:**
```
Înapoi la pagina de început →
```

---

## EMAIL: Confirmare double opt-in

**Subject:**
```
Sigiliul tău așteaptă — confirmă pergamentul
```

**Preheader (text scurt afișat în inbox):**
```
Apasă sigiliul pentru a închide cercul Ordinului.
```

**Body (HTML Resend, ton Staroste):**
```
Bine ai venit, [prenume_parinte].

Pentru ca scrisorile Starostelui să sosească la tine, 
apasă pe sigiliul de mai jos. 
Așa închidem cercul Ordinului.

[BUTON: Confirmă sigiliul] → https://ordinulalbinelor.ro/confirma/[token]

Dacă n-ai cerut tu pergamentul, șterge acest mesaj. 
Nu se va întâmpla nimic.

— Starostele Daniel
```

---

## EMAIL: Welcome (după confirm) — MESAJ SCURT, fără micro-poveste

**Subject:**
```
Bine ai venit în Ordinul Albinelor
```

**Preheader:**
```
Sigiliul tău e aprins. Prima scrisoare sosește la sfârșitul săptămânii.
```

**Body:**
```
Sigiliul tău e aprins, [prenume_parinte].

Prima scrisoare cu o poveste nouă sosește la sfârșitul săptămânii. 
Până atunci, copiii pot citi:

→ Povestea Floricicăi: https://ordinulalbinelor.ro/povesti/floricica
→ Legenda Cetății de Ceară: https://ordinulalbinelor.ro/legenda

Dacă vreți să-mi scrieți, sunt la staroste@ordinulalbinelor.ro. 
Citesc fiecare pergament.

Cu prietenie,
Starostele Daniel

—
Te-ai înscris pentru a primi scrisorile Ordinului Albinelor.
Te poți dezabona oricând: [link unsubscribe]
```

---

## MICROCOPY (button labels, validări, toast messages)

### Form validation errors
- email gol: `Pergamentul nu poate ajunge fără adresă.`
- email invalid: `Pergamentul nu pleacă spre o adresă pe care nu o înțelegem.`
- prenume gol: `Cum să te strige Starostele dacă nu-i spui prenumele?`
- gdpr nebifat: `Trebuie să apeși pe sigiliul de încuviințare ca să te primim în Ordin.`
- vârsta în afara intervalului: `Vârsta o scriem între 0 și 18.`
- email duplicat (deja confirmat): `Ești deja în Ordin. Scrisorile vin către tine.`
- email duplicat (pending): `Ți-am trimis din nou pergamentul de confirmare. Verifică.`

### Toast / Sonner
- succes signup: `Pergamentul pleacă spre tine. Verifică emailul.`
- eroare server: `Pergamentul s-a împotmolit. Încearcă peste un minut.`

### Buton form
- normal: `Trimite pergamentul`
- loading: `Pergamentul pleacă...`

### 404 not-found page
**h1:** `Pergamentul nu există`
**Text:** `Calea aceasta nu duce nicăieri în Cetate. Revino la pagina de început.`
**Buton:** `Înapoi la Cetate →`

---

## SEO — meta titles & descriptions

| Rută | Title | Description |
|---|---|---|
| `/` | Ordinul Albinelor — Povești pentru copii din Cetatea de Ceară | Univers narativ apicol pentru copii. Scrisori ceremoniale de la Starostele Daniel. |
| `/despre-ordin` | Despre Ordin — Ordinul Albinelor | Cuvântul Starostelui Daniel despre rostul Ordinului. |
| `/codul-ordinului` | Codul Ordinului — 4 piloni, 7 legi, 10 ranguri | Disciplină, Sacrificiu, Comuniune, Misiune. Codul cavalerilor cu aripi de aur. |
| `/legenda` | Legenda Cetății de Ceară — Ordinul Albinelor | Cum a întemeiat starostele Velian Ordinul Albinelor. |
| `/povesti/floricica` | Povestea Floricicăi — Ordinul Albinelor | Prima poveste pentru copii din universul Ordinului. |
| `/scrisoare-catre-staroste` | Scrisoare către Staroste — Ordinul Albinelor | Scrie-i Starostelui Daniel. Răspund la fiecare pergament. |
| `/confidentialitate` | Confidențialitate — Ordinul Albinelor | Cum protejăm datele tale și ale copiilor tăi. |

---

## OG image (provizoriu)

Folosește un SVG inline transformat în `/public/og-image.svg` cu:
- fundal pergament
- sigiliu hexagonal aurit cu albină în centru
- text: "Ordinul Albinelor"
- subtext: "Povești pentru copii din Cetatea de Ceară"

Daniel încarcă o imagine reală mâine.
