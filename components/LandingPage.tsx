"use client"
import "./landing-page.css"

export default function LandingPage() {
  return (
    <main className="lp-rooti">

      <div className="lp-left">
       

        <h1>
          Selamat Datang <br />
          di Ruang Diskusi
        </h1>

        <button className="lp-btn">LEBIH LANJUT</button>

      </div>

      <div className="lp-right">
        <img src="/lp.png" />
      </div>

    </main>
  )
}
