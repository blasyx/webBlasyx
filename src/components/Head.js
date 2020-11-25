import React from 'react';

import '../styles/head.css';


const Head = () => {

    const show = ()=> {

        const art = document.getElementById('art');
        const frontend = document.getElementById('frontend');
        const head = document.getElementById('head');
        const contact = document.getElementById('contact');
        const headText = document.getElementById('menu_head_text');
        const headDesc = document.getElementById('menu_head_description');
        const blog = document.getElementById('blog');
        

        frontend.classList.toggle('hide');
        contact.classList.toggle('hide');
        art.classList.toggle('hide');
        headText.classList.toggle('menu_head_text2');
        headDesc.classList.toggle('menu_head_description2');
        blog.classList.toggle('show_blog')
    
        if(frontend.classList.contains('hide')){
          head.style.overflow = 'visible';
          head.lastChild.classList.add('menu_head_background2');
          head.lastChild.classList.remove('menu_head_background');
    
        } else{
          head.style.overflow = 'hidden';
          head.lastChild.classList.remove('menu_head_background2');
          head.lastChild.classList.add('menu_head_background');
          }
           
    };

    return (
        <div className='menu_head' id='head' onClick={show}>
        <p className='menu_head_description' id='menu_head_description'> 
        Writings that I have in my mind.
         </p>
         <h2 className='menu_head_text' id='menu_head_text'>MY HEAD</h2> 
         <div className='menu_head_background'></div>     
        </div>
    )
}

export default Head;
