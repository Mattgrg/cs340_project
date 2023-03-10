const table = document.querySelector('.custtable');

fetch('/employees')
  .then(response => response.json())
  .then(data => {
    data.forEach(employee => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${employee.employeeID}</td>
        <td>${employee.firstName} ${employee.lastName}</td>
        <td>${employee.phone}</td>
        <td>${employee.email}</td>
        <td>${employee.address}</td>
        <td>${employee.role}</td>
        <td>${employee.pay}</td>
        <td><button onclick="deleteEmployee(${employee.employeeID})">Delete</button></td>
        `;
      table.appendChild(row);
    });
  });

function deleteEmployee(employeeID) {
  if (confirm("Are you sure you want to delete this employee?")) {
    fetch(`/employees/${employeeID}`, {
      method: 'DELETE'
    })
    .then(() => {
      alert("Employee deleted successfully!");
      location.reload();
    })
    .catch((error) => {
      console.error('Error deleting employee:', error);
      alert("Error deleting employee. Please try again later.");
    });
  }
}
