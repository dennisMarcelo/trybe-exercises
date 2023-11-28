FROM node:16-alpine

WORKDIR /frontend_wdr

COPY . .

RUN npm install --loglevel=error

ENV BROWSER=none

ENTRYPOINT ["npm"]

CMD ["start"]
