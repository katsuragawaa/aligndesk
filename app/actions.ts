"use server";

import { revalidatePath } from "next/cache";

export async function joinWaitlist() {
  try {
    // TODO: Store the data in your database
    // For now, we'll just simulate a successful submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    revalidatePath("/");
    return { success: true };
  } catch {
    return { success: false, error: "Failed to join waitlist" };
  }
}
