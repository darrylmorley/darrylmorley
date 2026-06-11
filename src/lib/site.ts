// Central place for contact details and site facts.
type SiteConfig = {
  name: string;
  company: string;
  companyUrl: string;
  domain: string;
  email: string;
  // No phone on the site until a local VoIP number exists. When it does,
  // set both fields and every phone link reappears automatically.
  phone: string | null;
  phoneHref: string | null;
  towns: readonly string[];
  region: string;
};

export const site: SiteConfig = {
  name: "Darryl Morley",
  company: "Bitmoor Ltd",
  companyUrl: "https://www.bitmoor.co.uk",
  domain: "https://www.darrylmorley.co.uk",
  email: "hello@darrylmorley.co.uk",
  phone: "01608 610250",
  phoneHref: "tel:+441608610250",
  towns: [
    "Moreton-in-Marsh",
    "Shipston-on-Stour",
    "Chipping Campden",
    "Stratford-upon-Avon",
  ],
  region: "North Cotswolds",
};
