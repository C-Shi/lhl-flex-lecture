### SQL tips
1. String case conversion
    - String in SQL table is case-sensitive
    - For non-case sensitive data, convert to lower/upper case on both side
    - For example, you want to use `email.toLowerCase()` in JavaScript, and `LOWER(email)` in SQL
2. Date format storage
    - Use Date or Timestamp corresponding depends on your need
    - If you choose to use Timestamp, NEVER store timezone info. Always convert to UTC
3. Complicated Query
    - Start Simple by querying static column from one table
    - Apply join to connect static column from multiple tables
    - think about aggregate column.

    ```sql
      -- Get all my resevation's information and property's reviews
      --- reservations.id, properties.title, properties.cost_per_night, reservations.start_date, avg(rating) as average_rating

      -- step 1: query static column from all necessary informatiom in reservations table
      SELECT reservations.id, reservations.start_date 
      FROM reservations
      WHERE reservations.guest_id = 1
      ORDER BY reservations.start_date
      LIMIT 10;

      -- step 2:get property title, cost_per_night from properties table using join
      SELECT reservations.id, properties.title, properties.cost_per_night, reservations.start_date
      FROM reservations
      JOIN properties ON reservations.property_id = properties.id
      WHERE reservations.guest_id = 1
      ORDER BY reservations.start_date
      LIMIT 10;

      --- Step 3: All we miss is the average rating, which involve bring in property_reviews
      --- we can join on property_id or reservation_id, what's the difference?
      --- When calculate average rating, we want to show average for all people's review, not just my reviews
      --- So we should join on property_id. Because reversation belong to a single person
      SELECT reservations.id, properties.title, properties.cost_per_night, reservations.start_date, avg(rating) as average_rating
      FROM reservations
      JOIN properties ON reservations.property_id = properties.id
      JOIN property_reviews ON properties.id = property_reviews.property_id
      WHERE reservations.guest_id = 1
      GROUP BY properties.id, reservations.id
      ORDER BY reservations.start_date
      LIMIT 10;
    ```
4. Subquery
    1. Subquery is a query run inside of another query. For example, select in a select
    2. It can be use if on part of operation is apart from other condition, like WHERE
    3. In the above example, the result is limited by the `WHERE reservations.guest_id = 1`. But when calculate the average review, we like to ingore that `guest_id` limit

      ```sql
        -- Calculate the property review through all guests
        SELECT property_id, avg(rating) as average_rating FROM property_reviews
        GROUP BY property_id,

        --- We can add this sub query to the step 2
        SELECT reservations.id, properties.title, properties.cost_per_night, reservations.start_date,
        (
          SELECT avg(rating) as average_rating FROM property_reviews
          -- We calculate all the properties average rating, but only return the property that is currently selected by outer query
          WHERE property_id = properties.id
          GROUP BY property_id 
        )
        FROM reservations
        JOIN properties ON reservations.property_id = properties.id
        WHERE reservations.guest_id = 1
        GROUP BY properties.id, reservations.id
        ORDER BY reservations.start_date
        LIMIT 10;
      ```

### Project Structure - Separation of Concerns
1. Seperation of work based on what it is doing
2. Your routing define business logic. It should describe what data is expecting and what to do with data only
3. Your routing don't need to know how the data get retieved and where it is coming from
4. Your db module is responsible for interacting with the data. Read and write.
5. Your db don't need to know why this data is being requested, and where it will goes to
6. This way we can easily swap the db module, or change the business logic without rewrite the whole thing