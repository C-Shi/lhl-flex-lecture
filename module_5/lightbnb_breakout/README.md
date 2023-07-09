## Lighthouse BnB Q&A

- [x] Project Structure Walkthrough
- [x] Understanding SQL query structure
- [x] Tips on complicated query

### Project Structure
- Seperate your code based on their functionality and responsibility
- **Front End**: User Interface. Handle user action
  - Front End JavaScript
- **Routing**: Manage request and response, authentication, validation and business logic
  - Express Router
- **Data module**: Interaction with database. Isolation from business logic
- **Migration/Seeding**: Project database setup

    ![project structure](./img/project_structure.jpg)

- What are the benefits of separation of concern?

### SQL Query Structure
- **Clauses** are functions/sections in SQL to perform a specific task. They are in a specific order
- Exercise: Get properties title and its average rating on property with owner_id 1, 2, 3, 4, 5

```sql
-- SELECT Clauses
SELECT properties.title, AVG(rating) FROM properties

-- JOIN Clauses
JOIN property_reviews ON property_reviews.property_id = properties.id

-- WHERE Clauses
WHERE owner_id IN (1, 2, 3, 4, 5)

-- GROUP BY HAVING Clauses
GROUP BY properties.title

-- ORDER BY Clauses
ORDER BY avg(rating) DESC

-- LIMIT Clauses
LIMIT 10;
```

- Some Clauses are optionals, but they need to be in the correct order if exists

### Work with Complicated Query
- Where to start a query if there are multiple tables, multiple conditions and groups and aggregation
- Exercise: Get all resevations for a guest number 1 and the its property reviews

    ![exercise](./img/all_my_reservations.png)

  1.  How many table involved?
      - reservation information => `reservations`
      - property information => `properties`
      - average rating information => `property_reviews`
  2.  Start with one table, query all static columns

    ```sql
    SELECT reservations.id, reservations.start_date FROM reservations
    WHERE reservations.guest_id = 1
    ORDER BY reservations.start_date;
    ```
  
  3. Start Join additional tables and add their static columns

    ```sql
    SELECT reservations.id, reservations.start_date, 
    -- Add new columns from other tables
    properties.title, properties.cost_per_night
    FROM reservations
    -- Add join on new tables
    JOIN properties ON reservations.property_id = properties.id
    WHERE reservations.guest_id = 1
    ORDER BY reservations.start_date;
    ```

  4. Target the aggregation/calculation. This usually require `JOIN` and `GROUP BY`

    ```sql
    SELECT reservations.id, properties.title, properties.cost_per_night, reservations.start_date,
    -- average rating is calculated from calling
    AVG(property_reviews.rating) AS average_rating
    FROM reservations
    JOIN properties ON reservations.property_id = properties.id
    -- join property_reviews table to get access to rating
    JOIN property_reviews ON properties.id = property_reviews.property_id
    WHERE reservations.guest_id = 1
    -- add group by to define how AVG is calculated
    -- usually you need to group by all non-aggregate tables' primary key
    GROUP BY properties.id, reservations.id
    ORDER BY reservations.start_date;
    ```

