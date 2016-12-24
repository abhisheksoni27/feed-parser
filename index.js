exports.parse = function(feedUrl, callback) {
    const feedParser = require('feedparser'),
        request = require('request');

    if (feedUrl === null || feedUrl === '') {
        throw new Error('Invalid Feed URL. Exiting.');
    }
    if (callback === null || callback === '' || typeof callback !== 'function') {
        throw new Error('No CallBack Provided. Exiting.');
    }

    var itemsObject = {
        items: [],
        getItems: function() {
            return this.items;
        }
    };

    var req = request(feedUrl),
        feedparser = new FeedParser();

    req.on('error', function(error) {
        // handle any request errors
        throw new Error(error);
    });
    req.on('response', function(res) {
        var stream = this;

        if (res.statusCode != 200) return this.emit('error', new Error('Bad status code'));

        stream.pipe(feedparser);
    });

    req.on('end', function() {
        readNow(itemsObject.getItems());
    });

    feedparser.on('error', function(error) {
        // always handle errors 
        throw new Error(error);
    });
    feedparser.on('readable', function() {
        // This is where the action is! 
        var item;
        while (this.read()) {
            item = this.read();
            itemsObject.getItems().push(item);
        }
    });

    function readNow(items) {
        const propertiesINeed = ['title', 'author', 'date', 'description', 'image'];

        items = items.map((oneItem) => {

            for (let keys in oneItem) {

                if (propertiesINeed.indexOf(keys) === -1) {
                    delete oneItem[keys];
                }

                if (keys === 'description') {
                    let match = oneItem.description.match(/href=(.+?[\.jpg|\.gif|\.png]')/);
                    if (match !== null) {
                        oneItem['image'] = match[1];
                    }
                }
            }
            return oneItem;

        });
        callback(items);
    }

};
