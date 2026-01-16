"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Navbar from "@/components/Navbar"
import { getJoinedClasses } from "@/lib/fakeDB"
import StudentDashboard from "@/components/StudentDashboard"

export default function Student() {
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
      <Navbar />
      <StudentDashboard />
    </>
  )
}
