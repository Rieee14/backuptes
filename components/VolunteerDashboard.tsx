"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Navbar from "@/components/Navbar"
import { getJoinedClasses } from "@/lib/fakeDB"
import "./volunteer-dashboard.css"

export default function VolunteerDashboard() {
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
      {/* ===== HERO SECTION ===== */}
      <section className="student-hero">
  <div className="container text-center hero-content">
    <h1 className="hero-title">
      <span className="text-black">Selamat Datang,</span>{" "}
      <span className="text-white">Volunteer ✨</span>
    </h1>

    <p className="hero-subtitle">
      Temukan kelas terbaik dan mulai perjalanan belajarmu hari ini.
    </p>

    <button
      className="btn hero-btn"
      onClick={() => router.push("/kelas")}
    >
      Cari Kelas
    </button>
  </div>
</section>
    </>
  )
}