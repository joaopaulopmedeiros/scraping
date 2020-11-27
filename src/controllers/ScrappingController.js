const puppeteer = require('puppeteer');

module.exports = {
    index(req, res) {
        return res.render("index.html");
    },

    async search(req, res) {

        try {
            const { url } = req.body;

            const browser = await puppeteer.launch();
            const page = await browser.newPage();

            await page.goto(url);
            
            const path = 'public/images/example.png';

            await page.screenshot({path});
          
            await browser.close();
            
            return res.redirect(`/images/example.png`);
        } catch (error) {
            console.log(error)
        }
    }
}