#Config server
FROM openjdk:17
EXPOSE 8087
COPY target/config-server-0.0.1-SNAPSHOT.jar config-service.jar
ENTRYPOINT [ "java", "-jar", "config-service.jar"]