drop table if exists blog;

create table blog
(
  blog serial primary key,
  blog_author text,
  blog_text text
);


insert into blog
  (
  blog_author,
  blog_text)
values
  (
    'Isaiah',
    ';lasdfjl;asdjf'
)