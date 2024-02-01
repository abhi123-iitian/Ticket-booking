package com.TicketBooking.controllers;

import com.TicketBooking.models.Ticket;
import com.TicketBooking.models.request.GenerateTicketRequest;
import com.TicketBooking.services.TicketService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/ticket")
@AllArgsConstructor
public class TicketController {

    private final TicketService ticketService;

    @PostMapping("/generate")
    public Ticket generateTicket(@RequestBody GenerateTicketRequest request) {
        return ticketService.generateTicket(request);
    }

    @GetMapping("/validate/{ticketId}")
    public String validateTicket(@PathVariable String ticketId) {
        return ticketService.validateTicket(ticketId);
    }
}
