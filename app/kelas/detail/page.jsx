// app/kelas/detail/page.jsx

import Navbar from "@/components/Navbar"

export default function Detail() {
  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto py-20 px-4">
        <h1 className="text-3xl font-bold mb-4">Matematika SMP</h1>
        <p className="text-slate-500 mb-8">Belajar konsep dasar aljabar dan geometri.</p>

        <div className="space-y-4 mb-10">
          <p>📚 Materi: Aljabar, Geometri</p>
          <p>⏰ Jadwal: Senin & Rabu 16.00</p>
          <p>⌛ Durasi: 60 menit / sesi</p>
        </div>

        <div className="border border-slate-200 p-6 rounded-xl mb-8">
          <h3 className="font-semibold mb-2">Pengajar</h3>
          <p>Rizki Pratama – Mahasiswa Pendidikan Matematika</p>
        </div>

        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl">
          Daftar Kelas
        </button>
      </div>
    </>
  )
}
