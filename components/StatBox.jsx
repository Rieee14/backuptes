"use client"
import { useEffect, useState } from "react"
import "./stat-box.css"

export default function StatBox({ title, value, max, icon }) {
  const [percent, setPercent] = useState(0)

  useEffect(() => {
    if (max > 0) {
      const p = Math.min((value / max) * 100, 100)
      setPercent(p)
    }
  }, [value, max])

  return (
    <div className="stat-box">
      <div className="stat-icon">
        <img src={icon} alt={title} />
      </div>

      <div className="stat-content">
        <div className="stat-title">{title}</div>

        <div className="stat-bar">
          <div
            className="stat-fill"
            style={{ width: `${percent}%` }}
          />
        </div>
      </div>
    </div>
  )
}
