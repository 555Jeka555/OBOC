docker build -t game-2024 .
docker run --name game-2024-1 -d -p 8081:8080 game-2024
docker run --name game-2024-2 -d -p 8082:8080 game-2024
pause