#!/bin/bash

# Substitua 'sua-imagem' pelo nome desejado para a imagem Docker
docker build -t app .

# Execute o contêiner, mapeando a porta desejada
docker run -p 8080:80 -d app
