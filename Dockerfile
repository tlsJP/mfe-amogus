FROM nginx

COPY dist/mfe-amogus /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf