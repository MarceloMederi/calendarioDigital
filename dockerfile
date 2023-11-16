# Use uma imagem base leve com Nginx
FROM nginx:alpine

# Remova a configuração padrão do Nginx
RUN rm -rf /etc/nginx/conf.d/*

# Copie os arquivos do seu projeto para o diretório padrão do Nginx
COPY . /usr/share/nginx/html

# Copie o arquivo de configuração personalizado para o Nginx
COPY assets/nginx.conf /etc/nginx/conf.d/default.conf

# Exponha a porta 80, que é a porta padrão do Nginx
EXPOSE 80

# Comando para iniciar o Nginx em primeiro plano
CMD ["nginx", "-g", "daemon off;"]
