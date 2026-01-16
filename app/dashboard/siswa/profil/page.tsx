"use client"

import Navbar from "@/components/Navbar"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

export default function ProfilSiswa() {
  const router = useRouter()
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    const role = localStorage.getItem("EDUCARE_ROLE")
    const data = localStorage.getItem("EDUCARE_USER")

    if (role !== "siswa" || !data) {
      router.push("/dashboard/siswa/login")
      return
    }

    setUser(JSON.parse(data))
  }, [])

  const handleLogout = () => {
    localStorage.removeItem("EDUCARE_USER")
    localStorage.removeItem("EDUCARE_ROLE")
    router.push("/")
  }

  if (!user) return null

  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-slate-50 p-6">
        <div className="max-w-4xl mx-auto bg-white p-10 rounded-2xl shadow">

          {/* HEADER */}
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-indigo-700">
              Profil Siswa
            </h1>

            <button
              onClick={handleLogout}
              className="px-5 py-2 rounded-xl bg-red-500 text-white font-semibold hover:bg-red-600 transition"
            >
              Keluar
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-6">

            {/* NAMA */}
            <div>
              <p className="text-sm text-slate-500">Nama</p>
              <p className="font-semibold text-lg">{user.name}</p>
            </div>

            {/* EMAIL */}
            <div>
              <p className="text-sm text-slate-500">Email</p>
              <p className="font-semibold text-lg">{user.email}</p>
            </div>

            {/* KELAS */}
            

          </div>
        </div>
      </section>
    </>
  )
}
