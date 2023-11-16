#!/bin/bash

# Clonar o repositório do GitHub
git clone https://github.com/MarceloMederi/cadastro-usuario

# Entrar no diretório clonado
cd cadastro-usuario

# Construir a imagem Docker e executar o contêiner
docker build -t app . && docker run -d -p 3005:80 app