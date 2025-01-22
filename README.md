# Build the image

docker build -t tan-app .

# Run the container

docker run -p 80:80 tan-app
