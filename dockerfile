# Use uma imagem base leve com Nginx
FROM nginx:alpine-slim

# Defina o diretório de trabalho no contêiner
WORKDIR /app

# Clona o repositório
RUN git clone https://github.com/MarceloMederi/calendarioDigital

# Exponha a porta 8080 (ou a porta que o seu aplicativo usa)
EXPOSE 8080
