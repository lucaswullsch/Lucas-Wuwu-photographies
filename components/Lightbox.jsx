import {useEffect} from 'react'
export default function Lightbox({images, index, onClose}) {
  useEffect(()=>{ function onKey(e){ if(e.key==='Escape') onClose() }; window.addEventListener('keydown', onKey); return ()=>window.removeEventListener('keydown', onKey) },[onClose])
  if(index===null) return null
  const img = images[index]
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center modal-backdrop">
      <div className="max-w-[90%] max-h-[90%]">
        <img src={img.src} alt={img.title} className="max-w-full max-h-[80vh] rounded shadow-lg" />
        <div className="mt-2 text-center">
          <button onClick={onClose} className="px-3 py-1 rounded border">Fermer</button>
        </div>
      </div>
    </div>
  )
}
