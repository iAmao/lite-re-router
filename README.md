[![CircleCI](https://circleci.com/gh/iAmao/lite-re-router/tree/master.svg?style=svg)](https://circleci.com/gh/iAmao/lite-re-router/tree/master) [![codecov](https://codecov.io/gh/iAmao/lite-re-router/branch/master/graph/badge.svg)](https://codecov.io/gh/iAmao/lite-re-router) [![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/iAmao/lite-re-router/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/iAmao/lite-re-router/?branch=master) [![npm version](https://badge.fury.io/js/lite-re-router.svg)](https://badge.fury.io/js/lite-re-router)



### lite-re-router
A simplistic light routing library for react



#### Getting Started

##### Installing
Open up your terminal and type in the following command
```
$ npm install --save lite-re-router
```

##### Usage

Create a file  `Route.js`(or anything really)
```
import React from 'react';
import { Router, Routes } from 'lite-re-router';


export default () => {
    return (
      <Router render={App}/>
    );
}

const App = () => {
  return (
    <div>
      <h2>Hello</h2>
      <Routes routes={(location) => {
          return [
            ['/', Index],
            ['/about', About],
            ['/article/:id', Article]
          ]
        }}
      />
    </div>
  );
}

const About = () => <h3>About Us</h3>
const Index = () => <h1>This is home</h1>
const Article = (props) =>(
  <h3>You are viewing article of ID {props.location.params.id}</h3>
);

```
