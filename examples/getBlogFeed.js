var feedBlogger = require('../index.js');
const feedURL = 'https://blanketcoffee.blogspot.in/atom.xml';
var callbackFunction = function(data) {
    //data You have the DATA now. Use it.
};
try {
    feedBlogger.parseBlog(feedURL, callbackFunction);
} catch (error) {
    throw new Error(error);
}
