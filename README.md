# ASEDS
####The description of the project's architecture
First of all the Project contains a folder named src that contains the file index.js which holds the main logic implemented here with nodejs.In addition there is a project named data that contains the file named question_answer that 
which is a csv file that wrapps a JSON content each object represents one single conversation. Then, there is some package*.json that comes accross once the npm is called to create the project setup it contains an indentity to the project.
Furthermore, we have .env file that holds API_KEY generated from openai platform it's a sensitive data so that we consider it as an environement variable which represents an abstraction to it for security purposes!   
And we have Dockerfile file that holds a bunch of instructions that define how our app will be run during the execution in an isolated environement! 

###All these instructions are for windows users:
######For user-related details:
#Prerequisites: Docker containerizer installed 
               Powershell windows run as admin
               vs Code 
               ensuring the structure of the projects as follow : 
                     ASEDS/
                            |- src/
                            |    |- index.js
                            |
                            |- data/
                            |    |- question_answer.csv
                            |
                            |- package.json
                            |- .env
                            |- Dockerfile
              have an account in openai, extract the API_KEY and put in the file .env  with an environement variable named OPEN_AI_KEY 
 #How to use it?:
After doing all the prerequisites steps , you're now able test our application:
1- open Powershell as admin go to ASEDS run this command :  docker build -t projet .  this create a docker image for our project with the name "project" 
wait till it finishs all the required installation then run this  : docker run -it -v ${pwd}/data:/usr/src/app/data projet  
this actually is doing a lot off tings. for instance the -it ooption is here to alert the terminal that we'll have an interactive execution so a flow of input output here so it's for sychnronization purpose;
-v is used to create a docker volume for this container the next argument with the form A:B means that the volume within the container which has the  stateless property (all data is being erased and lost once the contaoined is stopped or removed) is mapped to a laction oin the host sysfiles to ensure the persistence of data ! 
If we do this perfectly we'll have an interactive conversation with chatgpt API which is actually being stored in the folder data that we invoked in the architecture above ! 
