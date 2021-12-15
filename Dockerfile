FROM nginx:1.15.8-alpine
#configuration
copy ./nginx.conf /etc/nginx/nginx.conf
#content, comment out the ones you dont need!
copy ./clock/* /usr/share/nginx/html/clock/
copy ./calc/* /usr/share/nginx/html/calc/
#copy ./*.css /usr/share/nginx/html/clock
#copy ./*.png /usr/share/nginx/html/
#copy ./*.js /usr/share/nginx/html/clocñ
# docker build . -t our-server
# docker run -it --rm -p 8081:80 our-server