FROM node:16.9.1

# 设置工作目录
WORKDIR /app

COPY package.json ./package.json
RUN npm config set registry http://registry.npm.taobao.org
RUN npm install
COPY . .
RUN npm run build
# 暴露容器端口
EXPOSE 7001

CMD npm start