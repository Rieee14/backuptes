const REQ_KEY = "RUANG_DISKUSI_REQUESTS"
const CLASS_KEY = "RUANG_DISKUSI_CLASSES"

export function getRequests() {
  return JSON.parse(localStorage.getItem(REQ_KEY)) || []
}
export function saveRequests(data) {
  localStorage.setItem(REQ_KEY, JSON.stringify(data))
}

// KELAS PUBLIK
export function getClasses() {
  return JSON.parse(localStorage.getItem(CLASS_KEY)) || []
}
export function saveClasses(data) {
  localStorage.setItem(CLASS_KEY, JSON.stringify(data))
}
export function getClassById(id) {
  const classes = JSON.parse(localStorage.getItem("RUANG_DISKUSI_CLASSES")) || []
  return classes.find(c => c.id == id)
}

