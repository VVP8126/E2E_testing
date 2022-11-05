module.exports = class Page {
    async open(path) {
        await browser.url(`http://localhost:3000/users`);
    }
}
