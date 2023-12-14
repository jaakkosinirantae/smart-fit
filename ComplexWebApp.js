/* 
   Filename: ComplexWebApp.js
   Content: A complex web application demonstrating a reservation system
*/

// Global variables
let customerList = [];
let reservationList = [];

// Class definition: Customer
class Customer {
  constructor(name, email, phone) {
    this.name = name;
    this.email = email;
    this.phone = phone;
  }

  addReservation(reservation) {
    reservationList.push(reservation);
    console.log(`Reservation added for ${this.name}`);
  }
}

// Class definition: Reservation
class Reservation {
  constructor(customer, date, time, tableNum) {
    this.customer = customer;
    this.date = date;
    this.time = time;
    this.tableNum = tableNum;
  }

  cancelReservation() {
    const index = reservationList.indexOf(this);
    if (index > -1) {
      reservationList.splice(index, 1);
      console.log(`Reservation cancelled for ${this.customer.name}`);
    } else {
      console.log(`Reservation not found for ${this.customer.name}`);
    }
  }
}

// Create Customers and Reservations
const customer1 = new Customer("John", "john@example.com", "555-1234");
customerList.push(customer1);

const reservation1 = new Reservation(customer1, "2022-07-01", "19:00", 6);
customer1.addReservation(reservation1);

const reservation2 = new Reservation(customer1, "2022-07-02", "20:30", 4);
customer1.addReservation(reservation2);

const customer2 = new Customer("Alice", "alice@example.com", "555-5678");
customerList.push(customer2);

const reservation3 = new Reservation(customer2, "2022-07-03", "18:00", 8);
customer2.addReservation(reservation3);

const reservation4 = new Reservation(customer2, "2022-07-05", "21:00", 2);
customer2.addReservation(reservation4);

// Display customer details and reservations
console.log("Customer List:");
customerList.forEach((customer, index) => {
  console.log(`\nCustomer ${index + 1}`);
  console.log(`Name: ${customer.name}`);
  console.log(`Email: ${customer.email}`);
  console.log(`Phone: ${customer.phone}`);

  console.log("\nReservations:");
  const reservations = reservationList.filter(
    (reservation) => reservation.customer === customer
  );
  reservations.forEach((reservation) => {
    console.log(`Date: ${reservation.date}`);
    console.log(`Time: ${reservation.time}`);
    console.log(`Table Number: ${reservation.tableNum}`);
  });
});

// Cancel a reservation
reservation3.cancelReservation();

// Verify cancelled reservation
console.log("\nUpdated Reservation List:");
reservationList.forEach((reservation, index) => {
  console.log(`\nReservation ${index + 1}`);
  console.log(`Date: ${reservation.date}`);
  console.log(`Time: ${reservation.time}`);
  console.log(`Table Number: ${reservation.tableNum}`);
});