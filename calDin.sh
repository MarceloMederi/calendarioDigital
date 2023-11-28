#Clona o repositorio
git clone https://github.com/MarceloMederi/calendarioDigital

cd calendarioDigital

docker build -t app . && docker run -d -p 3000:3000 app