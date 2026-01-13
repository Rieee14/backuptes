const REQ_KEY = "RUANG_DISKUSI_REQUESTS"
const CLASS_KEY = "RUANG_DISKUSI_CLASSES"

/* ========= SAFE STORAGE ========= */
const safeGet = (key) => {
  if (typeof window === "undefined") return []
  try {
    return JSON.parse(localStorage.getItem(key)) || []
  } catch {
    return []
  }
}

const safeSet = (key, data) => {
  if (typeof window === "undefined") return
  localStorage.setItem(key, JSON.stringify(data))
}

/* ========= REQUEST ========= */
export const getRequests = () => safeGet(REQ_KEY)
export const saveRequests = (d) => safeSet(REQ_KEY, d)

/* ========= KELAS ========= */
export const getClasses = () => safeGet(CLASS_KEY)

export const saveClasses = (data) => {
  safeSet(CLASS_KEY, data.map(c => ({ ...c, students: c.students || [] })))
}

export const getClassById = (id) => getClasses().find(c => c.id == id)

/* ========= SISWA ========= */
export const joinClassDB = (classId, studentName = "Siswa Baru") => {
  const classes = getClasses()
  const cls = classes.find(c => c.id == classId)
  if (!cls) return false

  cls.students = cls.students || []

  if (cls.students.find(s => s.name === studentName)) return false

  cls.students.push({
    id: Date.now(),
    name: studentName,
    status: "pending"
  })

  saveClasses(classes)
  return true
}

export const accStudent = (classId, studentId) => {
  const classes = getClasses()
  const cls = classes.find(c => c.id == classId)
  if (!cls) return

  cls.students = cls.students.map(s =>
    s.id === studentId ? { ...s, status: "approved" } : s
  )

  saveClasses(classes)
}

export const rejectStudent = (classId, studentId) => {
  const classes = getClasses()
  const cls = classes.find(c => c.id == classId)
  if (!cls) return

  cls.students = cls.students.filter(s => s.id !== studentId)
  saveClasses(classes)
}

/* ========= STATUS KELAS ========= */
export const finishClass = (classId) => {
  const classes = getClasses().filter(c => c.id != classId)
  saveClasses(classes)
}

export const startClass = (classId) => {
  const classes = getClasses()
  const cls = classes.find(c => c.id == classId)
  if (!cls) return

  cls.status = "running"
  saveClasses(classes)
}

/* ========= LIVE CHAT ========= */
export const getLiveChat = (classId) => {
  if (typeof window === "undefined") return []
  return JSON.parse(localStorage.getItem("livechat_" + classId) || "[]")
}

export const sendLiveChat = (classId, name, text) => {
  const chats = getLiveChat(classId)
  chats.push({
    id: Date.now(),
    name,
    text,
    time: new Date().toLocaleTimeString()
  })
  localStorage.setItem("livechat_" + classId, JSON.stringify(chats))
}

export const clearLiveChat = (classId) => {
  if (typeof window === "undefined") return
  localStorage.removeItem("livechat_" + classId)
}
export function getAvailableClasses(student="Siswa Baru"){
  return getClasses().filter(c =>
    !(c.students||[]).find(s => s.name === student)
  )
}

export function getJoinedClasses(student="Siswa Baru"){
  return getClasses().filter(c =>
    (c.students||[]).find(s => s.name === student)
  )
}
