# nginxAndDocker
Deploy 2 web apps with docker and nginx.


# First build the docker image in cmd: 
 docker build . -t our-server
 
# Then run the image turning it into a docker container:
 docker run -it --rm -p 8081:80 our-server
 
# The deploy is done, try:
 https://localhost:8081/calc
 and
 https://localhost:8081/clock
 
