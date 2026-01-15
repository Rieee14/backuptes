export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-3 gap-10">
        <div>
          <h2 className="text-xl font-bold text-white mb-3">EduCare</h2>
          <p className="text-slate-400 text-sm">
            Platform sociopreneur pendidikan untuk pemerataan akses belajar gratis.
          </p>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Navigasi</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-white">Beranda</a></li>
            <li><a href="/kelas" className="hover:text-white">Kelas</a></li>
            <li><a href="/request" className="hover:text-white">Request Kelas</a></li>
            <li><a href="/volunteer" className="hover:text-white">Volunteer</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Kontak</h3>
          <p className="text-sm">Email: educare.id@gmail.com</p>
          <p className="text-sm">Instagram: @educare.id</p>
          <p className="text-sm">WhatsApp: 08xxxxxxxxxx</p>
        </div>
      </div>

    </footer>
  )
}
    