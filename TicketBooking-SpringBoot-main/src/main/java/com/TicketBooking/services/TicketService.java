package com.TicketBooking.services;

import com.TicketBooking.models.Ticket;
import com.TicketBooking.models.request.GenerateTicketRequest;
import com.TicketBooking.repository.TicketRepository;
import lombok.RequiredArgsConstructor;

import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Optional;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class TicketService {
    private final TicketRepository ticketRepository;

    public Ticket generateTicket(GenerateTicketRequest request){
        Ticket ticket = new Ticket(UUID.randomUUID().toString(), LocalDateTime.now().plusHours(18), 0, request.getPrice(), request.getStartStation(), request.getEndStation());
        ticketRepository.save(ticket);
        return ticket;
    }

    public String validateTicket(String ticketId) {
        Optional<Ticket> optionalTicket = ticketRepository.findById(ticketId);

        if (optionalTicket.isEmpty()) {
            return "Ticket not found";
        }

        Ticket ticket = optionalTicket.get();

        if (ticket.getExpiryTime().isBefore(LocalDateTime.now())) {
            return "Ticket is expired";
        } else if (ticket.getUsageCount() >= 2) {
            return "Ticket usage is over!";
        } else {
            // Increment usage count and save the ticket
            ticket.setUsageCount(ticket.getUsageCount() + 1);
            ticketRepository.save(ticket);
            return "Ticket used for one time";
        }
    }
}
