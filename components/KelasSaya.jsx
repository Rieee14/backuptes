// components/KelasSaya.jsx
"use client"

import { useEffect, useState } from "react"
import { getJoinedClasses } from "@/lib/fakeDB"
import styles from "./KelasSaya.module.css"

export default function KelasSaya() {
  const [classes, setClasses] = useState([])

  useEffect(() => {
    const u = JSON.parse(localStorage.getItem("EDUCARE_USER") || "null")
    if (u) {
      setClasses(getJoinedClasses(u))
    }
  }, [])

  return (
    <section className={styles.wrapper}>
      <h2 className={styles.heading}>
        Kelas yang anda ikuti
      </h2>

      <div className={styles.list}>
        {classes.map(cls => (
          <div key={cls.id} className={styles.card}>
            <h3>{cls.title}</h3>

            <p className={styles.desc}>
              {cls.subject}
            </p>

            <p className={styles.time}>
              Jadwal dimulai: {cls.time}
            </p>

            <button className={styles.button}>
              Detail
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}
