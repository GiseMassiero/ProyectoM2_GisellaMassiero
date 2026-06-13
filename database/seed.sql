INSERT INTO authors (name, email, bio)
VALUES
(
  'Gisella Massiero',
  'gise@gmail.com',
  'Autor de ejemplo'
);

INSERT INTO posts (author_id, title, content, published)
VALUES
(
  1,
  'Mi primer post',
  'Contenido de ejemplo',
  true
);