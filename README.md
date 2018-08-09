# DelayTime
Simple NodeJs module for delaying execution using promise or async-await


## Installation

> npm i delaytime

## Example

    const delaying = require('delaying');
    
    const yourFunction = async () => {
      console.log('First time message');
      await delaying('3000'); // 3000 milliseconds = 3 secs
      console.log('Second time message');
    }

    yourFunction();


# License

MIT 
