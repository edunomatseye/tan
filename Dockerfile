# Build stage
FROM node:20-slim as builder

WORKDIR /app

# Copy package files
COPY package.json pnpm-lock.yaml* ./

# Install dependencies
RUN pnpm ci

# Copy source files
COPY . .

# Build the application
RUN pnpm run build

# Production stage
FROM nginx:alpine

# Copy the built assets from builder stage to nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy nginx configuration if you have custom config
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"] 