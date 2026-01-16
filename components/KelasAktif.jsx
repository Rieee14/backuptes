"use client"

import { useEffect, useState } from "react"
import { getClasses, startClass, finishClass } from "@/lib/fakeDB"
import styles from "./kelasAktif.module.css"

export default function KelasAktif() {
  const [classes, setClasses] = useState([])
  const [openId, setOpenId] = useState(null)

  useEffect(() => {
    setClasses(getClasses())
  }, [])

  const toggle = (id) => {
    setOpenId(openId === id ? null : id)
  }

  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Kelas Aktif</h1>

        {/* EMPTY STATE */}
        {classes.length === 0 && (
          <div className={styles.emptyState}>
            Belum ada kelas tersedia
          </div>
        )}

        {/* DATA KELAS */}
        {classes.map(cls => {
          const open = openId === cls.id

          return (
            <div key={cls.id} className={styles.card}>
              <div className={styles.header}>
                <div>
                  <strong>
                    {cls.title} ({cls.time})
                  </strong>

                  {open && (
                    <p className={styles.materi}>
                      Materi: {cls.subject || "Statistika (Mean, Median, Range)"}
                    </p>
                  )}
                </div>

                <div className={styles.right}>
                  <button
                    className={styles.start}
                    onClick={() => {
                      startClass(cls.id)
                      setClasses(getClasses())
                      window.location.href = `/live?class=${cls.id}&role=volunteer`
                    }}
                  >
                    Mulai kelas
                  </button>

                  {open && (
                    <button
                      className={styles.cancel}
                      onClick={() => {
                        finishClass(cls.id)
                        setClasses(getClasses())
                      }}
                    >
                      Batalkan
                    </button>
                  )}

                  <span
                    className={`${styles.arrow} ${open ? styles.open : ""}`}
                    onClick={() => toggle(cls.id)}
                  >
                    ▼
                  </span>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
