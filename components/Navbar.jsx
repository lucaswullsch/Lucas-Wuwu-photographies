import {useState, useEffect} from 'react'
export default function Navbar(){
  const [theme, setTheme] = useState('light')
  useEffect(()=>{ try{ setTheme(localStorage.getItem('theme') || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark':'light')) }catch(e){} },[])
  function toggle(){
    const next = theme==='dark'?'light':'dark'
    setTheme(next)
    try{ localStorage.setItem('theme', next); if(next==='dark') document.documentElement.classList.add('dark'); else document.documentElement.classList.remove('dark') }catch(e){}
  }
  return (
    <header className="w-full border-b">
      <div className="container flex items-center justify-between py-4">
        <div className="text-lg font-semibold">Lucas Wullschleger — Luwuwu photographies</div>
        <nav className="flex items-center gap-6">
          <a href="/" className="hover:underline">Accueil</a>
          <a href="/gallery/paysages" className="hover:underline">Galeries</a>
          <a href="/about" className="hover:underline">À propos</a>
          <a href="/boutique" className="hover:underline">Boutique</a>
          <a href="/contact" className="hover:underline">Contact</a>
          <button onClick={toggle} aria-label="Toggle theme" className="px-3 py-1 border rounded">
            {theme==='dark' ? 'Clair' : 'Sombre'}
          </button>
        </nav>
      </div>
    </header>
  )
}
