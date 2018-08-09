# DelayTime
Simple NodeJs module for delaying execution using promise or async-await


## Installation

> npm i delaytime

## Example

    const delay = require('delaytime');
    
    const yourFunction = async () => {
      console.log('First time message');
      await delay('3000'); // 3000 milliseconds = 3 secs
      console.log('Second time message');
    }

    yourFunction();


# License

MIT 
