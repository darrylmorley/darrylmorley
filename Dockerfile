# Static Astro build served by nginx. Build with:
#   docker build -t registry.digitalocean.com/<registry>/darrylmorley:<tag> .
# (Cloudflare Pages / GitHub Pages can serve dist/ directly instead.)
FROM oven/bun:1 AS build
WORKDIR /app
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile
COPY . .
RUN bun run build

FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
