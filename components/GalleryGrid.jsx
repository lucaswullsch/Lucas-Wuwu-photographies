export default function GalleryGrid({images, onOpen}) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {images.map((img, idx) => (
        <button key={img.src} onClick={() => onOpen(idx)} className="block">
          <img src={img.src} alt={img.title} className="w-full h-48 object-cover rounded" />
        </button>
      ))}
    </div>
  )
}
