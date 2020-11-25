import React from 'react';
import ReactDOM from 'react-dom';

import './styles/general.css'
import Art from './components/Art';
import Frontend from './components/Frontend';
import Head from './components/Head';
import Contact from './components/Contact';
import Blog from './components/Blog';
/* import './interactions/interaction1'; */


ReactDOM.render(
  <>
  <div className='menu_conteiner'>
    <Art />
    <Frontend />
    <Head />
    <Contact />
    <Blog />
  </div>  
  </>,

document.getElementById('root')
);



