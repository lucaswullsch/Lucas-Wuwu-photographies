import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Boutique(){
  return (
    <div>
      <Navbar />
      <main className="container py-12">
        <h1 className="text-2xl font-bold">Boutique</h1>
        <p className="mt-4">La boutique est en préparation. Pour commander un tirage, merci de me contacter.</p>
        <div className="mt-6">
          <a href="/contact" className="px-4 py-2 rounded border inline-block">Me contacter pour un tirage</a>
        </div>
      </main>
      <Footer />
    </div>
  )
}
