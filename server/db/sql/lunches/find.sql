
/*
    Finds a product by user id + product name.
    NOTE: We only add schema here to demonstrate the ability of class QueryFile
    to pre-format SQL with static formatting parameters when needs to be.
*/

SELECT * FROM ${schema~}.lunches
WHERE id = ${id}