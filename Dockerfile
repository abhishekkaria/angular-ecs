#stage 1
FROM node:16.3.0-alpine
WORKDIR /app
COPY . .
RUN npm install --force
RUN npm run build
EXPOSE 4200
CMD ["npm","run","server"]