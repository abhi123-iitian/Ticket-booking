import React, { useState } from 'react';
import { stations, calculatePrice } from './stations'; // Assume this is your stations data and utility function
import './StationSelector.css';
//let ticket_id = "null"

function StationSelector({ onTicketGenerate }) {
  const [startStation, setStartStation] = useState(null);
  const [endStation, setEndStation] = useState(null);
  

  const buyTicket = async () => {
    if (!startStation || !endStation) {
      alert("Please select both start and end stations.");
      return;
    }
    const price = calculatePrice(startStation, endStation);
    if (startStation === endStation) {
      //console.log("here")
      alert("Start and end stations cannot be the same.");
      return;
    }
    // API call to backend with startStation, endStation, and price
   console.log(price)
   console.log(startStation)
   console.log(endStation)
   const requestBody = {
    price: price,
    startStation: startStation,
    endStation: endStation,
  };
  console.log(requestBody)
    const response = await fetch('http://localhost:8080/api/ticket/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });
      console.log(response)
      if (response.ok) {
        const data = await response.json();
        console.log(data)

        onTicketGenerate(data.id);
      } else {
        console.error('HTTP Error:', response.statusText);
      }
     
  };

  return (
    <div>
      <select value={startStation} onChange={(e) => setStartStation(e.target.value)}>
        <option value="">Select Start Station</option>
        {Object.keys(stations).map(station => (
          station !== endStation && <option key={station} value={station}>{station}</option>
        ))}
      </select>
      <select value={endStation} onChange={(e) => setEndStation(e.target.value)}>
        <option value="">Select End Station</option>
        {Object.keys(stations).map(station => (
          station !== startStation && <option key={station} value={station}>{station}</option>
        ))}
      </select>
      <button onClick={buyTicket}>Buy Ticket</button>
    </div>
  );
}

export default StationSelector;
