import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight, ArrowRight, Phone, Mail, Menu, X, Check, ShieldCheck, Award, Paintbrush, ClipboardCheck, Building2, Droplets, SwatchBook, Umbrella } from "lucide-react";
import { Button } from "@/components/ui/button";
import hero from "@/assets/interior-hero.jpg";
import facade from "@/assets/facade.jpg";
const logo = { url: "/navigare-logo.png" };

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Navigare SRLS | Pitturazione interni, esterni e condomini" },
    { name: "description", content: "Dal 2018 Navigare SRLS si occupa di pitturazione, finiture, risanamento e impermeabilizzazioni con prodotti di ultima generazione per appartamenti, uffici e condomini. Sopralluogo gratuito: +39 335 662 4576." },
    { property: "og:title", content: "Navigare SRLS | Il tuo spazio, una nuova vita" },
    { property: "og:description", content: "Pitturazione di interni ed esterni, manutenzione condominiale e risanamento. Competenza ingegneristica e cura dei dettagli. Richiedi un sopralluogo gratuito." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Index,
});

const phone = "tel:+393356624576";
const email = "mailto:navigaresrls@gmail.com?subject=Richiesta%20sopralluogo%20gratuito";
const navigation = [ ["Chi siamo", "chi-siamo"], ["I nostri servizi", "servizi"], ["Perché sceglierci", "perche-sceglierci"], ["Contatti", "contatti"] ];
const benefits = [
  { icon: Award, title: "40 anni di esperienza", text: "Alla direzione tecnica" },
  { icon: ShieldCheck, title: "Qualità che dura", text: "Materiali professionali certificati" },
  { icon: Paintbrush, title: "Cura di ogni dettaglio", text: "Dalla preparazione alle finiture" },
  { icon: ClipboardCheck, title: "Sopralluogo gratuito", text: "Preventivo senza impegno" },
];
const values = [
  { title: "Esperienza e tecnica", text: "40 anni di know-how tecnico alla direzione dei lavori. Competenza ingegneristica al servizio di ogni intervento." },
  { title: "Qualità dei materiali", text: "Prodotti professionali di primari marchi e cicli di pittura scelti in base alle esigenze delle superfici." },
  { title: "Affidabilità concreta", text: "Rispetto dei tempi e del preventivo, attenzione agli ambienti e pulizia del cantiere." },
  { title: "Cura anche dopo", text: "Lavori a regola d’arte e assistenza post-intervento. Un punto di riferimento, anche a lavoro concluso." },
];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <header className="site-header">
        <div className="site-width header-inner">
          <a className="brand" href="#inizio" aria-label="Navigare SRLS, inizio pagina">
            <img src={logo.url} alt="Logo Navigare SRLS" width={66} height={64} />
            <div className="brand-name">NAVIGARE <span>PITTURAZIONE E RISANAMENTO · SRLS</span></div>
          </a>
          <nav className="desktop-nav" aria-label="Navigazione principale">
            {navigation.map(([label, id]) => <a key={id} href={`#${id}`}>{label}</a>)}
          </nav>
          <Button asChild variant="hero" className="header-cta h-11 px-5 text-xs"><a href="#contatti">Richiedi un preventivo <ArrowUpRight /></a></Button>
          <Button variant="ghost" size="icon" className="menu-toggle" aria-label={menuOpen ? "Chiudi menu" : "Apri menu"} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</Button>
        </div>
        {menuOpen && <nav id="mobile-navigation" className="mobile-nav" aria-label="Navigazione mobile">{navigation.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}</a>)}</nav>}
      </header>
      <main id="inizio">
        <section className="hero" aria-labelledby="hero-title">
          <img className="hero-photo" src={hero} alt="Ambiente luminoso con pareti e finiture curate, immagine illustrativa" width={1920} height={1024} fetchPriority="high" />
          <div className="site-width hero-inner">
            <p className="eyebrow">Navigare SRLS · Dal 2018</p>
            <h1 id="hero-title">Pitturazione<br />e risanamento.<br /><em>Una nuova vita<br />ai tuoi spazi.</em></h1>
            <p className="hero-description">Interni, esterni e condomini. Uniamo la cura artigianale alla competenza ingegneristica, per un risultato bello da vedere e fatto per durare.</p>
            <div className="hero-actions">
              <Button variant="hero" asChild className="h-12 px-6 text-xs"><a href="#contatti">Richiedi un sopralluogo gratuito <ArrowUpRight /></a></Button>
              <Button variant="quiet" asChild className="h-12 px-2 text-xs"><a href="#servizi">Scopri i servizi <ArrowRight /></a></Button>
            </div>
            <p className="hero-note"><Check /> Senza impegno. Con tutta la nostra esperienza.</p>
          </div>
          <span className="hero-caption">Immagine illustrativa</span>
        </section>
        <div className="trust-band"><div className="site-width trust-grid">{benefits.map(({icon: Icon, title, text}) => <div className="trust-item" key={title}><Icon /><div><strong>{title}</strong><span>{text}</span></div></div>)}</div></div>
        <section id="servizi" className="section site-width" aria-labelledby="services-title">
          <div className="section-heading"><div><p className="eyebrow">I nostri servizi</p><h2 id="services-title">Ogni superficie merita<br />la giusta attenzione.</h2></div><p>Dalla tinteggiatura di una stanza alla riqualificazione di un condominio: soluzioni su misura, con un unico interlocutore.</p></div>
          <div className="service-grid">
            <article className="service-photo"><img src={hero} width={1920} height={1024} loading="lazy" alt="Finiture di un soggiorno, immagine illustrativa" /><div className="service-photo-content"><h3>Interni</h3><p>Appartamenti, uffici e negozi. Tinteggiatura, cartongesso, finiture decorative e carte da parati.</p></div></article>
            <article className="service-photo"><img src={facade} width={1024} height={1024} loading="lazy" alt="Facciata di un edificio residenziale, immagine illustrativa" /><div className="service-photo-content"><h3>Esterni</h3><p>Facciate, balconi e ringhiere. Pitture traspiranti, antimuffa e idrorepellenti.</p></div></article>
            <article className="service-icon-card"><Building2 /><h3>Condomini</h3><p>Manutenzione e riqualificazione di scale, androni, facciate e coperture. Gestione dei ponteggi e lavori in quota, con competenza tecnica.</p><a className="service-link" href="#contatti">Parliamo del tuo intervento <ArrowUpRight /></a></article>
            <div className="service-lower">
              <article className="service-icon-card"><Droplets /><h3>Risanamento e antimuffa</h3><p>Trattamenti antimuffa, deumidificazione e ripristino degli intonaci ammalorati. Interventi mirati alle esigenze delle superfici.</p></article>
              <article className="service-icon-card"><Umbrella /><h3>Impermeabilizzazioni</h3><p>Tetti, terrazzi, balconi e ambienti interrati. Cicli impermeabilizzanti con prodotti di ultima generazione: membrane, resine e guaine elastiche ad alta durabilità.</p></article>
              <article className="service-icon-card"><SwatchBook /><h3>Consulenza tecnica</h3><p>Sopralluogo gratuito, campionature colore, scelta dei materiali certificati e capitolato tecnico. La soluzione giusta, prima di iniziare.</p></article>
            </div>
          </div>
        </section>
        <section id="chi-siamo" className="section about" aria-labelledby="about-title"><div className="site-width about-grid">
          <div className="about-image"><img src={facade} loading="lazy" width={1024} height={1024} alt="Dettagli architettonici di una facciata, immagine illustrativa" /><div className="experience"><strong>40</strong><span>anni di esperienza<br />alla direzione tecnica</span></div></div>
          <div className="about-copy"><p className="eyebrow">Chi siamo</p><h2 id="about-title">La cura di un artigiano.<br />La visione di un ingegnere.</h2><p>NAVIGARE SRLS nasce nel 2018 per offrire un servizio di pittura professionale, preciso e duraturo per appartamenti, uffici e condomini.</p><p>Alla guida dell’impresa, il Legale Rappresentante e Direttore Tecnico è un Ingegnere Ambientale e Edile con un’esperienza personale e tecnica quarantennale nel settore edile, nel risanamento e nella gestione di cantieri civili e condominiali.</p><p>Affianchiamo alla qualità estetica una solida consulenza su materiali, cicli di pittura e problematiche di umidità.</p><div className="check-row"><Check /> Competenza tecnica in ogni fase del lavoro</div><div className="check-row"><Check /> Finiture lisce, spatolati, rasature e stuccature</div></div>
        </div></section>
        <section id="perche-sceglierci" className="section site-width" aria-labelledby="values-title"><p className="eyebrow">Perché scegliere Navigare</p><h2 id="values-title">Un buon lavoro si riconosce.<br />Anche nel tempo.</h2><div className="values">{values.map((value, i) => <article key={value.title}><span className="value-number">0{i + 1}</span><h3>{value.title}</h3><p>{value.text}</p></article>)}</div></section>
        <section id="contatti" className="contact" aria-labelledby="contact-title"><div className="site-width contact-grid"><div><p className="eyebrow">Iniziamo dal tuo progetto</p><h2 id="contact-title">Diamo nuova vita<br />ai tuoi spazi, insieme.</h2><p>Contattaci per un sopralluogo gratuito e un preventivo senza impegno. Raccontaci di cosa hai bisogno.</p></div><div className="contact-links"><a className="contact-link" href={phone}><Phone /><div><small>CHIAMACI</small><strong>+39 335 662 4576</strong></div><ArrowUpRight className="contact-arrow" /></a><a className="contact-link" href={email}><Mail /><div><small>SCRIVICI</small><strong>navigaresrls@gmail.com</strong></div><ArrowUpRight className="contact-arrow" /></a></div></div></section>
      </main>
      <footer className="footer"><div className="site-width footer-inner"><strong>NAVIGARE SRLS</strong><p>© {new Date().getFullYear()} Navigare SRLS · Pitturazione interni, esterni e risanamento · Immagini illustrative</p><div className="inline-flex items-center gap-4"><Link to="/privacy" className="text-sm opacity-70 hover:opacity-100 transition-opacity">Privacy</Link><a href="#inizio" className="inline-flex items-center gap-2">Torna su <ArrowUpRight className="size-3" /></a></div></div></footer>
    </>
  );
}
