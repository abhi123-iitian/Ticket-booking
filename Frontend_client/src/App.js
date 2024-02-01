import React, { useState } from 'react';
import StationSelector from './StationSelector';
import TicketDisplay from './TicketDisplay';
import './App.css';

function App() {
  const [ticketId, setTicketId] = useState(null);

  const handleTicketGeneration = (id) => {
    setTicketId(id);
  };

  return (
    <div className="centered-container">
    <div className="App">
      <h1>Metro Ticket Booking</h1>
      <StationSelector onTicketGenerate={handleTicketGeneration} />
      {ticketId && <TicketDisplay ticketId={ticketId} />}
    </div>
    </div>
  );
}

export default App;
