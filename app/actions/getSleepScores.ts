"use server";

import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";

export default async function addSleepRecord({
  amount,
  date,
  text,
  sleepQuality,
}: {
  amount: number;
  date: Date;
  text: string;
  sleepQuality: string;
}) {
  const { userId } = await auth();

  if (!userId) {
    throw new Error("User not authenticated");
  }

  await db.record.create({
    data: {
      userId,
      amount,
      date,
      text,
      sleepQuality, // ✅ Save it
    },
  });
}
