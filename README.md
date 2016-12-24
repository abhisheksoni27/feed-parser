Feed Parser
===================

It parses a `Atom/RSS` feed and de-clutters the article `objects` to return a simple `array` of articles.

## Installation

```bash
npm install feed-parser --save
```

## Usage

```js
var feedParser = require('feed-parser');

/**It exposes a function called parse.

    @feedURL: The URL of the Atom/RSS feed,
    @callbackFunction: This function will be called with the array of articles after successful execution.

Use a try-catch block to catch for any errors.
*/


try { 
feedParser.parse(feedURL, callbackFunction); 
} catch(error) {
console.log(error)
}
```

## Output

It returns an array of articles which have five entries.

```bash
>[{title:"TITLE OF THE POST",description:"DESCRIPTION OF THE POST",
date:"DATE OF PUBLISHING",image:"IMAGE URL FOR THUMBNAIL",
author:"AUTHOR'S NAME"}, ...//Other entries]
```

## Contributing

1. Clone this repository. 

2. Install required modules.

>```bash
>cd feed-parser
>npm install
>```

-> *Start Hacking.*

Issue a Pull request to the development branch.

Github: [Feed Parser](https://github.com/abhisheksoni27/feed-parser)