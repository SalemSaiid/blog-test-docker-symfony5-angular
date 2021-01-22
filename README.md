# blog Test Docker Symfony5 Angular

This is a simple Blog test 

## installation & Starting 
These instructions apply if you installed:
  - The Docker App, i.e., if you are using macOS, Linux or Windows Pro/Enterprise/Education.
  
1. First, download the , either directly or by cloning the repo.
1. Run in the root folder **docker-compose up -d** to prepare the environment (Angular, Apache, PHP7, Mysql, phpMyAdmin, Insert fixtures data).
1. Now that installation is complete, you can test :)
     - URL REST API DOC: http://localhost:8001/blog/public/index.php/api
     -   URL Angular: http://localhost:9898/
     - URL phpMyAdmin : http://localhost:8000 
         <br> user: root 
         <br> password: password 
         
     
<div> If you need to re-install, run these commands: <br> <br>
 -  docker-compose stop    <br>
 -  docker-compose rm    <br>
 -  docker volume prune --force  <br>
 -  docker-compose up --build --force-recreate <br>
