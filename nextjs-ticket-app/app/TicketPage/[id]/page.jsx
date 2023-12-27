import TicketForm from "@/app/(components)/TicketForm";

const getTicketById = async (id) => {
  try {
    const response = await fetch(`http://localhost:3000/api/Tickets/${id}`, {
      cache: "no-store",
    });

    if (response.ok) {
      return response.json();
    }
  } catch (error) {
    console.log("Failed to get ticket", error);
  }
};

const TicketPage = async ({ params }) => {
  const EDITMODE = params.id === "new" ? false : true;
  let updatedTicketData = {};

  if (EDITMODE) {
    updatedTicketData = await getTicketById(params.id);
  } else {
    updatedTicketData = {
      _id: "new",
    };
  }

  return <TicketForm ticketData={updatedTicketData} />;
};
export default TicketPage;
