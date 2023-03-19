const form = document.getElementById('search-form');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    const orderId = document.getElementById('oid').value;

    fetch(`/orderitems/${orderId}`)
        .then(response => response.json())
        .then(data => {
            const table = document.querySelector('.custtable');
            table.innerHTML = `
                <tr>
                    <th>OrderID</th>
                    <th>ItemID</th>
                    <th>Count</th>
                </tr>
            `;
            data.forEach(orderitem => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${orderitem.orderID}</td>
                    <td>${orderitem.itemID}</td>
                    <td>${orderitem.number}</td>
                `;
                table.appendChild(row);
            });
        })
        .catch(error => console.error(error));
});
