import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import GalleryGrid from '../components/GalleryGrid'
import Lightbox from '../components/Lightbox'
import {useState} from 'react'
import PHOTOS from '../data/photos'

const preview = [...PHOTOS.paysages.slice(0,2), ...PHOTOS.portraits.slice(0,2), ...PHOTOS.artisanat.slice(0,2)]

export default function Home(){
  const [idx, setIdx] = useState(null)
  return (
    <div>
      <Navbar />
      <Hero title="Lucas Wullschleger" subtitle="Photographies de Drôme et d'ailleurs" />
      <main className="container py-8">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Aperçu des galeries</h2>
          <GalleryGrid images={preview} onOpen={(i)=>setIdx(i)} />
        </section>
        <section className="mt-8">
          <h3 className="text-xl font-medium">Galeries</h3>
          <div className="mt-4 flex gap-4">
            <a href="/gallery/paysages" className="underline">Paysages</a>
            <a href="/gallery/portraits" className="underline">Portraits</a>
            <a href="/gallery/artisanat" className="underline">Artisanat</a>
          </div>
        </section>
      </main>
      <Footer />
      <Lightbox images={preview} index={idx} onClose={()=>setIdx(null)} />
    </div>
  )
}
