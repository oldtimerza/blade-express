echo stop docker running container and remove old images
docker stop app && \
docker rm $(docker ps -a -q) && \ 
docker rmi $(docker images -q) && \
echo pull latest docker image and run it
docker pull oldtimerza/blade-express && \
docker run -d -t -p 80:3000 --name app oldtimerza/blade-express