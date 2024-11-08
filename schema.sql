CREATE TABLE Usuarios (
    nombre VARCHAR(100) NOT NULL,
    correo VARCHAR(100) PRIMARY KEY,
    password VARCHAR(100) NOT NULL
);

CREATE TABLE Tweets (
    id SERIAL PRIMARY KEY,
    n_likes INT NOT NULL,
    texto TEXT NOT NULL,
    fecha TIMESTAMPTZ NOT NULL,
    usuario VARCHAR(100),
    publicado BOOLEAN NOT NULL,
    FOREIGN KEY (usuario) REFERENCES Usuarios(correo)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);
