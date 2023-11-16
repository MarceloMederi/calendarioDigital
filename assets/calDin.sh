#!/bin/bash

# Clonar o repositório do GitHub
git clone https://github.com/MarceloMederi/calendarioDigital

# Entrar no diretório clonado
cd calendarioDigital/assets

# Construir a imagem Docker e executar o contêiner
docker build -t app . && docker run -d -p 3000:3000 app