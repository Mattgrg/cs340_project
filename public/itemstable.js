const table = document.querySelector('.custtable');

fetch('/items')
  .then(response => response.json())
  .then(data => {
    data.forEach(item => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${item.itemID}</td>
        <td>${item.name}</td>
        <td>${item.price}</td>
        <td>${item.restriction}</td>
        <td><button onclick="deleteitem(${item.itemID})">Delete</button></td>
        `;
      table.appendChild(row);
    });
  });

function deleteitem(itemID) {
  if (confirm("Are you sure you want to delete this item?")) {
    fetch(`/items/${itemID}`, {
      method: 'DELETE'
    })
    .then(() => {
      alert("item deleted successfully!");
      location.reload();
    })
    .catch((error) => {
      console.error('Error deleting item:', error);
      alert("Error deleting item. Please try again later.");
    });
  }
}
