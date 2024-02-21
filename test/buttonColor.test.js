describe('Проверка цветов кнопок', () => {
  beforeAll(async () => {
    //await page.goto('file:///C:/Users/Albert/Documents/DevOps_project/index.html');
    await page.goto('http://localhost:8080/index.html');



  });

  it('Красная кнопка имеет правильный цвет', async () => {
    const color = await page.$eval('#redButton', e => getComputedStyle(e).backgroundColor);
    expect(color).toBe('rgb(255, 0, 0)'); // или 'red', в зависимости от браузера
  });

  it('Синяя кнопка имеет правильный цвет', async () => {
    const color = await page.$eval('#blueButton', e => getComputedStyle(e).backgroundColor);
    expect(color).toBe('rgb(0, 0, 255)'); // или 'blue', в зависимости от браузера
  });
});
