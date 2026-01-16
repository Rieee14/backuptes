"use client"
import "./stats-section.css"

export default function StatsSection() {
  return (
    <section className="stats-section">
      <div className="stats-grid">

        <div className="stat-item">
          <h3>1.200+</h3>
          <p>Siswa Terbantu</p>
        </div>

        <div className="stat-item">
          <h3>80+</h3>
          <p>Relawan Aktif</p>
        </div>

        <div className="stat-item">
          <h3>150+</h3>
          <p>Kelas Tersedia</p>
        </div>

      </div>
    </section>
  )
}
