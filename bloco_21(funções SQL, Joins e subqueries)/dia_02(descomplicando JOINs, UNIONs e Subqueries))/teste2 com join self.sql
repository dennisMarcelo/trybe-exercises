select * from sakila.film;

SELECT 
    t1.title, t1.rental_duration, t2.title, t2.rental_duration
FROM
    sakila.film AS t1,
    sakila.film AS t2
WHERE
    (t1.length = t2.length)
        AND (t1.rental_duration BETWEEN 2 AND 4)
        AND (t2.rental_duration BETWEEN 2 AND 4);