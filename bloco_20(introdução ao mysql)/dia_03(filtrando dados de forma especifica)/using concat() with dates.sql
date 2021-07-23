SELECT 
    CONCAT( YEAR(NOW()) - YEAR(payment_date), ' anos' ) AS 'quantos anos se passaram'
FROM
    sakila.payment
