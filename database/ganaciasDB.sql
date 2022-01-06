create database ganancias;

\c ganancias

create table registro (
    id serial primary key,
    fecha timestamp,
    cornershop int,
    propinas int,
    boosmapOP int
);

create table boosmap ( 
    id_rutas serial primary key,
    fecha timestamp,
    numero_op int unique,
    direccion varchar(25),
    monto int
    
);