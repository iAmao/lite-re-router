[![CircleCI](https://circleci.com/gh/iAmao/lite-re-router/tree/master.svg?style=svg)](https://circleci.com/gh/iAmao/lite-re-router/tree/master) [![codecov](https://codecov.io/gh/iAmao/lite-re-router/branch/master/graph/badge.svg)](https://codecov.io/gh/iAmao/lite-re-router) [![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/iAmao/lite-re-router/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/iAmao/lite-re-router/?branch=master) [![npm version](https://badge.fury.io/js/lite-re-router.svg)](https://badge.fury.io/js/lite-re-router)



### lite-re-router
A simplistic light routing library for react



#### Getting Started

##### Installation
Open up your terminal and type in the following command
```
$ npm install --save lite-re-router
```

##### Usage

Create a file  `Route.js`(or anything really)
```
import React from 'react';
import { Router, Routes } from 'lite-re-router';

import { Index } from './Index';
import { About } from './About';
import { Article } from './Article';
import { User } from './User';


export default () => {
    return (
      <Router render={App}/>
    );
}

const App = (props) => {
  return (
    <div>
      <h2 onClick={() => props.push('/')}>Home</h2>
      <Routes routes={(location) => {
        return [
          ['/', Index],
          ['/about', About],
          ['/article/:id', Article],
          ['/user/:id', User]
        ]
      }}/>
    </div>
  );
};
```

`Index.js`
```
import React from 'react';


const style = {
  link: {
    color: 'green',
    padding: 5,
    textDecoration: 'underline'
  },
  container: {
    textAlign: 'center'
  }
};


export const Index = (props) => {
  return (
    <div style={style.container} >
      <h2>Welcome to Lite Re Router!!!</h2>
      <Link style={style.link} href="/user/5?name=Gin">Gin</Link>
      <Link style={style.link} href="/article/5?title=Route Easy">Route Easy</Link>
      <br/><br />
      <button onClick={() => props.location.push('/about')}>About US</button>
    </div>
  );
};

```

`About.js`
```
import React from 'react';


const style = {
  link: {
    color: 'green',
    padding: 5,
    textDecoration: 'underline'
  },
  container: {
    textAlign: 'center'
  }
};


export const About = (props) => {
  return (
    <div style={style.container} >
      <h2>Just route easy :)</h2>
      <Link style={style.link} href="/user/5?name=Gin">Gin</Link>
      <Link style={style.link} href="/article/5?title=Route Easy">Route Easy</Link>
      <br/><br />
      <button onClick={() => props.location.back()}>Back</button>
    </div>
  );
};

```

`Article.js`
```
import React from 'react';


const style = {
  link: {
    color: 'green',
    padding: 5,
    textDecoration: 'underline'
  },
  container: {
    textAlign: 'center'
  }
};


export const Article = (props) => {
  return (
    <div style={style.container} >
      <button onClick={() => props.location.back()}>Back</button>
      <Link style={style.link} href="/user/5?name=Gin">Gin</Link>
      <h2>{props.location.query.title}</h2>
      <p>You are reading article of ID {props.location.params.id}</p>
    </div>
  );
};
```

`User.js`
```
import React from 'react';


const style = {
  link: {
    color: 'green',
    padding: 5,
    textDecoration: 'underline'
  },
  container: {
    textAlign: 'center'
  }
};


export const User = (props) => {
  return (
    <div style={style.container} >
      <Back style={style.link}>Back</Back>
      <Link style={style.link} href="/article/5?title=Route Easy">Route Easy</Link>
      <h2>Name: {props.location.query.name}</h2>
      <p>My id is {props.location.params.id}</p>
    </div>
  );
};

```

#### Components

##### Router
Main parent component in which the section of your app that requires routing resides.

###### Props

| Name   |                                                        Description                                                        | Type | Default | Required |
| ------ |:-------------------------------------------------------------------------------------------------------------------------:| ----:| ------- | -------- |
| render | Function returning the immediate child component of the Router component. The first argument to it is the location object | func | null    | True     |

###### Example
```
import Router from 'lite-re-router/Router';
// or import { Router } from 'lite-re-router';


<Router render={(location) => {
    console.log(location);
    /**
      Location object
     {
       push: func // Programmatically navigate to another page
       back: func // Programmatically return to previous page
       path: string // current page path
       query: object // query strings in path
     }
    */

    return (
        <div>
          <h4 onClick={() => location.push('/page-2')}>Programmatically navigate to another page</h4>
          <h4> current url is {location.path}/h4>
          <h4 onClick={() => location.back()}>Programmatically navigate to previous page</h4>
        </div>
    )
  }}
/>
```

##### Routes
Main parent component in which the section of your app that requires routing resides.

###### Props

| Name   |                                                        Description                                                        | Type | Default | Required |
| ------ |:-------------------------------------------------------------------------------------------------------------------------:| ----:| ------- | -------- |
| routes | A function that returns an array of arrays containing the list of routes and their corresponding Component. | func | null    | True     |

###### Example
```
import Routes from 'lite-re-router/Routes';
// or import { Routes } from 'lite-re-router';


<Routes routes={(path) => {
  /**
    path: string // current page's path
  */
  return [
    // [route, Component]
    ['/', Index],
    ['/about', About],
    ['/article/:id', Article],
    ['/user/:id', (props) => {
      console.log(props);
      /**
        props:
          {
            location: {
              path: string, // current page's path
              query: object, // queries in the url
              params: object, // dynamic url's parameters
              push: func, // Programmatically navigate to another page
              back: func // Programmatically return to a previous page
            }
          }
      */
      return <User {...props} />
    }]
  ]
}}/>
```

##### Link
Extension of the anchor tag. For navigating within your application.

###### Props
Same props as the `anchor` tag

###### Example

```
import Link from 'lite-re-router/Link';
// or import { Link } from 'lite-re-router';


<Link href="/about">About us</Link>
```


##### Back
Extension of the anchor tag. For returning to a previous page within your application.

###### Props
Same props as the `anchor` tag, excluding the href.

###### Example

```
import Back from 'lite-re-router/Back';
// or import { Back } from 'lite-re-router';


<Back>Go back</Back>
```
