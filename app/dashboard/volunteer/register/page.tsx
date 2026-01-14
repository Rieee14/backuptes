"use client"

import Navbar from "@/components/Navbar"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { registerVolunteer } from "@/lib/volunteerDB"

export default function RegisterVolunteer() {
  const router = useRouter()

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    bidang: "",
    kelas: [],
    bio: ""
  })

  const toggleKelas = (k) => {
    setForm({
      ...form,
      kelas: form.kelas.includes(k)
        ? form.kelas.filter(x => x !== k)
        : [...form.kelas, k]
    })
  }

  const submit = () => {
    if (!form.name || !form.email || !form.password || !form.bidang) {
      alert("Lengkapi semua data!")
      return
    }

    const user = registerVolunteer(form)

    localStorage.setItem("EDUCARE_ROLE", "volunteer")
    localStorage.setItem("EDUCARE_USER", JSON.stringify(user))

    router.push("/dashboard/volunteer")
  }

  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
        <div className="bg-white p-10 rounded-3xl shadow-xl w-full max-w-xl">

          <h1 className="text-2xl font-bold mb-6 text-center">
            Daftar Volunteer Pengajar
          </h1>

          <div className="space-y-4">

            <input placeholder="Nama Lengkap"
              onChange={e => setForm({ ...form, name: e.target.value })}
              className="w-full border px-4 py-3 rounded-xl"/>

            <input placeholder="Email"
              onChange={e => setForm({ ...form, email: e.target.value })}
              className="w-full border px-4 py-3 rounded-xl"/>

            <input type="password" placeholder="Password"
              onChange={e => setForm({ ...form, password: e.target.value })}
              className="w-full border px-4 py-3 rounded-xl"/>

            <input placeholder="Bidang Keahlian (contoh: Matematika, IPA)"
              onChange={e => setForm({ ...form, bidang: e.target.value })}
              className="w-full border px-4 py-3 rounded-xl"/>

            <div>
              <p className="font-semibold mb-2">Mengajar Kelas</p>
              <div className="flex gap-3">
                {["SD","SMP","SMA"].map(k => (
                  <button key={k}
                    onClick={() => toggleKelas(k)}
                    className={`px-5 py-2 rounded-xl border 
                    ${form.kelas.includes(k) ? "bg-emerald-600 text-white" : ""}`}>
                    {k}
                  </button>
                ))}
              </div>
            </div>

            <textarea placeholder="Bio Singkat"
              onChange={e => setForm({ ...form, bio: e.target.value })}
              className="w-full border px-4 py-3 rounded-xl h-28"/>

            <button onClick={submit}
              className="bg-indigo-600 text-white w-full py-3 rounded-xl font-semibold hover:bg-indigo-700">
              Daftar & Masuk Dashboard
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
