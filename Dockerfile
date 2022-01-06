FROM openjdk:17-alpine

WORKDIR /usr/src/app
RUN addgroup --system spring && \
    adduser --system spring --ingroup spring

COPY ./agrocom-service.jar app.jar
RUN chmod u+x app.jar
USER spring:spring

ENTRYPOINT ["java", "-jar", "-Dsun.misc.URLClassPath.disbaleJarChecking=true", "-Dspring.profiles.active=prod", "app.jar"]
