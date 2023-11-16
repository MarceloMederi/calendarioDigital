#!/bin/bash

# Clonar o repositório do GitHub
git clone https://github.com/MarceloMederi/calendarioDigital

# Entrar no diretório clonado
cd calendarioDigital/assets

# Construir a imagem Docker
docker build -t app .

# Executar o contêiner
docker run -d -p 7070:7070 app
