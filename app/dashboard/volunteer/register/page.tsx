"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { registerVolunteer } from "@/lib/volunteerDB"

/* =======================
   TYPE
======================= */
type RegisterForm = {
  name: string
  email: string
  password: string
  bidang: string
  kelas: string[]
  bio: string
}

export default function RegisterVolunteer() {
  const router = useRouter()

  const [form, setForm] = useState<RegisterForm>({
    name: "",
    email: "",
    password: "",
    bidang: "",
    kelas: [],
    bio: ""
  })

  /* =======================
     TOGGLE KELAS
  ======================= */
  const toggleKelas = (k: string) => {
    setForm(prev => ({
      ...prev,
      kelas: prev.kelas.includes(k)
        ? prev.kelas.filter(x => x !== k)
        : [...prev.kelas, k]
    }))
  }

  /* =======================
     SUBMIT
  ======================= */
  const submit = () => {
    if (!form.name || !form.email || !form.password || !form.bidang) {
      alert("Lengkapi semua data!")
      return
    }

    if (form.kelas.length === 0) {
      alert("Pilih minimal satu kelas!")
      return
    }

    registerVolunteer(form)
    alert("Pendaftaran berhasil! Silakan login.")
    router.push("/dashboard/volunteer/login")
  }

  return (
    <>
      <div className="wrapper">
        <div className="login-card">
          <h2>Daftar Volunteer</h2>
          <p>Bergabung sebagai pengajar dan berbagi ilmu.</p>

          <label>Nama Lengkap</label>
          <input
            placeholder="Nama"
            onChange={e => setForm({ ...form, name: e.target.value })}
          />

          <label>Email</label>
          <input
            placeholder="Email"
            onChange={e => setForm({ ...form, email: e.target.value })}
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            onChange={e => setForm({ ...form, password: e.target.value })}
          />

          <label>Bidang Keahlian</label>
          <input
            placeholder="Bidang Keahlian"
            onChange={e => setForm({ ...form, bidang: e.target.value })}
          />

          <label>Mengajar Kelas</label>
          <div className="kelas-wrap">
            {["SD", "SMP", "SMA"].map(k => (
              <button
                key={k}
                type="button"
                onClick={() => toggleKelas(k)}
                className={`kelas-btn ${
                  form.kelas.includes(k) ? "active" : ""
                }`}
              >
                {k}
              </button>
            ))}
          </div>

          <label>Bio Singkat</label>
          <textarea
            placeholder="Ceritakan tentang Anda"
            onChange={e => setForm({ ...form, bio: e.target.value })}
          />

          <button onClick={submit}>Daftar Sekarang</button>

          <div className="register">
            <span>Sudah punya akun?</span>
            <span
              className="register-link"
              onClick={() => router.push("/dashboard/volunteer/login")}
            >
              Masuk
            </span>
          </div>
        </div>
      </div>

      {/* =======================
          GLOBAL STYLE
      ======================= */}
      <style jsx global>{`
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI",
            Roboto, sans-serif;
        }

        .wrapper {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(
            -45deg,
            #ff8a00,
            #ff3d81,
            #6a5cff,
            #00c9a7
          );
          background-size: 400% 400%;
          animation: gradientMove 12s ease infinite;
        }

        @keyframes gradientMove {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .login-card {
          width: 420px;
          max-width: 92vw;
          padding: 32px;
          border-radius: 24px;
          background: rgba(255, 255, 255, 0.65);
          backdrop-filter: blur(24px);
          box-shadow: 0 30px 80px rgba(0, 0, 0, 0.3);
          animation: fadeIn 0.8s ease forwards;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        h2 {
          margin: 0 0 6px 0;
          font-size: 26px;
          font-weight: 700;
          color: #0f172a;
        }

        p {
          margin: 0 0 24px 0;
          font-size: 14px;
          color: #1e293b;
        }

        label {
          display: block;
          margin-bottom: 6px;
          font-size: 13px;
          font-weight: 700;
          color: #0f172a;
        }

        input,
        textarea {
          width: 100%;
          padding: 12px 14px;
          margin-bottom: 16px;
          border-radius: 12px;
          border: 2px solid rgba(30, 41, 59, 0.2);
          outline: none;
          font-size: 14px;
          background: rgba(255, 255, 255, 0.85);
          transition: all 0.2s ease;
        }

        input:focus,
        textarea:focus {
          border-color: #22c55e;
          box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.2);
        }

        textarea {
          min-height: 90px;
          resize: none;
        }

        .kelas-wrap {
          display: flex;
          gap: 12px;
          margin-bottom: 16px;
        }

        .kelas-btn {
          flex: 1;
          padding: 10px 0;
          border-radius: 12px;
          border: 2px solid #cbd5e1;
          background: white;
          color: #000;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .kelas-btn:hover {
          background: #ecfdf5;
        }

        .kelas-btn.active {
          background: #22c55e;
          border-color: #22c55e;
          color: white;
        }

        button {
          width: 100%;
          padding: 12px;
          border-radius: 12px;
          border: none;
          font-size: 15px;
          font-weight: 700;
          cursor: pointer;
          background: #1e293b;
          color: white;
          transition: all 0.2s ease;
          box-shadow: 0 4px 12px rgba(30, 41, 59, 0.3);
        }

        button:hover {
          background: #0f172a;
          transform: translateY(-1px);
        }

        .register {
          margin-top: 20px;
          padding-top: 20px;
          border-top: 1px solid rgba(30, 41, 59, 0.2);
          text-align: center;
          font-size: 14px;
        }

        .register-link {
          margin-left: 6px;
          font-weight: 700;
          color: #22c55e;
          cursor: pointer;
        }

        .register-link:hover {
          text-decoration: underline;
        }
      `}</style>
    </>
  )
}
