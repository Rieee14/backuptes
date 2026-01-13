import Navbar from "@/components/Navbar"

export default function Volunteer() {
  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto py-20 px-4 text-center">
        <h1 className="text-3xl font-bold mb-6">Apa Itu Volunteer?</h1>
        <p className="text-slate-500 mb-10">
          Volunteer adalah individu yang secara sukarela terlibat dalam kegiatan sosial, pendidikan, kemanusiaan, dan lingkungan tanpa mengharapkan imbalan materi.
Tujuan utama volunteer adalah membantu masyarakat dan memberikan dampak positif bagi lingkungan sekitar.
        </p>
        <a href="/dashboard/volunteer/register" className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl">
          Daftar Menjadi Volunteer
        </a>
      </div>
    </>
  )
}
