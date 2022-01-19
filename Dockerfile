FROM ubuntu:22.04

ENV NVM_VERSION=v0.39.1
ENV NODE_VERSION=17
ENV USER=hrcompiler
ENV MAVEN_OPTS="-Xmx1G"
ENV ANTLR_VERSION=4.9.3
ENV ANTLR_JAR_PATH=/home/${USER}/src/antlr-${ANTLR_VERSION}-complete.jar

SHELL ["/bin/bash", "-c"]

RUN apt update && apt upgrade -y
# RUN apt install -y build-essential
RUN apt install -y git curl
RUN apt install -y openjdk-11-jre-headless maven
RUN adduser "${USER}" --disabled-password --gecos ""

USER ${USER}

RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/${NVM_VERSION}/install.sh | bash
# RUN nvm install ${NODE_VERSION}

WORKDIR /home/${USER}/src

RUN curl -O https://www.antlr.org/download/antlr-${ANTLR_VERSION}-complete.jar
RUN alias antlr4='java -Xmx500M -cp "${ANTLR_JAR_PATH}" org.antlr.v4.Tool'
RUN alias grun='java -Xmx500M -cp "${ANTLR_JAR_PATH}" org.antlr.v4.gui.TestRig'

CMD [ "tail", "-f", "/dev/null" ]
# ENTRYPOINT ["antlr4"]

#  antlr4 -Dlanguage=JavaScript -o src/antlr src/Hrlang.g4
