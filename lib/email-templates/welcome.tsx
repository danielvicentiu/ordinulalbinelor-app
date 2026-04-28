import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";

interface WelcomeEmailProps {
  prenume: string;
  siteUrl: string;
  unsubscribeUrl: string;
}

export function WelcomeEmail({ prenume, siteUrl, unsubscribeUrl }: WelcomeEmailProps) {
  return (
    <Html lang="ro">
      <Head />
      <Preview>Sigiliul tău e aprins. Prima scrisoare sosește la sfârșitul săptămânii.</Preview>
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
                <linearGradient id="hgw" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#e6c14a" />
                  <stop offset="100%" stopColor="#9a7a14" />
                </linearGradient>
              </defs>
              <polygon
                points="50,2 97,28.74 97,82.24 50,109 3,82.24 3,28.74"
                fill="url(#hgw)"
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
            <Heading style={headingStyle}>Bine ai venit în Ordinul Albinelor</Heading>
          </Section>

          {/* Body */}
          <Section style={sectionStyle}>
            <Text style={greetStyle}>Sigiliul tău e aprins, {prenume}.</Text>
            <Text style={textStyle}>
              Prima scrisoare cu o poveste nouă sosește la sfârșitul săptămânii.
              Până atunci, copiii pot citi:
            </Text>

            <Section style={{ margin: "20px 0" }}>
              <Text style={linkLineStyle}>
                → <Link href={`${siteUrl}/povesti/floricica`} style={linkStyle}>Povestea Floricicăi</Link>
              </Text>
              <Text style={linkLineStyle}>
                → <Link href={`${siteUrl}/legenda`} style={linkStyle}>Legenda Cetății de Ceară</Link>
              </Text>
            </Section>

            <Text style={textStyle}>
              Dacă vreți să-mi scrieți, sunt la{" "}
              <Link href="mailto:staroste@ordinulalbinelor.ro" style={linkStyle}>
                staroste@ordinulalbinelor.ro
              </Link>
              . Citesc fiecare pergament.
            </Text>

            <Text style={signatureStyle}>
              Cu prietenie,<br />
              Starostele Daniel
            </Text>
          </Section>

          <Hr style={hrStyle} />

          <Section style={footerSectionStyle}>
            <Text style={footerTextStyle}>
              Te-ai înscris pentru a primi scrisorile Ordinului Albinelor.
            </Text>
            <Text style={footerTextStyle}>
              Te poți dezabona oricând:{" "}
              <Link href={unsubscribeUrl} style={unsubLinkStyle}>
                dezabonare
              </Link>
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
  fontSize: "22px",
  fontWeight: "bold",
  color: "#2d1b0e",
  margin: "12px 0 0",
  letterSpacing: "0.5px",
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
  margin: "0 0 12px",
};

const linkLineStyle = {
  fontFamily: "Georgia, serif",
  fontSize: "15px",
  color: "#5a4220",
  margin: "4px 0",
};

const linkStyle = {
  color: "#c9a227",
  textDecoration: "underline",
};

const signatureStyle = {
  fontFamily: "Georgia, serif",
  fontSize: "15px",
  color: "#5a4220",
  fontStyle: "italic",
  marginTop: "24px",
};

const hrStyle = {
  borderColor: "rgba(201,162,39,0.3)",
  margin: "0",
};

const footerSectionStyle = {
  padding: "16px 32px",
};

const footerTextStyle = {
  fontFamily: "Georgia, serif",
  fontSize: "11px",
  color: "#9a7a14",
  textAlign: "center" as const,
  margin: "4px 0",
};

const unsubLinkStyle = {
  color: "#9a7a14",
  textDecoration: "underline",
};
