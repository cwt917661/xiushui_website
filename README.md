# Xiushui Website
> This is a SPA website using docker to build up the environment  
> **FrontEnd** : Vue.js (using Vuetify)  
> **BackEnd**  : Spring Boot application to provide RESTful API  
> **Database** : MySQL  

## Docker
 > Use docker-compose to combime 3 containers : app-db (MySQL)、app-service (Vue.js + Spring Boot) 、php-my-admin
 - Overall structure
   ![image](https://github.com/cwt917661/xiushui_website/blob/main/Structure/Docker%20Structure.png)
 - Folder Structure
   ```
    .
    ├── init_sql                   # Include create_user.sql, create_table.sql for DB initiallization
        ├── create_user.sql
        └── create_table.sql
    ├── mysql_data                 # Volume for MySQL DB to store data
    ├── .env                       # Envionment configurations for docker-compose including ports, account, password
    ├── docker-compose.yaml        # Define containers' information
    └── service                    # app-service data files including spring boot deployed war and docker deploy actions
        ├── Dockerfile
        └── xiushui_website-0.0.1-SNAPSHOT.war
   ```
   
## Website
 > Use Vue.js + Spring Boot + MySQL
 - Overall structure
   ![image](https://github.com/cwt917661/xiushui_website/blob/main/Structure/App%20Sturcture.png)