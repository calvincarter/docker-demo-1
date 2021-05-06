FROM tomcat:8.0-alpine

RUN rm -r /usr/local/tomcat/webapps/ROOT/*

COPY . /usr/local/tomcat/webapps/ROOT/

EXPOSE 8080

CMD ["catalina.sh", "run"]