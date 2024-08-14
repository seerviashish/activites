# MYSQL 8

## How to setup?

    1. Run the compose file as demon process.
    ```sh
    $ docker-compose up -d
    ```
    2. Connect to container bash terminal. Find a container id where your docker running.
    ```sh
    $ docker exec -it {container_id} /bin/bash
    ```

    3. Login to mysql
    ```sh
    $ mysql -u root -p
    ```
    #Enter a password based on environment value

    4. Change the privileges for mysql user as you need.
