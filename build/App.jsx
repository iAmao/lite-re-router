import React from 'react';

import Link from '../src/Link';
import Back from '../src/Back';
import Router from '../src/Router';
import Express from './Express';

import Routes from '../src/Routes';


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

export const Index = (props) => {
  return (
    <div style={style.container} >
      <h2>Welcome to Lite Re Router!!!</h2>
      <Link style={style.link} href="/user/5?name=Gin">Gin</Link>
      <Link style={style.link} href="/article/5?title=Route Easy">Route Easy</Link>
      <br/><br />
      <button onClick={() => props.location.push('/about')}>About US</button>
      <button onClick={() => props.location.push('/class')}>Express</button>
    </div>
  );
};

export const Article = (props) => {
  return (
    <div style={style.container} >
      <button onClick={() => props.location.back()}>Back</button>
      <Link style={style.link} href="/user/5?name=Gin">Gin</Link>
      <h2>{props.location.query.title}</h2>
      <p>You are reading article of ID {props.location.params.id}</p>
      <Link style={style.link} href="/article/create">Create new article</Link>
      <Link style={style.link} href={`/article/edit/${props.location.params.id}`}>Edit article</Link>
    </div>
  );
};

export const Create = (props) => {
  return (
    <div style={style.container} >
      <button onClick={() => props.location.back()}>Back</button>
      <Link style={style.link} href="/user/5?name=Gin">Gin</Link>
      <h2>{props.location.query.title}</h2>
      <p>You are creating article</p>
    </div>
  );
};

export const Edit = (props) => {
  return (
    <div style={style.container} >
      <button onClick={() => props.location.back()}>Back</button>
      <Link style={style.link} href="/user/5?name=Gin">Gin</Link>
      <h2>{props.location.query.title}</h2>
      <p>You are editing article of ID {props.location.params.id}</p>
    </div>
  );
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
}

export const App = (props) => {
  return (
    <div>
      <h2 onClick={() => props.push('/')}>Home</h2>
      <Routes routes={(location) => {
        return [
          ['/', Index],
          ['/about', About],
          ['/user/:id', User],
          ['/class', Express],
          ['/article/:id', Article],
          ['/article/create', Create],
          ['/article/edit/:id', Edit],
        ]
      }}/>
    </div>
  );
};

export default () => {
  return (<Router render={App}/>);
};


