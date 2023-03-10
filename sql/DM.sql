-- These are all sameple data cant make queries without backend web code! 

-----------Selects--------------

-- Returns all orders from a customer with ID
SELECT Orders.orderID FROM Orders WHERE customerID = 1;

-- Returns all orders from a customer with name
SELECT Orders.orderID FROM Orders 
JOIN Customers ON Orders.customerID = Customers.customerID 
WHERE Customers.firstName = 'John' AND Customers.lastName = 'Wick';

SELECT Orders.orderID FROM Orders 
JOIN Customers ON Orders.customerID = Customers.customerID 
WHERE Customers.phone = 'insert phone here';

-- Returns all orders from a employee with ID
SELECT Orders.orderID FROM Orders WHERE EmployeeID = 1;

-- Returns all orders from a Employee with name
SELECT Orders.orderID FROM Orders 
JOIN Employees ON Orders.employeeID = Customers.employeeID 
WHERE employeeID.firstName = 'Bob' AND employeeID.lastName = 'Blecher';

-- Returns items id with name 
SELECT Items.itemID FROM Orders WHERE name = '';

-- Returns all items that were in an order
SELECT Items.name, Orderitems.number FROM Items
JOIN Orderitems ON Items.itemID = Orderitems.itemID
WHERE Orderitems.orderID = 1;

-- Select customer by name
SELECT * FROM Customers WHERE firstName = 'name' AND lastName = 'name';

-- Select customer by name
SELECT * FROM Customers WHERE phone ='';

-- Select customer by name
SELECT * FROM Employees WHERE firstName = 'name' AND lastName = 'name';

-- Select customer by name
SELECT * FROM Employees WHERE phone ='';

-- Select customer by id
SELECT * FROM Employees WHERE id = 1;

-- Select item by id
SELECT * FROM Items WHERE id = 1;


-----------Deletes--------------

-- Delete employee by id
DELETE FROM Employees WHERE employeeID = 1;

-- Delete employee by name
DELETE FROM Employees WHERE firstName = 'name' AND lastName = 'name';

-- Delete employee by id
DELETE FROM Employees WHERE employeeID = 1;

-- Delete Customers by name
DELETE FROM Customers WHERE firstName = 'name' AND lastName = 'name';

-- Delete Customers by id
DELETE FROM Customers WHERE customerID = 1;

-- Delete Customers by phone
DELETE FROM Customers WHERE phone = 'phone here';

-- Delete item by id 
DELETE FROM Items WHERE itemID = 1;

-- Delete order by id 
DELETE FROM Orders WHERE orderID = 1;



-----------UPDATES--------------


-- update Customers phone
UPDATE Customers SET phone = 'phone here' WHERE customerID = 1;

-- update Customers email
UPDATE Customers SET email = 'mail@mail.com' WHERE customerID = 1;

-- update Customers address
UPDATE Customers SET address = 'add' WHERE customerID = 1;

-- update employee phone
UPDATE Employees SET phone = 'phone here' WHERE employeeID = 1;

-- update employee email
UPDATE Employees SET email = 'mail@mail.com' WHERE employeeID = 1;

-- update employee address
UPDATE Employees SET address = 'add' WHERE employeeID = 1;

-- update employee address
UPDATE Employees SET pay = 1234.5 WHERE employeeID = 1;

-- update employee role
UPDATE Employees SET role = 'CEO' WHERE employeeID = 1;

-----------Inserts--------------
INSERT INTO Customers (firstName, lastName, phone, address, email)
    VALUES (firstName:, lastName:, phone:, address:, email:);

INSERT INTO Employees (firstName, lastName, phone, email, address, role, pay)
    VALUES (firstName:, lastName:, phone:, email:, address:, role:, pay:);

INSERT INTO Orders (customerID, employeeID, date, total)
    VALUES (customerID:, employeeID:, date:, total:);

INSERT INTO Orders (customerID, employeeID, date, total)
    VALUES (customerID:, employeeID:, date:, total:);

INSERT INTO Items (name, price, restriction)
    VALUES (name:, price:, restriction:);

INSERT INTO Orderitems (orderID, itemID, number)
    VALUES (orderID:,itemID:, number:);
