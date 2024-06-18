FROM node:22-alpine as build
WORKDIR /app/src
COPY package*.json ./
RUN npm ci
COPY . ./
RUN npm run build


FROM nginx:latest
RUN rm -rf /usr/share/nginx/html
ENV TZ=Europe/Vilnius
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone
COPY --from=build /app/src/dist/fictional-waddle/browser/ /usr/share/nginx/html/
ADD docker/nginx.conf /etc/nginx/conf.d/default.conf
