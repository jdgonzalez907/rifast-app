export type TicketStatus = 'reserved' | 'paid';

export interface Ticket {
  id: string;
  status: TicketStatus;
  buyerName: string;
  buyerPhone: string;
  reservedAt: string;
  paidAt?: string;
}

export type RaffleStatus = 'active' | 'finished';

export type RaffleDigitCount = 2 | 3;

export interface RaffleSummary {
  id: string;
  name: string;
  digitCount: RaffleDigitCount;
  ticketPrice: number;
  status: RaffleStatus;
  drawDate: Date;
}

export interface Raffle {
  id: string;
  name: string;
  description: string;
  digitCount: RaffleDigitCount;
  ticketPrice: number;
  ticketsRegistry: Record<string, Ticket>;
  winningTickets: string[];
  status: RaffleStatus;
  drawDate: Date;
}

export const getDigits = (digits: RaffleDigitCount): string => {
  if (digits === 2) {
    return '2D';
  }
  return '3D';
};
