class LogInPage {
	constructor () {
		this.emailTextBox = driver.findElement(By.id('email'))
		this.passwordTextBox = driver.findElement(By.id('password'))
		this.logInButton = driver.findElement(By.id('logIn'))
	}
	
	logIn(email, password) {
		await emailTextBox.sendKeys(email)
		await passwordTextBox = .sendKeys(password)
		await logInButton.click()
	}
}


export default new LogInPage()