#!/bin/bash

read -p "Digite a mensagem do commit: " commit_message

if [ -z "$commit_message" ]; then
  echo "Erro: mensagem do commit vazia."
  exit 1
fi

echo "Adicionando arquivos..."
git add .

echo "Fazendo commit..."
git commit -m "$commit_message"

echo "Fazendo push..."
git push origin aux

echo "Push feito!"
