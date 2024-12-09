
    FROM mysql:8.0

  
      ENV MYSQL_DATABASE = wplocal-db
      ENV MYSQL_USER = wplocal-admin
      ENV MYSQL_PASSWORD = password
      ENV MYSQL_ROOT_PASSWORD = rootpassword

      COPY wplocal-db.sql /docker-entrypoint-initdb.d/

      EXPOSE 3306