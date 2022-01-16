FROM ubuntu:22.04

ARG NVM_VERSION=v0.39.1
ARG NODE_VERSION=17
ARG USER=hrcompiler

SHELL ["/bin/bash", "-c"]

RUN apt update && apt upgrade -y
# RUN apt install -y git build-essential curl
RUN apt install -y curl
RUN adduser "${USER}" --disabled-password --gecos ""

USER ${USER}

RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/${NVM_VERSION}/install.sh | bash
# RUN nvm install ${NODE_VERSION}

WORKDIR /home/${USER}/src

CMD [ "tail", "-f", "/dev/null" ]
