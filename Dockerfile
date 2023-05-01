FROM nginx:1.15.8-alpine
# configuration
copy ./nginx.conf /etc/nginx/nginx.conf

copy ./clock/* /usr/share/nginx/html/clock/
copy ./calc/* /usr/share/nginx/html/calc/

# commands
# docker build . -t our-server
# docker run -it --rm -p 8081:80 our-server
