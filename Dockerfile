FROM ubuntu:22.04

RUN sudo apt update && apt install -y \
  build-essential \
  curl

RUN curl -fsSL https://deb.nodesource.com/setup_17.x | \
  sudo -E bash - sudo apt install -y nodejs
