
### 🚰 Part A: Data Insertion (INSERT INTO)  
_Insert the following 5 records into the `patients` table._

1. Add a patient with ID 1, named Juan Dela Cruz, Male, born on 2001-05-10, from Manila, NCR, allergic to pollen, height 170 cm, weight 65 kg.  
2. Add a patient with ID 2, Maria Santos, Female, 1995-02-22, from Cebu City, CV, no allergies, height 160, weight 55.  
3. Add a patient with ID 3, Pedro Reyes, Male, 1989-07-14, from Davao City, DVO, allergic to seafood, height 175, weight 70.  
4. Add a patient with ID 4, Ana Lim, Female, 2000-01-01, from Baguio City, CAR, allergic to dust, height 150, weight 45.  
5. Add a patient with ID 5, Carlo Gomez, Male, 1993-09-09, from Iloilo City, WV, allergic to penicillin, height 168, weight 62.

---

### 📖 Part B: Data Retrieval (SELECT)  
_Use SELECT queries to retrieve information._

6. Display all columns of all patients.  
7. Show only the first names and last names of all patients.  
8. Display all female patients.  
9. Retrieve patients from the province with ID 'NCR'.  
10. Show all patients who are allergic to pollen.  
11. Display patients with height greater than 160 cm.  
12. Show all patients whose weight is between 50 and 70.  
13. Display the full name and birth date of patients born before the year 2000.  
14. Retrieve the last name and city of all male patients.  
15. Show all patients sorted by last name in ascending order.

---

### ✏️ Part C: Data Update (UPDATE)  
_Update specific records in the table._

16. Update patient 1's city to "Quezon City".  
17. Change the weight of patient 2 to 58 kg.  
18. Set patient 4’s allergy to “none”.  
19. Increase the height of patient 3 by 2 cm.  
20. Change all patients from "Cebu City" to "Mandaue City".  
21. Update the province_id of patient 5 to "VI".  
22. Set the weight of all patients who weigh less than 50 to 50.

---

### 🗑️ Part D: Data Deletion (DELETE)  
_Delete records based on certain conditions._

23. Delete the patient with ID = 5.  
24. Remove all patients who have no allergies (`allergies = 'none'`).  
25. Delete all male patients with weight less than 60.  
26. Delete all patients from the province 'DVO'.  
27. Remove patients who are taller than 180 cm.  
28. Delete all patients born before 1990.

---

### 🔍 Part E: Practice and Query Enhancements  
_Combine clauses and enhance queries._

29. Display the full name, age (hint: use `YEAR(CURDATE()) - YEAR(birth_date)`), and city of all patients.  
30. Show all unique provinces in the table (use `DISTINCT`).
