export type Volunteer = {
  id: string
  name: string
  email: string
  password: string
  bidang: string
  kelas: string[]
  bio: string
}

const KEY = "EDUCARE_VOLUNTEERS"

/* ================= INIT DUMMY ================= */
const dummy: Volunteer[] = [
  {
    id: "1",
    name: "Budi Santoso",
    email: "budi@gmail.com",
    password: "123",
    bidang: "Matematika",
    kelas: ["SMP", "SMA"],
    bio: "Guru Matematika"
  },
  {
    id: "2",
    name: "Siti Aminah",
    email: "siti@gmail.com",
    password: "123",
    bidang: "IPA",
    kelas: ["SD"],
    bio: "Pengajar IPA"
  },
  {
    id: "3",
    name: "Andi Pratama",
    email: "andi@gmail.com",
    password: "123",
    bidang: "Bahasa Inggris",
    kelas: ["SMP"],
    bio: "Tutor English"
  }
]

function init() {
  if (typeof window === "undefined") return
  if (!localStorage.getItem(KEY)) {
    localStorage.setItem(KEY, JSON.stringify(dummy))
  }
}

/* ================= CRUD ================= */

export function getAllVolunteers(): Volunteer[] {
  init()
  return JSON.parse(localStorage.getItem(KEY) || "[]")
}

export function registerVolunteer(data: Omit<Volunteer, "id">) {
  init()
  const list = getAllVolunteers()

  if (list.some(v => v.email === data.email)) {
    alert("Email sudah terdaftar!")
    return null
  }

  const newUser: Volunteer = {
    ...data,
    id: Date.now().toString()
  }

  localStorage.setItem(KEY, JSON.stringify([...list, newUser]))
  return newUser
}

export function loginVolunteer(email: string, password: string) {
  init()
  return getAllVolunteers().find(
    (v: Volunteer) => v.email === email && v.password === password
  )
}

export function deleteVolunteer(id: string) {
  init()
  const filtered = getAllVolunteers().filter((v: Volunteer) => v.id !== id)
  localStorage.setItem(KEY, JSON.stringify(filtered))
}
