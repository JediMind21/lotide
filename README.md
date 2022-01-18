# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @brandon.dahlberg21/lotide`

**Require it:**

`const _ = require('@brandon.dahlberg21/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `assertEqual(...)`: asserts that the actual and expected results are equal.
- `asserArraysEqual(...)`: same as assertEqual but for testing if arrays are equal.
- `assertObjectsEqual(...)`: same as assertEqual and assertArraysEqual, used for testing if objects are equal.
- `countLetters(...)`: takes a string as input and returns an object with each letter that occurs in the string as the key and the number of times that letter occurs as the value.
- `countOnly(...)`: Takes in an array and an object and returns an object. The input object specifies what values to count in array if the value of that key is set true. The output objects keys are the items of the input object which had a value of true and the number of times the values occured in the array.
- `eqArrays(...)`: Used for checking equality of arrays. Will return false if arrays are not equal. Will return true if arrays are equal.
- `eqObjects(...)`: Used for checking equality of Objects. Will return false if objects are not equal. Will return true if objects are equal.
- `find(...)`: takes in an object as first argument and a callback as the second argument. It should loop over the object and return the first key for which the callback returns a truthy value. If the object doesn't have the specified key, it will return undefined.
- `findKeyByValue(...)`: Takes in an object as the first argument and a value as a second and returns the key associated with the value specified by the second argument.
- `head(...)`: Takes in an array and returns the zeroth index.
- `letterPositions(...)`: Takes in a string and creates an object with each letter as an object key. The value of each key is an array of the index of each time the letter occured in the string.
- `map(...)`: Takes in an array as first argument and a callback function as the second. It loops through the original array and operates on the values with the callback function and pushes the new values to a new array.
- `middle(...)`: Retruns an array which holds the middle two values of the original array if the original array has an even number of items. If the number of items in the original array is odd, it returns an array holding the middle value.
- `tail(...)`: Returns an array with all but the zeroth index of the original array.
- `takeUntil(...)`: Takes in an array as first argument. The second argument specifies where the new array stops. The returned array has the values of the original array up until a specific value, specified by the second argument.

- `without(...)`: Takes in array as first argument and another array for the second argument. It returns a new array which is the first array but without the items in the second array.
-
