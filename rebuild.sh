docker-compose -f docker-compose-dev.yml down
docker-compose -f docker-compose-build.yml down
docker-compose -f docker-compose-deploy.yml down
docker-compose -f docker-compose-dev.yml build
docker-compose -f docker-compose-build.yml build
docker-compose -f docker-compose-deploy.yml build