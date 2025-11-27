import '../styles/globals.css'
import {useEffect} from 'react'

function setInitialTheme() {
  try {
    const stored = localStorage.getItem('theme')
    if (stored) {
      if (stored === 'dark') document.documentElement.classList.add('dark')
      else document.documentElement.classList.remove('dark')
    } else {
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
      if (prefersDark) document.documentElement.classList.add('dark')
    }
  } catch (e) {}
}

export default function App({ Component, pageProps }) {
  useEffect(()=>{ setInitialTheme() }, [])
  return <Component {...pageProps} />
}
