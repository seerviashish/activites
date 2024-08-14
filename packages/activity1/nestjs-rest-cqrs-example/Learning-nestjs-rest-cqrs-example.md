# nestjs-rest-cqrs-example

1. Project setup completed.
2. Faced some issues related docker-compose.yml and mysql docker image for this m2 mac.
3. Used mysql:8.0 docker image. localstack installed via pip3 and setup local docker container separately. Executed given commands in .aws/localstack.sh to update notification related db and to create specific topic and channel
4. Replaced mysql with mysql2 to use latest mysql8.0. mysql library have issue in this repo.
5. It uses publisher subscriber concepts
6. For example if any user withdraw amount or deposit amount it publish events to specific topic. i.e during account deposit topic is used `AccountDeposited` similar there are other topics for different events.
7. Once the event send its handled via notification module have message handler which handle topic data based on topic and send email command which try to send mail and update notification table based on events


# clean-architecture-nestJS
1. This project needs setup mongodb in local or any mongodb hosted.
2. Minor code change need to connect with mongodb dbName separately need to pass in second object args {dbName: "test"}
3. This project explains perfect example of services, infrastructure apis how to implement, use-cases separated.