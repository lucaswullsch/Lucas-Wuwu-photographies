import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function About(){
  const part1='lucas.wullsch', part2='gmail.com'
  const email = `${part1}@${part2}`
  return (
    <div>
      <Navbar />
      <main className="container py-12">
        <h1 className="text-2xl font-bold">Qui suis-je</h1>
        <div className="mt-6 md:flex gap-6">
          <div className="md:w-1/3">
            <img src="/images/about-portrait.jpg" alt="portrait" className="rounded shadow" />
          </div>
          <div className="md:flex-1">
            <p>Photographe basé en Drôme. J'explore les paysages, les visages et l'artisanat local à travers une approche épurée et sensible.</p>
            <p className="mt-4">Mon travail cherche à montrer la lumière et les détails qui racontent une histoire.</p>
            <p className="mt-6">Pour toute demande : <a href={`/mailto:${email}`} className="underline">{part1} [at] {part2}</a></p>
            <p className="mt-2 text-sm" style={{color:'var(--muted)'}}>L'email est volontairement obfusqué pour réduire les spams — utilisez le formulaire de contact.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
