import {useRouter} from 'next/router'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import GalleryGrid from '../../components/GalleryGrid'
import Lightbox from '../../components/Lightbox'
import {useState} from 'react'
import PHOTOS from '../../data/photos'

export default function Category(){
  const router = useRouter()
  const {category} = router.query
  const images = PHOTOS[category] || []
  const [idx,setIdx] = useState(null)
  return (
    <div>
      <Navbar />
      <main className="container py-12">
        <h1 className="text-2xl font-bold">{category}</h1>
        <div className="mt-6">
          <GalleryGrid images={images} onOpen={(i)=>setIdx(i)} />
        </div>
      </main>
      <Footer />
      <Lightbox images={images} index={idx} onClose={()=>setIdx(null)} />
    </div>
  )
}
