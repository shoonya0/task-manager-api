-- we can also use schema instead of database
-- in sql their is no difference between schema and database
create database taskManagerDB;

use taskManagerDB;

create table task(
    id int primary key auto increment,
    title varchar(50) not null unique,
    discription varchar(300) not null,
    start_time timestamp default current_timestamp,
    end_time timestamp not null;
);

    use taskManagerDB;
    show table task;
    select * from task;

drop database taskManagerDB;
drop schema taskManagerDB;
```