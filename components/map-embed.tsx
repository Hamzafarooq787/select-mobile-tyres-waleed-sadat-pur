export function MapEmbed() {
  return (
    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl shadow-lg sm:aspect-[21/9]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.1882256810104!2d-0.28270282348395687!3d51.528107409190575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876111874593b9b%3A0xe5ca5b07581ff4d9!2sSelect%20tyres%20serivces!5e0!3m2!1sen!2s!4v1785005400766!5m2!1sen!2s"
        className="absolute inset-0 h-full w-full border-0"
        allowFullScreen
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
        title="Select Mobile Tyres location map"
      />
    </div>
  )
}
