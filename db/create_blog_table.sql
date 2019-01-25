drop table if exists blog;

create table blog
(
  blog serial primary key,
  blog_author text,
  blog_text text
)