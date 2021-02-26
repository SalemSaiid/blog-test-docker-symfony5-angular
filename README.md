# blog Test Docker Symfony5 Angular11

This is a simple Blog test 

## installation & Starting 
These instructions apply if you installed:
  - The Docker App, i.e., if you are using macOS, Linux or Windows Pro/Enterprise/Education.
  
1. First, download the , either directly or by cloning the repo.
1. Run in the root folder **docker-compose up --build --force-recreate** to prepare the environment (Angular, Apache, PHP7, Mysql, phpMyAdmin, Insert fixtures data).
1. Now that installation is complete, you can test :)<br><br>
    #Back:<br>
     - URL REST API DOC: http://localhost:8001/blog/public/index.php/api<br>
     - URL phpMyAdmin : http://localhost:8000 
         <br> user: root 
         <br> password: password  <br>   
   #Front:  <br>
     - URL Blog Test with Angular: http://localhost:9898/<br>
     - Not Found page: http://localhost:9898/notfound-ozozo<br>
     - Tests: 
         npm run lint<br>
         npm run test<br>
         npm run e2e<br><br>
      - Production<br>
         npm run build    
         
     
 #If you need to re-install, run these commands:
 -  docker-compose stop    <br>
 -  docker-compose rm    <br>
 -  docker volume prune --force  <br>
 -  docker-compose up --build --force-recreate <br>
 <br>
 
#Useful Commands 
# Access Bash<br>
  docker-compose exec www bash
#run Symfony Commands (console)
  docker container exec -it back-container blog/bin/console doctrine:schema:update --force <br>
# run composer install<br>
  docker container exec -it back-container sh -c "cd blog && php composer.phar install"
# Mysql Commands
 docker-compose exec db mysql -uroot -p"password"
 # Check CPU consumption
 docker stats $(docker inspect -f "{{ .Name }}" $(docker ps -q))