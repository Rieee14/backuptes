"use client"

import Navbar1 from "@/components/Navbar1"
import KelasAktif from "@/components/KelasAktif"
import { publishRequestToClass } from "@/lib/fakeDB"
import { accClass } from "@/lib/fakeDB"
import { useEffect, useState } from "react"
import {
  getRequests, saveRequests,
  getClasses, startClass, finishClass,
  accStudent, rejectStudent
} from "@/lib/fakeDB"

export default function VolunteerDashboard() {
  const [requests, setRequests] = useState([])
  const [classes, setClasses] = useState([])

  useEffect(() => {
    setRequests(getRequests())
    setClasses(getClasses())
  }, [])

  const takeRequest = (id)=>{
    const updated = requests.map(r=>{
      if(r.id===id){
        const classes = getClasses()
        classes.push({
          id:r.id,
          title:`${r.subject} ${r.level}`,
          subject:r.subject,
          level:r.level,
          time:"2026-01-20 16:00",
          students:[],
          status:"scheduled",
          createdAt:Date.now()
        })
        localStorage.setItem("RUANG_DISKUSI_CLASSES",JSON.stringify(classes))
        return {...r,status:"taken"}
      }
      return r
    })
    saveRequests(updated)
    setRequests(updated)
    setClasses(getClasses())
  }

  return (
    <>
      <Navbar1/>
      <KelasAktif />
    </>
  )
}
