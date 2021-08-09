-- vc pode utilizar o alias ou simplemente o nome da tabela.
USE sakila;
SELECT actor.first_name, actor.actor_id, sakila.film_actor.actor_id
FROM actor
INNER join film_actor
ON actor.actor_id = film_actor.actor_id;


-- da para ser omitio o AS neste caso.
SELECT a.first_name, a.actor_id, f.actor_id
FROM sakila.actor a
INNER JOIN film_actor
ON a.actor_id = f.actor_id;