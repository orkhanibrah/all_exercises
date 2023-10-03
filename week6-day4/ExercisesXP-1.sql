--Exercise 1

select * from items order by price;
select * from items where price >= 80 order by price desc;

alter table customers add column id serial primary key;
select firstname, lastname from customers 
where id <= 3
order by firstname limit 3;

select lastname from customers order by lastname desc;

