// DUMMY DATABASE VOLUNTEER

const volunteers = [
  {
    id: 1,
    name: "Siti Aisyah",
    email: "aisyah@gmail.com",
    password: "123456",
    bidang: "Matematika",
    instansi: "Universitas Indonesia",
    kelas: ["SD", "SMP"],
    bio: "Mahasiswa Pendidikan Matematika, aktif mengajar bimbel gratis."
  },
  {
    id: 2,
    name: "Ahmad Fauzi",
    email: "fauzi@gmail.com",
    password: "123456",
    bidang: "Bahasa Inggris",
    instansi: "UIN Jakarta",
    kelas: ["SMP", "SMA"],
    bio: "Volunteer pengajar speaking & grammar."
  },
  {
    id: 3,
    name: "Dewi Lestari",
    email: "dewi@gmail.com",
    password: "123456",
    bidang: "IPA",
    instansi: "Universitas Padjadjaran",
    kelas: ["SD"],
    bio: "Guru IPA, fokus pembelajaran berbasis eksperimen."
  }
]

// LOGIN FUNCTION
export function loginVolunteer(email, password) {
  return volunteers.find(
    v => v.email === email && v.password === password
  )
}

// AMBIL SEMUA VOLUNTEER
export function getAllVolunteers() {
  return volunteers
}

// CARI VOLUNTEER BY ID
export function getVolunteerById(id) {
  return volunteers.find(v => v.id === Number(id))
}

// TAMBAH VOLUNTEER BARU
export function registerVolunteer(data) {
  const newVolunteer = {
    id: Date.now(),
    ...data
  }

  volunteers.push(newVolunteer)
  return newVolunteer
}
