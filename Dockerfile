FROM node:18-alpine

WORKDIR /usr/src/app

COPY package.json yarn.lock ./

RUN yarn install

# Copy source code
COPY . .

# Build TypeScript
RUN yarn build

# Expose port 3001
EXPOSE 3001

# Chạy ứng dụng
CMD ["node", "dist/server.js"]