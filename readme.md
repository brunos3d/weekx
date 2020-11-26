# weekx

[![npm version](https://badge.fury.io/js/weekx.svg)](http://badge.fury.io/js/weekx)
[![npm downloads](https://img.shields.io/npm/dm/weekx.svg)](http://badge.fury.io/js/weekx)
[![Build Status](https://travis-ci.org/BrunoS3D/weekx.svg?branch=main)](https://travis-ci.org/BrunoS3D/weekx)
![Hackage-Deps](https://img.shields.io/hackage-deps/v/weekx)
[![Visitors](https://visitor-badge.glitch.me/badge?page_id=BrunoS3D/weekx)](https://github.com/BrunoS3D/weekx)

> 📦 NODE.JS - Get week number of the current year or given date string format.

## Install

```
$ npm install weekx

# or

$ yarn add weekx
```

## Import

```js
var weekx = require('weekx');

// or

import weekx from 'weekx';
```

## Usage

```js
var weekx = require('weekx');

// Nov, 26 2020
weekx();
//=> 48

weekx('March 24, 2015');
//=> 13

weekx(new Date('March 24, 2015'));
//=> 13

weekx('03/24/2016');
//=> 13

weekx('August 07, 2015');
//=> 32

weekx(new Date('August 07, 2016'));
//=> 33

weekx('02/16/2015');
//=> 8

weekx('September 15, 2126');
//=> 38

weekx('02/17/2012');
//=> 7
```

## API

### weekx(date)

#### date

Type: `Date | string`

The target `date` can be a `string` or `Date`.
