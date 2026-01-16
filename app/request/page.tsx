"use client"

import Navbar from "@/components/Navbar"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { getRequests, saveRequests } from "@/lib/fakeDB"

export default function Request() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const [level, setLevel] = useState("")
  const [subject, setSubject] = useState("")
  const [problem, setProblem] = useState("")
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault()
  setLoading(true)

  const db = getRequests()

  db.push({
    id: Date.now(),
    level,
    subject,
    problem,
    requestedSchedule: `${date} ${time}`,
    status: "open",
    createdAt: new Date().toISOString()
  })

  saveRequests(db)
  setTimeout(() => router.push("/kelas"), 600)
}

  return (
    <>
      <Navbar />

      <div className="wrapper">
        <form onSubmit={handleSubmit} className="request-card">
          <h2>Ajukan Kebutuhan Belajar</h2>
          <p>
            Sampaikan kebutuhan belajarmu dan kami akan mencarikan volunteer
            yang tepat untuk membantu.
          </p>

          <label>Jenjang Pendidikan</label>
          <select
            required
            value={level}
            onChange={e => setLevel(e.target.value)}
          >
            <option value="">Pilih Jenjang Pendidikan</option>
            <option value="SD">SD / MI</option>
            <option value="SMP">SMP / MTs</option>
            <option value="SMA">SMA / sederajat</option>
            <option value="Umum">Lainnya...</option>
          </select>

          <label>Mata Pelajaran</label>
          <input
            required
            placeholder="Contoh: Matematika"
            value={subject}
            onChange={e => setSubject(e.target.value)}
          />

          <label>Materi Dibutuhkan</label>
          <textarea
            required
            placeholder="Jelaskan materi yang ingin dipelajari..."
            value={problem}
            onChange={e => setProblem(e.target.value)}
          />

          <div className="schedule">
            <input
              type="date"
              required
              value={date}
              onChange={e => setDate(e.target.value)}
            />
            <input
              type="time"
              required
              value={time}
              onChange={e => setTime(e.target.value)}
            />
          </div>

          <button disabled={loading}>
            {loading ? "Mengirim..." : "Kirim Request"}
          </button>
        </form>
      </div>

      {/* ================= GLOBAL STYLE ================= */}
      <style jsx global>{`
        * { box-sizing: border-box; }

        body {
          margin: 0;
          font-family: Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif;
          overflow-x: hidden;
          overflow-y: auto;
        }

        .wrapper {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(-45deg, #ff8a00, #ff3d81, #6a5cff, #00c9a7);
          background-size: 400% 400%;
          animation: gradientMove 12s ease infinite;
          padding: 24px;
        }

        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .request-card {
          width: 440px;
          max-width: 95vw;
          padding: 32px;
          border-radius: 24px;
          background: rgba(255, 255, 255, 0.65);
          backdrop-filter: blur(24px);
          box-shadow: 0 30px 80px rgba(0, 0, 0, 0.3);
          animation: fadeIn 0.8s ease, floatCard 6s ease-in-out infinite;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }

        @keyframes floatCard {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }

        h2 {
          margin-bottom: 6px;
          font-size: 26px;
          font-weight: 700;
          color: #0f172a;
        }

        p {
          font-size: 14px;
          margin-bottom: 24px;
          color: #1e293b;
        }

        label {
          font-size: 13px;
          font-weight: 700;
          margin-bottom: 6px;
          display: block;
          color: #0f172a;
        }

        input, select, textarea {
          width: 100%;
          padding: 12px 14px;
          border-radius: 12px;
          border: 2px solid rgba(30,41,59,.2);
          margin-bottom: 16px;
          font-size: 14px;
          background: rgba(255,255,255,.85);
          resize: none;
        }

        textarea {
          min-height: 90px;
        }

        .schedule {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          margin-bottom: 12px;
        }

        button {
          width: 100%;
          padding: 12px;
          border-radius: 12px;
          border: none;
          background: #1e293b;
          color: white;
          font-weight: 700;
          cursor: pointer;
          margin-top: 8px;
          transition: transform .2s ease, box-shadow .2s ease;
        }

        button:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 24px rgba(0,0,0,.25);
        }

        button:disabled {
          opacity: .6;
          cursor: not-allowed;
        }
      `}</style>
    </>
  )
}
