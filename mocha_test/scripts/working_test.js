const {By, Key, Builder} = require("selenium-webdriver")
require("chromedriver")

describe('Login', async () =>{
  let driver

  describe('successful login', () => {
    beforeEach( async () => {
      driver = await new Builder().forBrowser("chrome").build();
    })

    afterEach( async () => {
      await driver.quit()
    })
    
    it('login with email and password', async () => {
      await driver.get("https://www.hudl.com/")
      // to select login button
      await driver.findElement(By.linkText("Log in")).click()
       
      // Fill email field. 
       await driver.findElement(By.id('email')).sendKeys('aleksandr.singer@gmail.com')
      // Fill password field.
       await driver.findElement(By.id('password')).sendKeys('Hudlpass1')
      // wait for new page to load and check url
       do {
        await driver.sleep(500)
       } while ( await driver.getCurrentUrl() != 'https://www.hudl.com/home')
    })

    it('login without email and password', async () => {
      await driver.get("https://hudl.com/login")
      await driver.findElement(By.id('logIn')).click()
      // insert assert for error message
      await driver.findElement(By.css("[data-qa-id='error-display']"))
    })

    it('select forgot password', async () => {
      await driver.get("https://hudl.com/login")
      // select need help button
      await driver.findElement(By.linkText('Need help?')).click()
      // check for forgot password submit button
      await driver.findElement(By.css("[data-qa-id='password-reset-submit-btn']"))
    })

    it('use special characters', async () =>{
      await driver.get("https://hudl.com/login")
      // fill in email with special characters
      await driver.findElement(By.id('email')).sendKeys('!@#$%^&*')
      // fill in password with special characters
      await driver.findElement(By.id('password')).sendKeys('!@#$%^&*', Key.RETURN)
      await driver.sleep(500)
      // check for error message
      await driver.findElement(By.css("[data-qa-id='error-display']"))
    })

    it('can select login with organization', async () => {
      await driver.get("https://hudl.com/login")
      // select login with organization button.
      await driver.findElement(By.css("[data-qa-id='log-in-with-organization-btn']")).click()
    })
  })
})