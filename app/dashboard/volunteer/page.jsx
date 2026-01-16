// app/dashboard/volunteer/page.jsx

"use client"

import Navbar1 from "@/components/Navbar1"
import { BookOpen, Users, HandHeart, LogOut } from "lucide-react"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { getAllVolunteers } from "@/lib/volunteerDB"
import StudentDashboard from "@/components/VolunteerDashboard"


export default function VolunteerDashboard() {
  const router = useRouter()

  useEffect(() => {
    const role = localStorage.getItem("EDUCARE_ROLE")
    if (role !== "volunteer") router.push("/dashboard/volunteer/login")
  }, [])

  return (
    <>
      <Navbar1 />
      <StudentDashboard />
      
    </>
  )
}
