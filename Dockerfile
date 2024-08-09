FROM node:20-alpine as builder
WORKDIR /app

COPY package.json ./
RUN corepack enable && corepack prepare pnpm@latest --activate 
RUN pnpm i
COPY . .
RUN pnpm build

FROM node:20-alpine as runner
WORKDIR /app
RUN corepack enable && corepack prepare pnpm@latest --activate 
COPY --from=builder /app/package.json .
COPY --from=builder /app/next.config.mjs ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
EXPOSE 3000
ENTRYPOINT ["pnpm", "start"]