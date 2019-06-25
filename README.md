# object-values-cleaner
A simple script to clean the values of an object.


```
It cleans a given object with the following behaviour
Key   -> sets the values to null
Array -> If Array of Objects: sets array size to 1 and all object keys to null
         If Array of Elements: sets array size to 0
```
## Getting Started
```
# via yarn
yarn add object-values-cleaner

# via npm
npm install --save object-values-cleaner
```

## Usage

```js
// es5
var cleanObject = require('object-values-cleaner')
// es6
import cleanObject from 'object-values-cleaner'

const obj = {
  foo: 'foo',
  bar: 'bar',
}
 
const cleanedObj = cleanObject(obj)

console.log(cleanedObj)

// Should produce the following output
// {
//    foo: null,
//    bar: null,
// }

```
