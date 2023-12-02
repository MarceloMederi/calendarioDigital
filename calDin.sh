#Clona o repositorio
git clone https://github.com/MarceloMederi/calendarioDigital

cd calendarioDigital

docker build -t cal . && docker run -d -p 8080:80 cal