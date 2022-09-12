class HomePage {
	constructor () {
		this.logInButton = driver.findElement(By.linkText("Log in"))
	}
	
	navigateToHomePage() {
		await driver.get("https://www.hudl.com/")
	}
	
	clickLogInButton() {
		await logInButton.click()
	}
}


export default new HomePage()