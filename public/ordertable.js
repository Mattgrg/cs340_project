const table = document.querySelector('.custtable');


fetch('/orders')
  .then(response => response.json())
  .then(data => {
    data.forEach(order => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${order.orderID}</td>
        <td>${order.customerID}</td>
        <td>${order.employeeID}</td>
        <td>${order.Date}</td>
        <td>${order.Total}</td>
        <td>
        <button onclick="deleteorder(${order.orderID})">Delete</button>
        <button onclick="editorder(${order.orderID}, '${order.customerID}', '${order.employeeID}', '${order.Date}', '${order.Total}')">Edit</button>
        </td>
        `;
      table.appendChild(row);
  });
});

function editorder(orderID) {
    // fetch order data from the server
    fetch(`/orders/${orderID}`)
      .then(response => response.json())
      .then(order => {
        // create a form and populate it with existing order data
        const form = document.createElement('form');
        form.innerHTML = `
          <label for="orderID">First Name:</label>
          <input type="text" id="orderID" name="orderID" value="${order.orderID}">
          <br>
          <label for="customerID">Last Name:</label>
          <input type="text" id="customerID" name="customerID" value="${order.customerID}">
          <br>
          <label for="employeeID">employeeID:</label>
          <input type="text" id="employeeID" name="employeeID" value="${order.employeeID}">
          <br>
          <label for="Date">Date:</label>
          <input type="text" id="Date" name="Date" value="${order.Date}">
          <br>
          <label for="Date">Total:</label>
          <input type="text" id="Total" name="Total" value="${order.Total}">
          <br>
          <button type="submit">Save</button>
        `;
        // add event listener for form submission
        form.addEventListener('submit', event => {
          event.preventDefault();
            
          // create object with updated order information
          const updatedorder = {
            orderID: orderID,
            orderID: form.orderID.value,
            customerID: form.customerID.value,
            employeeID: form.employeeID.value,
            Date: form.Date.value,
            Total: form.Total.value,
          };
            
          // send PUT request to update the order in the database
          fetch(`/orders/${orderID}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedorder)
          })
          .then(data => {
            // display success message to the user
            console.log('order updated successfully!');
            alert('order updated successfully!');
            // reload the order table
            location.reload();
          })
          .catch(error => {
            // display error message to the user
            alert('Error updating order. Please try again later.');
          });
        });
        
        // style the form to appear in the middle of the screen
        form.style.position = 'absolute';
        form.style.top = '50%';
        form.style.left = '50%';
        form.style.transform = 'translate(-50%, -50%)';
        form.style.border = '2px solid black';
        form.style.padding = '20px';
        form.style.backgroundColor = 'white';
        
        // add the form to the page
        document.body.appendChild(form);
      })
      .catch(error => {
        console.error('Error fetching order data:', error);
        alert('Error fetching order data. Please try again later.');
    });
}
  

function deleteorder(orderID) {
  if (confirm("Are you sure you want to delete this order?")) {
    fetch(`/orders/${orderID}`, {
      method: 'DELETE'
    })
    .then(() => {
      alert("order deleted successfully!");
      location.reload();
    })
    .catch((error) => {
      console.error('Error deleting order:', error);
      alert("Error deleting order. Please try again later.");
    });
  }
};
