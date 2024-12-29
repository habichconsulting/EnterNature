'use client'

import Link from "next/link"

export default function Impressum() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <header
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 bg-white/80 backdrop-blur-sm`}
      >
        <div className="container mx-auto px-4">
          <div className="flex h-20 items-center justify-between">
            <Link href="/" className="text-xl font-bold text-[#649600]">EnterNature</Link>
          </div>
        </div>
      </header>

      {/* Spacer to prevent content from hiding under fixed header */}
      <div className="h-20" />

      {/* Impressum Content */}
      <main className="container mx-auto px-4 py-20">
        <h1 className="mb-8 text-4xl font-bold text-[#333333]">Impressum</h1>
        <div className="p-6">
          <h2 className="mb-4 text-2xl font-bold text-[#333333]">Angaben gemäß § 5 TMG</h2>
          <p className="mb-4">
            EnterNature GmbH<br />
            Gütersloher Straße 8<br />
            33803 Steinhagen
          </p>
          <p className="mb-4">
            <strong>Vertreten durch:</strong><br />
            Geschäftsführer: Ulrich Aouad
          </p>
          <p className="mb-4">
            <strong>Kontakt:</strong><br />
            Telefon: +49(0)171 / 9840193<br />
            E-Mail: info@enternature.de
          </p>
          <p className="mb-4">
            <strong>Registereintrag:</strong><br />
            Eintragung im Handelsregister.<br />
            Registergericht: Amtsgericht Gütersloh<br />
            Registernummer: HRB 13083
          </p>
          <h2 className="mb-4 mt-8 text-2xl font-bold text-[#333333]">Haftungsausschluss</h2>
          <h3 className="mb-2 text-xl font-bold text-[#333333]">Haftung für Inhalte</h3>
          <p className="mb-4">
            Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
          </p>
          <h3 className="mb-2 text-xl font-bold text-[#333333]">Haftung für Links</h3>
          <p className="mb-4">
            Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
          </p>
          <h3 className="mb-2 text-xl font-bold text-[#333333]">Urheberrecht</h3>
          <p className="mb-4">
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#C8E6FF] bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="mb-4">
              <Link href="/impressum" className="text-[#333333]/80 hover:text-[#649600]">
                Impressum
              </Link>
            </div>
            <div className="text-sm text-[#333333]/60">
              © {new Date().getFullYear()} EnterNature. Alle Rechte vorbehalten.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

