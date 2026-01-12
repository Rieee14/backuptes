"use client"

import Navbar from "@/components/Navbar"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function Request() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)

    // simulasi kirim data (nanti bisa ganti ke API)
    setTimeout(() => {
      router.push("/kelas")
    }, 800)
  }

  return (
    <>
      <Navbar />

      <form onSubmit={handleSubmit} className="max-w-xl mx-auto py-20 px-4">
        <h1 className="text-2xl font-bold mb-6">Ajukan Kebutuhan Belajar</h1>

        <input
          required
          className="border border-slate-300 rounded-lg p-3 w-full mb-4"
          placeholder="Jenjang"
        />

        <input
          required
          className="border border-slate-300 rounded-lg p-3 w-full mb-4"
          placeholder="Mata Pelajaran"
        />

        <textarea
          required
          className="border border-slate-300 rounded-lg p-3 w-full mb-6"
          placeholder="Kesulitan belajar..."
        />

        <button
          disabled={loading}
          className="bg-indigo-600 hover:bg-indigo-700 disabled:opacity-60 text-white w-full py-3 rounded-xl transition"
        >
          {loading ? "Mengirim..." : "Kirim Request"}
        </button>
      </form>
    </>
  )
}
