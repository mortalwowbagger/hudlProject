class HomeDashboardPage {
	
	verifyHomeDashboardURL() {
		do {
        await driver.sleep(500)
       } while ( await driver.getCurrentUrl() == 'https://www.hudl.com/home')
	}
}


export default new HomeDashboardPage()