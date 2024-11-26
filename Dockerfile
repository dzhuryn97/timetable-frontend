FROM node:18-alpine AS build
ARG API_URL
# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project to the container
COPY . .
ENV REACT_APP_API_URL=${API_URL}
# Build the React app
RUN npm run build

# Use Nginx to serve the app
FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
