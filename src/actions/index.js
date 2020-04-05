let numberOfConnections = 0;

export const BookingForm = (payload) => ({
  type: "ADD_To_Bookings",
  id: numberOfConnections++,
  payload,
});
