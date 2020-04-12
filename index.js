const puppeteer = require('puppeteer-core');

const browser_option = {
    'headless': false,
    'slowMo': 500,
    'executablePath': '/snap/bin/chromium',
    'userDataDir': './user'
};

(async () => {
    const browser = await puppeteer.launch(browser_option)
    const pages = await browser.pages()
    const page = pages[0]
    if ( page ) {
	await page.goto('https://www3.nhk.or.jp/news/catnew.html')
	const titles = await page.$$eval('dd > a', links => links.map(link => link.textContent))
	titles.forEach(title => {
	    console.log(title)
	})
    }
    await browser.close()
})()

