import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/cookie")({
  head: () => ({
    meta: [
      { title: "Cookie Policy | Navigare SRLS" },
      { name: "description", content: "Informativa sull'uso dei cookie sul sito navigare.cloud." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: CookiePolicy,
});

function CookiePolicy() {
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

        <h1 className="text-3xl font-bold tracking-tight mb-2">Cookie Policy</h1>
        <p className="text-sm text-muted-foreground mb-8">Ai sensi dell'art. 122 del D.Lgs. 196/2003 e del Provvedimento Garante Privacy dell'8 maggio 2014</p>

        <section className="space-y-6 text-foreground" style={{ fontSize: 14, lineHeight: 1.75 }}>
          <div>
            <h2 className="text-lg font-semibold mb-2">Cosa sono i cookie</h2>
            <p>I cookie sono piccoli file di testo che i siti visitati inviano al browser dell'utente, dove vengono memorizzati per essere poi ritrasmessi allo stesso sito alla visita successiva. Consentono al sito di ricordare le azioni e le preferenze dell'utente nel tempo.</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Cookie utilizzati da questo sito</h2>
            <p>Il sito <strong>navigare.cloud</strong> utilizza esclusivamente cookie tecnici di prima parte, necessari al corretto funzionamento del sito stesso. Non vengono utilizzati cookie di profilazione, di tracciamento o di terze parti (es. Google Analytics, Facebook Pixel o simili).</p>

            <table style={{ width: "100%", marginTop: 16, borderCollapse: "collapse", fontSize: 13 }}>
              <thead>
                <tr style={{ borderBottom: "2px solid var(--border)" }}>
                  <th style={{ textAlign: "left", padding: "8px 12px 8px 0", fontWeight: 600 }}>Nome</th>
                  <th style={{ textAlign: "left", padding: "8px 12px", fontWeight: 600 }}>Tipo</th>
                  <th style={{ textAlign: "left", padding: "8px 12px", fontWeight: 600 }}>Scopo</th>
                  <th style={{ textAlign: "left", padding: "8px 0 8px 12px", fontWeight: 600 }}>Durata</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: "1px solid var(--border)" }}>
                  <td style={{ padding: "10px 12px 10px 0", fontFamily: "monospace" }}>navigare_cookie_consent</td>
                  <td style={{ padding: "10px 12px" }}>Tecnico</td>
                  <td style={{ padding: "10px 12px" }}>Memorizza la scelta dell'utente sul banner cookie per non mostrarlo di nuovo</td>
                  <td style={{ padding: "10px 0 10px 12px" }}>1 anno</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Cookie di terze parti</h2>
            <p>Il sito utilizza i seguenti servizi di terze parti che possono installare cookie:</p>

            <table style={{ width: "100%", marginTop: 16, borderCollapse: "collapse", fontSize: 13 }}>
              <thead>
                <tr style={{ borderBottom: "2px solid var(--border)" }}>
                  <th style={{ textAlign: "left", padding: "8px 12px 8px 0", fontWeight: 600 }}>Servizio</th>
                  <th style={{ textAlign: "left", padding: "8px 12px", fontWeight: 600 }}>Finalità</th>
                  <th style={{ textAlign: "left", padding: "8px 12px", fontWeight: 600 }}>Tipo</th>
                  <th style={{ textAlign: "left", padding: "8px 0 8px 12px", fontWeight: 600 }}>Informativa</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: "1px solid var(--border)" }}>
                  <td style={{ padding: "10px 12px 10px 0", fontWeight: 500 }}>Google Analytics 4</td>
                  <td style={{ padding: "10px 12px" }}>Analisi statistica del traffico (pagine visitate, durata sessione, provenienza geografica)</td>
                  <td style={{ padding: "10px 12px" }}>Analitico — terza parte</td>
                  <td style={{ padding: "10px 0 10px 12px" }}><a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="underline">Google Privacy Policy</a></td>
                </tr>
              </tbody>
            </table>

            <p className="mt-4">I dati raccolti da Google Analytics sono anonimizzati e aggregati; non vengono utilizzati per identificare singoli utenti. L'IP viene anonimizzato prima della trasmissione a Google. Cliccando <strong>"Solo necessari"</strong> nel banner, i cookie analitici non vengono attivati.</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Come gestire o disabilitare i cookie</h2>
            <p>L'utente può modificare le impostazioni dei cookie direttamente dal proprio browser. Di seguito i link alle guide dei principali browser:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="underline">Google Chrome</a></li>
              <li><a href="https://support.mozilla.org/it/kb/protezione-antitracciamento-avanzata-firefox" target="_blank" rel="noopener noreferrer" className="underline">Mozilla Firefox</a></li>
              <li><a href="https://support.apple.com/it-it/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="underline">Apple Safari</a></li>
              <li><a href="https://support.microsoft.com/it-it/windows/eliminare-e-gestire-i-cookie-168dab11-0753-043d-7c16-ede5947fc64d" target="_blank" rel="noopener noreferrer" className="underline">Microsoft Edge</a></li>
            </ul>
            <p className="mt-3">La disabilitazione dei cookie tecnici potrebbe compromettere alcune funzionalità del sito.</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Revoca del consenso</h2>
            <p>L'utente può revocare il consenso prestato in qualsiasi momento cancellando il cookie <code className="bg-muted px-1 py-0.5 rounded text-xs">navigare_cookie_consent</code> dal proprio browser, oppure cliccando il pulsante seguente:</p>
            <button
              onClick={() => { try { localStorage.removeItem("navigare_cookie_consent"); window.location.reload(); } catch {} }}
              style={{ marginTop: 12, padding: "8px 18px", fontSize: 13, borderRadius: 6, border: "1px solid var(--border)", background: "transparent", cursor: "pointer" }}
            >
              Reimposta preferenze cookie
            </button>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Titolare del trattamento</h2>
            <p>
              Navigare SRLS — P.IVA 05668510653<br />
              <a href="mailto:navigaresrls@gmail.com" className="underline">navigaresrls@gmail.com</a><br />
              Per ulteriori informazioni consulta l'<Link to="/privacy" className="underline">Informativa Privacy</Link>.
            </p>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="site-width footer-inner">
          <strong>NAVIGARE SRLS</strong>
          <p>© {new Date().getFullYear()} Navigare SRLS · Pitturazione interni, esterni e risanamento</p>
          <div className="inline-flex items-center gap-4">
            <Link to="/privacy" className="text-sm opacity-70 hover:opacity-100 transition-opacity">Privacy</Link>
            <Link to="/cookie" className="text-sm opacity-70 hover:opacity-100 transition-opacity">Cookie</Link>
            <a href="#inizio" className="inline-flex items-center gap-2">Torna su <span style={{fontSize:11}}>↗</span></a>
          </div>
        </div>
      </footer>
    </>
  );
}
