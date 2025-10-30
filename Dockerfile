# Gunakan image Node.js sebagai base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Salin file package.json dan install dependencies
COPY package.json ./
RUN npm install

# Salin file aplikasi
COPY . .

# Expose port 8080
EXPOSE 8080

# Jalankan server
CMD ["npm", "start"]
