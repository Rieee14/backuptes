"use server"

import { registerVolunteer } from "@/lib/volunteerDB"

export async function registerVolunteerAction(data: any) {
  return registerVolunteer(data)
}
