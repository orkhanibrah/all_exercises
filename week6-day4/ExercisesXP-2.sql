--Exercise 2
select * from customer where false;

select first_name || last_name full_name from customer;

select distinct create_date from customer;

select * from customer order by first_name desc;

select film_id, title, description, release_year, rental_rate
from film order by rental_rate;

select address, phone from address where district = 'Texas';

select * from film where film_id in (15, 150);

select film_id, title, description, length, rental_rate
from film
where title = 'Shutter Island';

select film_id, title, description, length, rental_rate
from film
where title like 'Sh%';

select * from film order by replacement_cost limit 10;

select * from film order by replacement_cost limit 20 offset 10;

select 
a.first_name || ' ' || a.last_name full_name, b.amount, b.payment_date
from customer a, payment b
where a.customer_id = b.customer_id
order by a.customer_id

select film.title from film, inventory
where film.film_id != inventory.film_id;

select city.city, country.country from city, country
where city.country_id = country.country_id;

select 
b.staff_id, a.customer_id, a.first_name, a.last_name, b.amount, b.payment_date
from
customer a, payment b 
where 
a.customer_id = b.customer_id
order by b.staff_id















