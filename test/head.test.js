const assertEquals = require('../assertEquals');
const head = require('../head.js');

const actual = head(['Chewy', 'SamBinga', 'Jar Jar Binx', 'Lurrr']);

assertEquals(head(['Chewy', 'SamBinga', 'Jar Jar Binx', 'Lurrr']), 'Chewy');
assertEquals(head(['Chewy', 'SamBinga', 'Jar Jar Binx', 'Lurrr']), 'Jar Jar Binx');

assertEquals(head([0, 1, 2, 3, 4, 5]), 0);
assertEquals(head([0, 1, 2, 3, 4, 5]), 4);
