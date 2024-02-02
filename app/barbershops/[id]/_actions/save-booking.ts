"use server";

import { db } from "@/app/_lib/prisma";
import { revalidatePath } from "next/cache";

interface SaveBookingParams {
  barbershopId: string;
  serviceId: string;
  userId: string;
  date: Date;
}

export const saveBooking = async ({
  barbershopId,
  serviceId,
  userId,
  date,
}: SaveBookingParams) => {
  await db.booking.create({
    data: {
      serviceId,
      userId,
      date,
      barbershopId,
    },
  });

  revalidatePath("/");
  revalidatePath("/bookings");
};
