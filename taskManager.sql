-- we can also use schema instead of database
-- in sql their is no difference between schema and database
create database taskManagerDB;

use taskManagerDB;
create table task(
    id int primary key auto_increment,
    title varchar(50) not null unique,
    description varchar(300) not null,
    status enum('pending', 'inprogress', 'completed' , 'canceled' , 'onhold') default 'pending',
    start_time timestamp not null,
    end_time timestamp not null
);
    -- to see the values of the table and their type
    use taskManagerDB;
    describe task;
    -- to see the values of the table
    use taskManagerDB;
    select * from task;

use taskManagerDB;
drop database taskManagerDB;
drop schema taskManagerDB;
```