# Use uma imagem base leve com Nginx
FROM nginx:alpine-slim

# Defina o diretório de trabalho no contêiner
WORKDIR /usr/share/nginx/html

# Copia os arquivos
COPY . .

# Exponha a porta 8080 (ou a porta que o seu aplicativo usa)
EXPOSE 8080
