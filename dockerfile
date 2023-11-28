# Use uma imagem base leve com Nginx
FROM nginx:alpine

# Defina o diretório de trabalho no contêiner
WORKDIR /app

# Copie os arquivos HTML, CSS e JavaScript para o diretório de trabalho
COPY . .

# Exponha a porta 3000 (ou a porta que o seu aplicativo usa)
EXPOSE 3000