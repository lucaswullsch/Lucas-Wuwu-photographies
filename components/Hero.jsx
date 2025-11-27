export default function Hero({title, subtitle}) {
  return (
    <section className="w-full">
      <div className="container py-12 md:flex items-center gap-8">
        <div className="md:w-1/2">
          <h1 className="text-3xl md:text-4xl font-bold">{title}</h1>
          <p className="mt-4 text-lg" style={{color:'var(--muted)'}}>{subtitle}</p>
        </div>
        <div className="md:w-1/2 mt-6 md:mt-0">
          <img src="/images/hero-placeholder.jpg" alt="hero" className="w-full rounded-lg shadow-lg" />
        </div>
      </div>
    </section>
  )
}
