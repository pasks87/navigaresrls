import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Informativa Privacy | Navigare SRLS" },
      { name: "description", content: "Informativa sul trattamento dei dati personali ai sensi del Regolamento UE 2016/679 (GDPR)." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <>
      <header className="site-header">
        <div className="site-width header-inner">
          <Link to="/" className="brand" aria-label="Torna alla home">
            <div className="brand-name">NAVIGARE <span>PITTURAZIONE E RISANAMENTO · SRLS</span></div>
          </Link>
        </div>
      </header>
      <main className="section site-width" style={{ maxWidth: 760, paddingTop: "3rem", paddingBottom: "4rem" }}>
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors">
          <ArrowLeft className="size-4" /> Torna alla home
        </Link>

        <h1 className="text-3xl font-bold tracking-tight mb-2">Informativa Privacy</h1>
        <p className="text-sm text-muted-foreground mb-8">Ai sensi dell'art. 13 del Regolamento UE 2016/679 (GDPR)</p>

        <section className="prose prose-sm max-w-none space-y-6 text-foreground">
          <div>
            <h2 className="text-lg font-semibold mb-2">1. Titolare del trattamento</h2>
            <p>
              <strong>Navigare SRLS</strong><br />
              E-mail: <a href="mailto:navigaresrls@gmail.com" className="underline">navigaresrls@gmail.com</a><br />
              PEC: navigaresrls@pec.it<br />
              Tel.: <a href="tel:+393356624576" className="underline">+39 335 662 4576</a>
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">2. Dati raccolti</h2>
            <p>Il presente sito web non raccoglie dati personali attraverso moduli di contatto o registrazioni. Le uniche interazioni disponibili sono:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Chiamata telefonica diretta al numero indicato (dati gestiti dall'operatore telefonico).</li>
              <li>Invio di e-mail tramite il client di posta dell'utente (dati gestiti dal provider e-mail dell'utente).</li>
            </ul>
            <p className="mt-2">In entrambi i casi il trattamento avviene al di fuori di questo sito e non è sotto il controllo diretto di Navigare SRLS.</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">3. Dati di navigazione</h2>
            <p>I sistemi informatici e le procedure software preposti al funzionamento di questo sito acquisiscono, nel corso del loro normale esercizio, alcuni dati personali la cui trasmissione è implicita nell'uso dei protocolli di comunicazione di Internet (es. indirizzi IP, tipo di browser, sistema operativo, ora della richiesta). Tali dati non sono raccolti per essere associati a interessati identificati, ma potrebbero permettere l'identificazione dell'utente in caso di necessità. Sono conservati per il tempo strettamente necessario e cancellati al termine dell'elaborazione.</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">4. Cookie</h2>
            <p>Il sito non utilizza cookie di profilazione o di tracciamento di terze parti. Potrebbero essere utilizzati esclusivamente cookie tecnici essenziali al funzionamento del sito (es. preferenze di sessione). Nessun dato viene ceduto a terzi per finalità di marketing.</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">5. Base giuridica e finalità</h2>
            <p>I dati di navigazione sono trattati sulla base del legittimo interesse del titolare (art. 6, par. 1, lett. f GDPR) per garantire la sicurezza e il corretto funzionamento del sito.</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">6. Diritti dell'interessato</h2>
            <p>L'utente ha il diritto di accedere ai propri dati personali, chiederne la rettifica, la cancellazione, la limitazione del trattamento, la portabilità e di opporsi al trattamento (artt. 15–22 GDPR). Per esercitare tali diritti è possibile contattare il titolare all'indirizzo e-mail indicato al punto 1. L'utente ha inoltre il diritto di proporre reclamo al Garante per la protezione dei dati personali (<a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer" className="underline">www.garanteprivacy.it</a>).</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">7. Aggiornamenti</h2>
            <p>Questa informativa può essere aggiornata. La versione pubblicata su questa pagina è sempre quella vigente.</p>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="site-width footer-inner">
          <strong>NAVIGARE SRLS</strong>
          <p>© {new Date().getFullYear()} Navigare SRLS · Pitturazione interni, esterni e risanamento</p>
          <Link to="/privacy" className="inline-flex items-center gap-2 text-sm">Privacy</Link>
        </div>
      </footer>
    </>
  );
}
