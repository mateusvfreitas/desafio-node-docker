FROM nginx:1.15.0-alpine

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/nginx.conf

# EXPOSE 80

# ENTRYPOINT [ "/docker-entrypoint.sh" ]

# CMD [ "nginx", "-g", "daemon off;" ]