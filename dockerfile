# --- Stage 1: Build the Docusaurus site ---
FROM node:lts-alpine AS builder

WORKDIR /app

# Copy package files first to leverage Docker layer caching
COPY package.json package-lock.json* ./
RUN npm install --frozen-lockfile

# Copy the rest of your repo (docs, scripts, src, etc.)
COPY . .

# Build the static site (output goes to /app/build)
RUN DOCUSAURUS_BASE_URL=/ npm run build

# --- Stage 2: Serve the site with Caddy ---
FROM caddy:2-alpine

# Copy the Caddyfile configuration
COPY caddyfile /etc/caddy/Caddyfile

# Copy the build output from the builder stage to the Caddy web root
COPY --from=builder /app/build /var/www/html

# Expose port 80 for web traffic
EXPOSE 80

# Caddy starts automatically by default in this image