import Text "mo:core/Text";
import List "mo:core/List";

actor {
  type Reservation = {
    name : Text;
    phone : Text;
    email : Text;
    date : Text;
    time : Text;
    guests : Nat;
    requests : Text;
  };

  let reservations = List.empty<Reservation>();

  public shared ({ caller }) func submitReservation(name : Text, phone : Text, email : Text, date : Text, time : Text, guests : Nat, requests : Text) : async Bool {
    let reservation : Reservation = {
      name;
      phone;
      email;
      date;
      time;
      guests;
      requests;
    };
    reservations.add(reservation);
    true;
  };
};
