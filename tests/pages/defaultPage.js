/**
* main page object containing all methods, selectors and functionality (shared across all page objects)
*/

module.exports = class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
   
    open (path) {
        // Base example with login page
        return browser.url(`https://the-internet.herokuapp.com/${path}`);
    }
}
