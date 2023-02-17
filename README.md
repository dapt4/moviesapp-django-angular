# moviesapp-django-angular

![image](https://user-images.githubusercontent.com/67972962/219655304-65a56a41-05e6-460a-91f6-1e12d9735e09.png)

first create your virtualenv

`$ cd backend`

`$ python3 -m venv venv`

activate venv

`$ source venv/bin/activate`

then install requirements

`$ pip install -r requirements.txt`

install postgresql, login and create the database

`CREATE DATABASE <yourDBname>;`

create a .env file in the root folder

`$ touch .env`

and add your postgresql credentials and the app SECRET_KEY to .env file

>ENV_SECRET_KEY="{add a secret key like bhajfbkjhawbdkjhabdjh}"\
ENV_NAME='{yourDBname}'\
ENV_HOST='{your host or localhost}'\
ENV_PORT='{your db port or 5432}'\
ENV_USER='{your db user}'\
ENV_PASSWORD='{your db password}'

run the command:
`python manage.py migrate`

finally the project run with: 

`$ python manage.py runserver`

open your browser or your REST Client in: 

### get studios
`GET 'http://localhost:8000/estudio'`\
### create a studio
`POST 'http://localhost:8000/estudio' `\
### get a studio
`GET 'http://localhost:8000/estudio/8'`\
### edit studio
`PUT 'http://localhost:8000/estudio/8' `\
### delete a studio
`DELETE 'http://localhost:8000/estudio/8'`\
### get movies
`GET 'http://localhost:8000/pelicula'`\
### create a studio
`POST 'http://localhost:8000/pelicula'`\
### get a studio
`GET 'http://localhost:8000/pelicula/9'`\
### edit studio
`PUT 'http://localhost:8000/pelicula/9' `\
### delete a studio
`DELETE 'http://localhost:8000/pelicula/9'`\
### get movies
`GET 'http://localhost:8000/actor'`\
### create a studio
`POST 'http://localhost:8000/actor'`\
### get a studio
`GET 'http://localhost:8000/actor/6'`\
### edit studio
`PUT 'http://localhost:8000/actor/6'`\
### delete a studio
`DELETE 'http://localhost:8000/actor/6'`


active the frontend with:

`cd ../frontend`\
`ng serve`

open the browser in:

`localhost:4200`
