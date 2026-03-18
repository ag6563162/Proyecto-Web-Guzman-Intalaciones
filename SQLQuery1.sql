BEGIN 
     CREATE DATABASE Proyecto_Web_Guzman_Intalaciones;
END

USE Proyecto_Web_Guzman_Intalaciones

BEGIN
  CREATE TABLE cliente (
      id INT IDENTITY(1,1) PRIMARY KEY,
	  nombre VARCHAR(300) NOT NULL,
	  telefono VARCHAR(50) NOT NULL,
	  direccion VARCHAR(500) NOT NULL,
	  fecha DATETIME2(0) NOT NULL
	  );

END 
GO

USE Proyecto_Web_Guzman_Intalaciones

BEGIN 
 CREATE TABLE productos_materiales (
    codigo INT IDENTITY (1,1) PRIMARY KEY,
	materiales VARCHAR (150) NOT NULL,
	cantidad VARCHAR (150) NOT NULL,
	subtotal DECIMAL (12,2),
	precio DECIMAL (10,2) NOT NULL,
	itbis DECIMAL (5,2) DEFAULT 20.00
	);

END
GO

USE Proyecto_Web_Guzman_Intalaciones

BEGIN 
CREATE TABLE metodo_pago (
  id INT IDENTITY (1,1) PRIMARY KEY,
  nombre VARCHAR(50) NOT NULL UNIQUE

);


  INSERT INTO metodo_pago (nombre) VALUES
  ('Efectivo'),
  ('tarjeta'),
  ('Transferencia');

END 
GO


USE Proyecto_Web_Guzman_Intalaciones

BEGIN
CREATE TABLE factura (
  id INT IDENTITY (1,1) PRIMARY KEY,
  cliente_id INT ,
  metodo_pago_id INT ,
  fecha DATETIME DEFAULT GETDATE(),
  subtotal DECIMAL (12,2),
  total_itbis DECIMAL (12,2),
  total DECIMAL (12,2),

  FOREIGN KEY (cliente_id) REFERENCES cliente(id),
  FOREIGN KEY (metodo_pago_id) REFERENCES metodo_pago(id)
  );

END
GO

 USE Proyecto_Web_Guzman_Intalaciones
BEGIN
CREATE TABLE detalle_factura (
  id INT IDENTITY (1,1) PRIMARY KEY,
  factura_id INT NOT NULL,
  productos_id INT NOT NULL,
  cantidad INT NOT NULL,
  precio DECIMAL(10,2) NOT NULL,

  FOREIGN KEY (factura_id) REFERENCES factura(id),
  FOREIGN KEY (productos_id) REFERENCES productos_materiales(codigo)
  );
END 
GO