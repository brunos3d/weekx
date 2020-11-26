import test from 'ava';

import weekx from '../src/index';

test('return type is number', (context) => {
    context.is(typeof weekx(), 'number');
    context.is(typeof weekx('03/24/2016'), 'number');
    context.is(typeof weekx(new Date('March 24, 2015')), 'number');
});

test('parse string date to number', (context) => {
    context.is(weekx('March 24, 2015'), 13);
    context.is(weekx('03/24/2016'), 13);
    context.is(weekx('August 07, 2015'), 32);
    context.is(weekx('02/16/2015'), 8);
    context.is(weekx('September 15, 2126'), 38);
    context.is(weekx('02/17/2012'), 7);
});

test('parse Date to number', (context) => {
    context.is(weekx(new Date('March 24, 2015')), 13);
    context.is(weekx(new Date('August 07, 2016')), 33);
});