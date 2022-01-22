FROM ubuntu:22.04

ENV NVM_VERSION=v0.39.1
ENV NODE_VERSION=17
ENV USER=hrcompiler

SHELL ["/bin/bash", "-c"]

RUN apt update && apt upgrade -y
# RUN apt install -y build-essential
RUN apt install -y git curl
RUN adduser "${USER}" --disabled-password --gecos ""

USER ${USER}

RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/${NVM_VERSION}/install.sh | bash
# RUN nvm install ${NODE_VERSION}

WORKDIR /home/${USER}/src

CMD [ "tail", "-f", "/dev/null" ]
