import { NextResponse } from "next/server";
import Ticket from "@/app/(models)/Ticket";

export const DELETE = async (req, { params }) => {
  try {
    const { id } = params;
    await Ticket.findByIdAndDelete(id);
    return NextResponse.json({ message: "Ticket deleted." }, { status: 204 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
};
