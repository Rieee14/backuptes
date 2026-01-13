"use client"

import Navbar from "@/components/Navbar"
import { useEffect, useState } from "react"
import { getRequests, saveRequests } from "@/lib/fakeDB"
import { getClasses, saveClasses } from "@/lib/fakeDB"


export default function Dashboard() {
  const [requests, setRequests] = useState([])

  useEffect(() => {
    setRequests(getRequests())
  }, [])

  const deleteRequest = (id) => {
    const newData = requests.filter(r => r.id !== id)
    setRequests(newData)
    saveRequests(newData)
  }

  const takeRequest = (id) => {
  const updated = requests.map(r => {
    if (r.id === id) {
      // bikin kelas publik otomatis
      const classes = getClasses()
      classes.push({
        id: r.id,
        title: `${r.subject} ${r.level}`,
        level: r.level,
        subject: r.subject,
        time: "Akan dijadwalkan",
        createdAt: new Date().toISOString()
      })
      saveClasses(classes)

      return { ...r, status: "taken" }
    }
    return r
  })

  setRequests(updated)
  saveRequests(updated)
}


  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto py-20 px-4 space-y-10">

        <div className="grid md:grid-cols-3 gap-6">
          <div className="border p-6 rounded-xl">
            📥 Request Masuk: {requests.filter(r => r.status === "open").length}
          </div>
          <div className="border p-6 rounded-xl">
            👨‍🏫 Kelas Diambil: {requests.filter(r => r.status === "taken").length}
          </div>
        </div>

        <div>
          <h2 className="font-semibold mb-4">Request Siswa</h2>

          {requests.filter(r => r.status === "open").map(r => (
            <div key={r.id} className="border p-4 rounded-xl mb-3 space-y-1">
              <div className="font-semibold">{r.subject} – {r.level}</div>
              <div className="text-sm text-slate-600">{r.problem}</div>

              <div className="flex gap-3 mt-2">
                <button
                  onClick={() => takeRequest(r.id)}
                  className="bg-green-600 text-white px-4 py-1 rounded"
                >
                  Ambil
                </button>
                <button
                  onClick={() => deleteRequest(r.id)}
                  className="bg-red-600 text-white px-4 py-1 rounded"
                >
                  Hapus
                </button>
              </div>
            </div>
          ))}
        </div>

        <div>
          <h2 className="font-semibold mb-4">Kelas yang Diajar</h2>
          {requests.filter(r => r.status === "taken").map(r => (
            <div key={r.id} className="border p-4 rounded-xl mb-3 bg-slate-50">
              {r.subject} – {r.level}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
