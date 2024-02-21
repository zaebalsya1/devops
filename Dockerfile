FROM node:20

# Создание директории приложения
WORKDIR /usr/src/app

# Установка зависимостей
# Используется символ подстановки для копирования как package.json, так и package-lock.json
COPY package*.json ./

RUN npm install
# Для продакшена используйте npm ci --only=production

# Копирование исходного кода
COPY . .

# Открытие порта, если ваше приложение его использует
EXPOSE 8080

CMD [ "npm", "test" ]
