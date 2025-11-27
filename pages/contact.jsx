import {useState} from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Contact(){
  const [status,setStatus]=useState(null)
  async function handleSubmit(e){
    e.preventDefault()
    setStatus('sending')
    const form = new FormData(e.target)
    const res = await fetch('/api/contact',{method:'POST',body:form})
    if(res.ok) setStatus('ok')
    else setStatus('error')
  }
  return (
    <div>
      <Navbar />
      <main className="container py-12">
        <h1 className="text-2xl font-bold">Contact</h1>
        <p className="mt-2">Pour commander un tirage ou pour toute demande, utilise le formulaire ci-dessous.</p>
        <form onSubmit={handleSubmit} className="mt-6 max-w-xl">
          <label className="block mb-2">Nom</label>
          <input name="name" required className="w-full p-2 border rounded bg-transparent" />
          <label className="block mt-4 mb-2">Email</label>
          <input name="email" type="email" required className="w-full p-2 border rounded bg-transparent" />
          <label className="block mt-4 mb-2">Message</label>
          <textarea name="message" rows="6" required className="w-full p-2 border rounded bg-transparent"></textarea>
          <div className="mt-4">
            <button type="submit" className="px-4 py-2 rounded border">Envoyer</button>
          </div>
          {status==='sending' && <p className="mt-2">Envoi…</p>}
          {status==='ok' && <p className="mt-2 text-green-600">Message envoyé — merci !</p>}
          {status==='error' && <p className="mt-2 text-red-600">Erreur lors de l'envoi.</p>}
        </form>
        <div className="mt-8 text-sm text-gray-600">
          <p>Le formulaire utilise Formspree via une variable d'environnement `FORMSPREE_ENDPOINT`.</p>
        </div>
      </main>
      <Footer />
    </div>
  )
}
