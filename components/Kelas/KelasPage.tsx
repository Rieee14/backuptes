"use client"

import { useEffect, useState } from "react"
import Navbar from "@/components/Navbar"
import ClassCard from "@/components/ClassCard"
import { getAvailableClasses } from "@/lib/fakeDB"
import styles from "./KelasPage.module.css"

export default function KelasPage() {
  const [classes, setClasses] = useState<any[]>([])

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("EDUCARE_USER") || "null")

    if (user) {
      setClasses(getAvailableClasses(user))
    } else {
      setClasses(getAvailableClasses({ id: "__guest__" }))
    }
  }, [])

  return (
    <>
      <Navbar />

      <div className={styles.container}>
        <h1 className={styles.title}>Katalog Kelas</h1>

        {/* CTA */}
        <div className={styles.cta}>
  <div className={styles.ctaText}>
    <h3 className={styles.ctaTitle}>
      Tidak menemukan kelas?
    </h3>
    <p className={styles.ctaDesc}>
      Ajukan kebutuhan belajarmu
    </p>
  </div>

  <a href="/request" className={styles.requestBtn}>
    + Request
  </a>
</div>

        {/* LIST */}
        <div className={styles.grid}>
          {classes.length === 0 && (
            <p className={styles.empty}>Belum ada kelas tersedia</p>
          )}

          {classes.map((c) => (
            <ClassCard key={c.id} {...c} />
          ))}
        </div>
      </div>
    </>
  )
}
