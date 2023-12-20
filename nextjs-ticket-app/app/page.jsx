import TicketCard from "./(components)/TicketCard";

const getTickets = async () => {
  try {
    // use full url because you are calling the server, not frontend
    const response = await fetch("http://localhost:3000/api/Tickets", {
      cache: "no-store", // don't store data, just check for new data
    });

    return response.json();
  } catch (error) {
    console.log("Failed to get tickets", error);
  }
};

const Dashboard = async () => {
  const { tickets } = await getTickets();

  // map over tickets & whenever new ticket, it wil return w/o duplicates
  const ticketCategories = [
    ...new Set(tickets?.map(({ category }) => category)),
  ];

  return (
    <div className="p-5">
      <div>
        {tickets &&
          ticketCategories?.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-4">
              <h2>{category}</h2>
              <div className="lg:grid grid-cols-2 xl:grid-cols-4">
                {tickets
                  .filter((ticket) => ticket.category === category)
                  .map((filteredTicket, _index) => (
                    <TicketCard
                      id={_index}
                      key={_index}
                      ticket={filteredTicket}
                    />
                  ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
export default Dashboard;
