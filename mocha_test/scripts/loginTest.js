const {By, Key, Builder} = require("selenium-webdriver")
const data = require('../data.json')
require("chromedriver")
import { HomePage } from 'path/to/home/page/object/file'
import { LogInPage } from 'path/to/login/page/object/file'
import { HomeDashboardPage } from 'path/to/homedashboard/page/object/file'

const homePage = new HomePage
const loginPage = new LogInPage
const homeDashboardPage = new HomeDashboardPage
 

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
   	homePage.navigateToHomePage()
		homePage.clickLogInButton()
		logInPage.logIn(data.email, data.password)
		homeDashboardPage.verifyHomeDashboardURL()
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
      await driver.findElement(By.id('email')).sendKeys('!@#$%^&*')
      await driver.findElement(By.id('password')).sendKeys('!@#$%^&*', Key.RETURN)
      await driver.sleep(500)
      await driver.findElement(By.css("[data-qa-id='error-display']"))
    })

    it('can select login with organization', async () => {
      await driver.get("https://hudl.com/login")
      await driver.findElement(By.css("[data-qa-id='log-in-with-organization-btn']")).click()
    })
  })
})