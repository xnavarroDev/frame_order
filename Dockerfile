FROM node:22-slim
WORKDIR /app
COPY package.json order.js ./
CMD ["node", "order.js", "/frames"]
