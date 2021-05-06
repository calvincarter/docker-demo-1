1. Build docker image

```
The docker build command builds Docker images from a Dockerfile.

$ docker build . -t mywebapp
```

2. Verify  image

```
ls allows you to see all the images

$ docker image ls
```

3. Run image

```
Within same terminal:
docker run -p 8080:8080 mywebapp

Detach Mode:
docker run -d -p 8080:8080 mywebapp
```

Other commands:
```
List all containers
$ docker ps

Stop Docker container
$ docker stop <container id>

Remove all images
$ docker rmi $(docker images -a -q) -f
```