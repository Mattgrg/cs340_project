const table = document.querySelector('.custtable');

fetch('/customers')
  .then(response => response.json())
  .then(data => {
    data.forEach(customer => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${customer.customerID}</td>
        <td>${customer.firstName} ${customer.lastName}</td>
        <td>${customer.phone}</td>
        <td>${customer.address}</td>
        <td>${customer.email}</td>
        <td><button onclick="deletecustomer(${customer.customerID})">Delete</button></td>
        `;
      table.appendChild(row);
    });
  });

function deletecustomer(customerID) {
  if (confirm("Are you sure you want to delete this customer?")) {
    fetch(`/customers/${customerID}`, {
      method: 'DELETE'
    })
    .then(() => {
      alert("customer deleted successfully!");
      location.reload();
    })
    .catch((error) => {
      console.error('Error deleting customer:', error);
      alert("Error deleting customer. Please try again later.");
    });
  }
}
