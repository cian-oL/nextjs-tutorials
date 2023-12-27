import { NextResponse } from "next/server";
import Ticket from "@/app/(models)/Ticket";

// Get one ticket
export const GET = async (req, { params }) => {
  try {
    const { id } = params;
    const foundTicket = await Ticket.findOne({ _id: id });
    return NextResponse.json({ foundTicket }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
};

// Delete one ticket
export const DELETE = async (req, { params }) => {
  try {
    const { id } = params;
    await Ticket.findByIdAndDelete(id);
    return NextResponse.json({ message: "Ticket deleted." }, { status: 204 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
};

// Update one ticket
export const PUT = async (req, { params }) => {
  try {
    const { id } = params;
    const body = await req.json();
    const ticketData = body.formData;

    await Ticket.findByIdAndUpdate(id, {
      ...ticketData,
    });

    return NextResponse.json({ message: "Ticket updated." }, { status: 204 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
};
