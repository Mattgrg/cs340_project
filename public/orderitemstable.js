const table = document.querySelector('.custtable');

fetch('/orderitemss')
  .then(response => response.json())
  .then(data => {
    data.forEach(orderitems => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${orderitems.orderID}</td>
        <td>${orderitems.itemID}/td>
        <td>${orderitems.number}</td>

        <td><button onclick="deleteorderitems(${orderitems.orderitemsID})">Delete</button></td>
        `;
      table.appendChild(row);
    });
  });

function deleteorderitems(orderitemsID) {
  if (confirm("Are you sure you want to delete this orderitems?")) {
    fetch(`/orderitemss/${orderitemsID}`, {
      method: 'DELETE'
    })
    .then(() => {
      alert("orderitems deleted successfully!");
      location.reload();
    })
    .catch((error) => {
      console.error('Error deleting orderitems:', error);
      alert("Error deleting orderitems. Please try again later.");
    });
  }
}
