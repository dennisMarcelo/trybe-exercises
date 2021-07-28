SELECT * FROM sakila.actor;
SELECT * FROM sakila.film_actor;
SELECT * FROM sakila.film;
SELECT * FROM sakila.staff;
SELECT * FROM sakila.address;
SELECT * FROM sakila.customer;


-- teste 1
SELECT act.actor_id, act.first_name, f_act.film_id
FROM sakila.actor AS act
INNER JOIN sakila.film_actor AS f_act
ON act.actor_id = f_act.actor_id;


-- teste 2
SELECT st.first_name, st.last_name, ad.address
FROM sakila.staff AS st
INNER JOIN sakila.address AS ad
ON st.address_id = ad.address_id;


-- teste 3
SELECT cus.first_name, count(ad.address) AS qtd_endereços 
from sakila.customer as cus
INNER JOIN sakila.address AS ad
ON cus.address_id = ad.address_id
WHERE cus.active = 1
GROUP BY cus.first_name
ORDER BY cus.first_name;


-- teste 3 
SELECT a.actor_id, a.first_name, f.film_id, f.title
FROM sakila.film_actor AS fa
INNER JOIN sakila.actor AS a
INNER JOIN sakila.film AS f
ON fa.actor_id = a.actor_id AND fa.film_id = f.film_id;

