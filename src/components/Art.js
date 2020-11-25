import React from 'react';
import '../styles/art.css';




function Art() {
  
  const show = ()=> {

    const art = document.getElementById('art');
    const frontend = document.getElementById('frontend');
    const head = document.getElementById('head');
    const contact = document.getElementById('contact');

    
    frontend.classList.toggle('hide');
    head.classList.toggle('hide');
    contact.classList.toggle('hide');
    art.firstChild.classList.toggle('menu_art_text2')

    if(frontend.classList.contains('hide')){
      art.style.overflow = 'visible';
      art.lastChild.classList.add('menu_art_background2');
      art.lastChild.classList.remove('menu_art_background');

    } else{
      art.style.overflow = 'hidden';
      art.lastChild.classList.remove('menu_art_background2');
      art.lastChild.classList.add('menu_art_background');
      }
       
};
  
  return (
    
    <div className='menu_art' id='art' onClick={show} >
        <h2 className='menu_art_text'>FINE <br/> ART</h2>
        <p className='menu_art_description'> 
        I'm fine artist and here you can see my works.
        </p>
        <a className='gallery' href="https://instagram.com/" target='_blank' >GO</a>
        <div className='menu_art_background'></div>
        </div>
      
      )
        }

      
      export default Art;