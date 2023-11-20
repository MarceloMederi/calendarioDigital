#!/bin/bash

# Cria o diretório Nginx
mkdir C:\Users\marcelo.msantos\nginx

# Copia os arquivos HTML para o diretório Nginx
cp -r . C:\Users\marcelo.msantos\nginx

# Monta e executa o container do projeto
docker build -t app . && docker run -p 8080:80 -d app