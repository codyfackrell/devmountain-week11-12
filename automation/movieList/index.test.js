const {Builder, Capabilities, By} = require('selenium-webdriver')
require('chromedriver')
const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://localhost:5500/movieList/index.html')
})

afterAll(async () => {
    await driver.quit()
})

test('crossing off movie', async () => {
    const inputField = await driver.findElement(By.xpath("//input"));
    await inputField.sendKeys("Blades of Glory\n");

    const movieTitle = await driver.findElement(By.xpath('//span'));
    await movieTitle.click();
    const cssValue = await movieTitle.getCssValue('text-decoration');
    expect(cssValue).toContain('line-through')
    await driver.sleep(2000)
})

test('notifications', async () => {
    const message = await driver.findElement(By.id('message')).getText()
    expect(message).toBe('')
    await driver.sleep(2000) 

})


test('deleting movie', async () => {
    const deleteBtn = await driver.findElement(By.xpath('html/body/main/ul/li/button'))
    await deleteBtn.click()
    await driver.sleep(2000)
})