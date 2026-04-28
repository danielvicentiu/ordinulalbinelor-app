import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";

interface ConfirmEmailProps {
  prenume: string;
  confirmUrl: string;
}

export function ConfirmEmail({ prenume, confirmUrl }: ConfirmEmailProps) {
  return (
    <Html lang="ro">
      <Head />
      <Preview>Apasă sigiliul pentru a închide cercul Ordinului.</Preview>
      <Body style={bodyStyle}>
        <Container style={containerStyle}>
          {/* Header */}
          <Section style={headerStyle}>
            <svg
              width="60"
              height="70"
              viewBox="0 0 100 115.47"
              xmlns="http://www.w3.org/2000/svg"
              style={{ margin: "0 auto", display: "block" }}
            >
              <defs>
                <linearGradient id="hg" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#e6c14a" />
                  <stop offset="100%" stopColor="#9a7a14" />
                </linearGradient>
              </defs>
              <polygon
                points="50,2 97,28.74 97,82.24 50,109 3,82.24 3,28.74"
                fill="url(#hg)"
                stroke="#9a7a14"
                strokeWidth="1.5"
              />
              <ellipse cx="35" cy="46" rx="14" ry="8" fill="white" opacity="0.6" transform="rotate(-20,35,46)" />
              <ellipse cx="65" cy="46" rx="14" ry="8" fill="white" opacity="0.6" transform="rotate(20,65,46)" />
              <ellipse cx="50" cy="62" rx="9" ry="12" fill="#2d1b0e" />
              <rect x="41" y="57" width="18" height="4" rx="1.5" fill="#c9a227" />
              <rect x="41" y="64" width="18" height="4" rx="1.5" fill="#c9a227" />
              <circle cx="50" cy="45" r="7" fill="#2d1b0e" />
            </svg>
            <Heading style={headingStyle}>Ordinul Albinelor</Heading>
          </Section>

          {/* Body */}
          <Section style={sectionStyle}>
            <Text style={greetStyle}>Bine ai venit, {prenume}.</Text>
            <Text style={textStyle}>
              Pentru ca scrisorile Starostelui să sosească la tine,
              apasă pe sigiliul de mai jos.
              Așa închidem cercul Ordinului.
            </Text>

            <Section style={{ textAlign: "center", margin: "32px 0" }}>
              <Button href={confirmUrl} style={buttonStyle}>
                Confirmă sigiliul
              </Button>
            </Section>

            <Text style={smallTextStyle}>
              Dacă n-ai cerut tu pergamentul, șterge acest mesaj.
              Nu se va întâmpla nimic.
            </Text>
          </Section>

          <Hr style={hrStyle} />

          <Section>
            <Text style={footerStyle}>
              — Starostele Daniel, păstrătorul Cetății de Ceară
            </Text>
            <Text style={footerSmallStyle}>
              Ordinul Albinelor • ordinulalbinelor.ro
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

const bodyStyle = {
  backgroundColor: "#faf6ea",
  fontFamily: "Georgia, serif",
  margin: "0",
  padding: "20px 0",
};

const containerStyle = {
  maxWidth: "560px",
  margin: "0 auto",
  backgroundColor: "#ffffff",
  border: "1px solid rgba(201,162,39,0.3)",
  borderRadius: "8px",
  overflow: "hidden",
};

const headerStyle = {
  backgroundColor: "#f5e9c8",
  padding: "32px 24px 24px",
  textAlign: "center" as const,
  borderBottom: "2px solid rgba(201,162,39,0.4)",
};

const headingStyle = {
  fontFamily: "Georgia, serif",
  fontSize: "24px",
  fontWeight: "bold",
  color: "#2d1b0e",
  margin: "12px 0 0",
  letterSpacing: "1px",
};

const sectionStyle = {
  padding: "32px 32px 24px",
};

const greetStyle = {
  fontFamily: "Georgia, serif",
  fontSize: "18px",
  color: "#2d1b0e",
  margin: "0 0 16px",
};

const textStyle = {
  fontFamily: "Georgia, serif",
  fontSize: "15px",
  color: "#5a4220",
  lineHeight: "1.7",
  margin: "0 0 16px",
};

const buttonStyle = {
  backgroundColor: "#c9a227",
  color: "#ffffff",
  fontFamily: "Georgia, serif",
  fontSize: "16px",
  fontWeight: "bold",
  padding: "14px 32px",
  borderRadius: "4px",
  textDecoration: "none",
  display: "inline-block",
  letterSpacing: "0.5px",
};

const smallTextStyle = {
  fontFamily: "Georgia, serif",
  fontSize: "13px",
  color: "#9a7a14",
  fontStyle: "italic",
  lineHeight: "1.6",
  margin: "0",
};

const hrStyle = {
  borderColor: "rgba(201,162,39,0.3)",
  margin: "0",
};

const footerStyle = {
  fontFamily: "Georgia, serif",
  fontSize: "14px",
  color: "#5a4220",
  fontStyle: "italic",
  textAlign: "center" as const,
  margin: "16px 0 4px",
  padding: "0 32px",
};

const footerSmallStyle = {
  fontFamily: "Georgia, serif",
  fontSize: "11px",
  color: "#9a7a14",
  textAlign: "center" as const,
  margin: "0 0 16px",
};
