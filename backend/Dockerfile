FROM node:22-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm ci --include=dev

COPY tsconfig.json ./
COPY src ./src

RUN npm run build

FROM node:22-alpine as runner

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=5491

COPY package*.json ./

RUN npm ci --omit=dev

COPY --from=builder /app/dist ./dist

EXPOSE 5491

CMD ["node", "dist/server.js"]