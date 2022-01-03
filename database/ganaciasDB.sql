create database ganancias;

\c ganancias

create table registro (
    id serial primary key,
    fecha timestamp,
    cornershop int,
    propinas int,
    boosmapOP int
);

create table rutas ( 
    id_rutas int,
    fecha timestamp,
    numero_op int primary key,
    direccion varchar(25),
    constraint fk_registro foreign key(id_rutas) references registro(id)
);