### nestjs-rest-cqrs-example

1. Project Setup:
   - I have completed the project setup.

2. Docker and MySQL Issues:
   - I faced some issues related to the `docker-compose.yml` file and the MySQL Docker image on my M2 Mac.
   - I used the `mysql:8.0` Docker image. Localstack was installed via `pip3` and set up in a separate local Docker container. I executed the given commands in `.aws/localstack.sh` to update the notification-related database and to create specific topics and channels.

3. MySQL Library Replacement:
   - I replaced `mysql` with `mysql2` to use the latest MySQL 8.0, as the `mysql` library had issues in this repository.

4. Publisher-Subscriber Concept:
   - The project uses publisher-subscriber concepts. For example, if any user withdraws or deposits an amount, it publishes events to specific topics. During account deposits, the topic used is `AccountDeposited`. Similar topics are used for different events.

5. Event Handling:
   - Once an event is sent, it is handled via the notification module, which has a message handler that processes topic data and sends an email command. This command tries to send an email and updates the notification table based on the events.


### clean-architecture-nestJS

1. MongoDB Setup:
   - This project requires setting up MongoDB locally or using any hosted MongoDB service.

2. Code Change for Database Connection:
   - A minor code change is needed to connect to MongoDB. The database name must be passed separately in the second object argument, e.g., `{dbName: "test"}`.

3. Project Structure:
   - This project provides a perfect example of clean architecture, demonstrating how to implement services, infrastructure APIs, and use cases in a separated and organized manner.