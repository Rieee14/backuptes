import Link from "next/link"

export default function ClassCard({
  id, title, subject, level, time,
  action = "detail" // "detail" | "join"
}) {
  return (
    <div className="border rounded-2xl p-6 bg-white shadow-sm hover:shadow-md transition">
      <h3 className="font-semibold text-lg mb-2">{title}</h3>

      <p className="text-sm text-slate-500 mb-2">📚 {subject}</p>
      <p className="text-sm text-slate-500 mb-2">🎓 {level}</p>
      <p className="text-sm text-slate-500 mb-4">⏰ {time}</p>

      {action === "join" ? (
        <Link
          href={`/live?class=${id}`}
          className="block text-center bg-emerald-600 text-white py-2 rounded-xl"
        >
          Gabung Siaran
        </Link>
      ) : (
        <Link
          href={`/kelas/${id}`}
          className="block text-center bg-indigo-600 text-white py-2 rounded-xl"
        >
          Lihat Detail
        </Link>
      )}
    </div>
  )
}
