# MySQL Server: Basic CRUD Operations

This guide introduces foundational SQL commands under **Data Definition Language (DDL)** and **Data Manipulation Language (DML)** for MySQL Server. This material is intended for students learning information management and database handling.

---

## 1. Data Definition Language (DDL)

### Creating a Table

To define a table, use the `CREATE TABLE` statement. For this guide, we will use a `product` table.

```sql
CREATE TABLE product (
    product_code VARCHAR(10) PRIMARY KEY,
    product_name VARCHAR(100) NOT NULL,
    description TEXT,
    category VARCHAR(50),
    supplier VARCHAR(100),
    price DECIMAL(10, 2) NOT NULL,
    stock_quantity INT DEFAULT 0,
    manufacture_date DATE,
    expiry_date DATE
);
```

### Columns, Data Types, and Constraints

- `VARCHAR(n)`: Variable-length string
- `TEXT`: Long text
- `DECIMAL(m, d)`: Exact numeric values
- `DATE`: For date values
- Constraints used:
  - `PRIMARY KEY`: Uniquely identifies a row
  - `NOT NULL`: Column must have a value
  - `DEFAULT`: Assigns default value

Note: We **do not use AUTO\_INCREMENT** for this example. All IDs are manually managed.

---

## 2. Data Manipulation Language (DML)

### Data Insertion

Insert data using `INSERT INTO`:

```sql
INSERT INTO product (product_code, product_name, description, category, supplier, price, stock_quantity, manufacture_date, expiry_date)
VALUES
('P001', 'Ballpen', 'Blue ink pen', 'Stationery', 'Pilot', 12.50, 100, '2024-01-10', '2026-01-10'),
('P002', 'Notebook', '200 pages', 'Stationery', 'Corona', 45.00, 50, '2024-01-05', '2027-01-05'),
('P003', 'Eraser', 'Rubber eraser', 'Stationery', 'Faber-Castell', 8.00, 200, '2023-12-10', '2026-12-10'),
('P004', 'Pencil', '2B pencil', 'Stationery', 'Mongol', 10.00, 150, '2023-12-01', '2025-12-01'),
('P005', 'Marker', 'Permanent black marker', 'Office Supplies', 'Sharpie', 30.00, 75, '2023-11-11', '2025-11-11'),
('P006', 'Paper Ream', 'A4 size, 500 sheets', 'Office Supplies', 'PaperOne', 150.00, 60, '2024-02-15', '2026-02-15'),
('P007', 'Scissors', 'Medium size', 'Office Supplies', 'Scotch', 50.00, 40, '2024-03-01', '2027-03-01'),
('P008', 'Glue Stick', 'Solid glue', 'Stationery', 'Elmers', 20.00, 80, '2024-01-20', '2026-01-20'),
('P009', 'Stapler', 'Mini stapler', 'Office Supplies', 'Kokuyo', 85.00, 30, '2024-04-01', '2028-04-01'),
('P010', 'Tape', 'Transparent tape', 'Office Supplies', '3M', 15.00, 90, '2024-02-10', '2027-02-10'),
('P011', 'Folder', 'Expanding folder', 'Filing', 'Maxfile', 60.00, 70, '2024-03-15', '2026-03-15'),
('P012', 'Highlighter', 'Yellow color', 'Stationery', 'Stabilo', 35.00, 55, '2023-10-10', '2025-10-10'),
('P013', 'Clipboard', 'A4 size', 'Filing', 'OfficePro', 40.00, 25, '2024-05-10', '2028-05-10'),
('P014', 'Binder Clips', 'Small size, 12 pcs', 'Filing', 'Deli', 25.00, 120, '2024-01-01', '2027-01-01'),
('P015', 'Correction Tape', '5mm x 8m', 'Stationery', 'Tombow', 38.00, 95, '2024-06-01', '2026-06-01'),
('P016', 'Ruler', '30 cm', 'Stationery', 'Staedtler', 22.00, 85, '2024-01-25', '2028-01-25'),
('P017', 'Whiteboard Marker', 'Blue', 'Office Supplies', 'Dong-A', 28.00, 65, '2023-08-15', '2025-08-15'),
('P018', 'Thumbtacks', '50 pcs per box', 'Filing', 'BestBuy', 18.00, 150, '2023-07-20', '2027-07-20'),
('P019', 'Pen Holder', 'Metal mesh', 'Office Supplies', 'OrganizeIt', 55.00, 20, '2024-02-28', '2029-02-28'),
('P020', 'Laminating Sheets', 'A4 size', 'Filing', 'LamTech', 120.00, 35, '2024-03-20', '2026-03-20');
```

---

### Data Selection Examples

#### Basic SELECT

```sql
SELECT * FROM product;
```

#### Select Specific Columns

```sql
SELECT product_name, price FROM product;
SELECT product_code, supplier FROM product;
```

#### WHERE Clause Examples

```sql
-- Products from a specific category
SELECT * FROM product WHERE category = 'Stationery';

-- Products with price over 50
SELECT * FROM product WHERE price > 50;

-- Products with stock between 60 and 100
SELECT * FROM product WHERE stock_quantity BETWEEN 60 AND 100;

-- Products from a specific supplier
SELECT * FROM product WHERE supplier = 'Sharpie';

-- Products with product_name containing 'pen'
SELECT * FROM product WHERE product_name LIKE '%pen%';
```

#### Advanced SELECT Techniques

```sql
-- Products sorted by name
SELECT * FROM product ORDER BY product_name ASC;

-- Most expensive product
SELECT * FROM product ORDER BY price DESC LIMIT 1;

-- Grouping and Aggregation
SELECT category, COUNT(*) AS total_items FROM product GROUP BY category;
SELECT category, AVG(price) AS average_price FROM product GROUP BY category;

-- Filter grouped results
SELECT category, COUNT(*) AS total FROM product GROUP BY category HAVING total > 3;
```

---

### Data Update Examples

#### Basic Updates

```sql
-- Change price of a specific product
UPDATE product SET price = 95.00 WHERE product_code = 'P002';

-- Update stock quantity
UPDATE product SET stock_quantity = 70 WHERE product_code = 'P010';
```

#### Update Multiple Columns

```sql
-- Modify both price and stock
UPDATE product SET price = 110.00, stock_quantity = 60 WHERE product_code = 'P006';
```

#### Using Expressions and Conditions

```sql
-- Increase all prices by 10%
UPDATE product SET price = price * 1.10;

-- Set all expired items to stock 0
UPDATE product SET stock_quantity = 0 WHERE expiry_date < CURRENT_DATE();

-- Append text to description
UPDATE product SET description = CONCAT(description, ' - Limited Edition') WHERE product_code = 'P007';
```

---

### Data Deletion Examples

#### Basic Delete

```sql
DELETE FROM product WHERE product_code = 'P019';
```

#### Conditional Delete

```sql
-- Remove low-stock items
DELETE FROM product WHERE stock_quantity < 20;

-- Delete items from a certain supplier
DELETE FROM product WHERE supplier = 'OrganizeIt';
```

#### Do's and Don'ts

- ✅ Always use WHERE when deleting.
- ❌ Avoid `DELETE FROM product;` unless intentional.

#### Truncate vs Drop

```sql
TRUNCATE TABLE product; -- Deletes all data, retains structure
DROP TABLE product; -- Deletes entire table structure and data
```

---

## 💡 Activity: SQL CRUD Drill

**Objective:** Practice and apply CRUD operations in MySQL Server.

**Instructions:**

1. Create the `product` table with the structure above.
2. Insert all 20 sample products.
3. Write and test queries for the following tasks:

- List all products sorted by price (highest to lowest)
- Find products with stock below 60
- Update price of all 'Stationery' items by +5%
- Delete all products that expired before 2025
- Display only products supplied by 'Sharpie' or 'Stabilo'
- Show number of products per category
- Increase stock of 'Notebook' by 20 units
- Get average price of products per category
- Find products with 'pen' in the name
- Change supplier name 'Corona' to 'Corona Supplies'
- List products manufactured after January 1, 2024
- Select the top 3 most expensive products
- Remove products in the category 'Filing'
- Set price of all 'Glue Stick' products to 25.00
- Add 10 units to all products in 'Office Supplies'
- Count how many products have price above 100
- Show products with price between 20 and 80
- Find the cheapest product in 'Stationery'
- Delete all products that are expired
- Show all products and calculate their total value (price \* stock\_quantity)

**Expected Output:** Submit a `.sql` file with all your commands and screenshots of the output.

---

This document is a starting point for your journey in data handling using MySQL Server. Practice each command, and don’t forget to experiment!

