import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';

interface ReservationData {
  name: string;
  phone: string;
  email: string;
  date: string;
  time: string;
  guests: bigint;
  requests: string;
}

export function useSubmitReservation() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: ReservationData) => {
      if (!actor) {
        throw new Error('Actor not initialized');
      }

      const result = await actor.submitReservation(
        data.name,
        data.phone,
        data.email,
        data.date,
        data.time,
        data.guests,
        data.requests
      );

      if (!result) {
        throw new Error('Reservation submission failed');
      }

      return result;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['reservations'] });
    },
  });
}
