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
        <td><button>Edit</button> 
        <button data-id="${employee.employeeID}" class="del-employee">Delete</button>
        </td>
      `;
      table.appendChild(row);
    });
  });
   const deleteButton = document.querySelectorAll('.del-employee')
   deleteButton.forEach(Button => {
    Button.addEventListener('click', (event) => {
      const employeeID = event.target.getAttribute('data-id');
      fetch(`/employees/${employeeID}` , {method: 'DELETE'})
      .then(response => response.json())
      .then(data => {
        event.target.closest('tr').remove();
      })
    })
   })