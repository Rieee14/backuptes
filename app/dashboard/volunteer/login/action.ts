"use server"

import { loginVolunteer } from "@/lib/volunteerDB"

export async function loginVolunteerAction(email: string, password: string) {
  return loginVolunteer(email, password)
}
