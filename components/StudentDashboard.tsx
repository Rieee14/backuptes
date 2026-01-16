"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Navbar from "@/components/Navbar"
import { getJoinedClasses } from "@/lib/fakeDB"
import "./student-dashboard.css"

export default function StudentDashboard() {
  const router = useRouter()
  const [user, setUser] = useState<any>(null)
  const [kelas, setKelas] = useState<any[]>([])

  useEffect(() => {
    const u = JSON.parse(localStorage.getItem("EDUCARE_USER") || "null")
    if (!u) {
      router.push("/dashboard/siswa/login")
      return
    }
    setUser(u)
    setKelas(getJoinedClasses(u))
  }, [])

  const logout = () => {
    localStorage.removeItem("EDUCARE_USER")
    alert("Berhasil logout")
    router.push("/dashboard/siswa/login")
  }

  if (!user) return null

  return (
    <>

      {/* ===== HERO SISWA ===== */}
      <section className="student-hero-wrapper">
        <div className="student-hero-pill">
          <h1 className="student-hero-title">
            Halo, <span>{user.name}!</span>
          </h1>

          <p className="student-hero-subtitle">
            Siap menjadi juara? Cari kelas-Mu sekarang!
          </p>

          <button
            className="btn student-hero-btn"
            onClick={() => router.push("/kelas")}
          >
            Cari kelas
          </button>
        </div>
      </section>

    </>
  )
}