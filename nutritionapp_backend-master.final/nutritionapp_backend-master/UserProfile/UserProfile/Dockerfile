#Config server
FROM openjdk:17
EXPOSE 8081
COPY target/UserProfile-0.0.1-SNAPSHOT.jar UserProfile.jar
ENTRYPOINT [ "java", "-jar", "UserProfile.jar"]