// jest-puppeteer.config.js
module.exports = {
  launch: {
    headless: true, // Используйте false, если хотите видеть браузер при тестировании
  },
  browserContext: 'default',
};
