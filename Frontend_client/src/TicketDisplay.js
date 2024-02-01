import React from 'react';
import './TicketDisplay.css';

function TicketDisplay({ ticketId }) {
  return (
    <div>
      <h2>Your Ticket ID: {ticketId}</h2>
      <p>Please keep this ID safe, it's required for entry and exit.</p>
    </div>
  );
}

export default TicketDisplay;
