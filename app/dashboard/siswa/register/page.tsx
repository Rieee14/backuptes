"use client"
import { registerStudent } from "@/lib/studentDB"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function RegisterStudent() {
  const router = useRouter()
  const [f, setF] = useState({ name: "", email: "", password: "" })
  const [show, setShow] = useState(false)

  const submit = () => {
    if (!f.name || !f.email || !f.password) {
      alert("Lengkapi data")
      return
    }

    if (!registerStudent({ ...f, kelas: [] })) {
      alert("Email sudah ada")
      return
    }

    alert("Berhasil daftar, silakan login")
    router.push("/dashboard/siswa/login")
  }

  return (
    <>
      <div className="wrapper">
        <div className="login-card">
          <h2>Daftar Akun Siswa</h2>
          <p>
            Buat akun gratis dan mulai belajar bersama ribuan siswa lainnya.
          </p>

          <label>Nama Lengkap</label>
          <input
            placeholder="Nama"
            onChange={e => setF({ ...f, name: e.target.value })}
          />

          <label>Email</label>
          <input
            placeholder="Email"
            onChange={e => setF({ ...f, email: e.target.value })}
          />

          <label>Password</label>
          <div className="pass-wrap">
            <input
              type={show ? "text" : "password"}
              placeholder="Password"
              onChange={e => setF({ ...f, password: e.target.value })}
            />
            <span className="eye-icon" onClick={() => setShow(!show)}>
              {show ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
                  <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
                  <line x1="1" y1="1" x2="23" y2="23" />
                </svg>
              )}
            </span>
          </div>

          <button onClick={submit}>Daftar</button>

          <div className="register">
            <span>Sudah punya akun?</span>
            <span
              className="register-link"
              onClick={() => router.push("/dashboard/siswa/login")}
            >
              Login
            </span>
          </div>
        </div>
      </div>

      <style jsx global>{`
        * { box-sizing: border-box; }

        body {
          margin: 0;
          font-family: Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif;
          overflow: hidden;
        }

        .wrapper {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(-45deg, #ff8a00, #ff3d81, #6a5cff, #00c9a7);
          background-size: 400% 400%;
          animation: gradientMove 12s ease infinite;
        }

        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .login-card {
          width: 400px;
          max-width: 90vw;
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

        input {
          width: 100%;
          padding: 12px 14px;
          border-radius: 12px;
          border: 2px solid rgba(30,41,59,.2);
          margin-bottom: 16px;
          font-size: 14px;
          background: rgba(255,255,255,.85);
        }

        .pass-wrap { position: relative; }

        .eye-icon {
          position: absolute;
          right: 14px;
          top: 12px;
          cursor: pointer;
          color: #64748b;
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
        }

        .register {
          margin-top: 20px;
          text-align: center;
          font-size: 14px;
        }

        .register-link {
          margin-left: 6px;
          color: #6366f1;
          font-weight: 700;
          cursor: pointer;
        }
      `}</style>
    </>
  )
}
