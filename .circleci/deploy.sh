docker stop app && docker rm $(docker ps -a -q) && \ 
docker rmi $(docker images -q) && \
docker pull oldtimerza/blade-express && \
docker run -d -t -p 80:3000 --name app oldtimerza/blade-express