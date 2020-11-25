import React from 'react';
import '../styles/general.css';
import '../styles/frontend.css';

const frontend = () => {

    const show = ()=> {

        const art = document.getElementById('art');
        const frontend = document.getElementById('frontend');
        const head = document.getElementById('head');
        const contact = document.getElementById('contact');
    
        
        art.classList.toggle('hide');
        head.classList.toggle('hide');
        contact.classList.toggle('hide');
        frontend.firstChild.classList.toggle('menu_frontend_text2')
    
        if(art.classList.contains('hide')){
          frontend.style.overflow = 'visible';
          frontend.lastChild.classList.add('menu_frontend_background2');
          frontend.lastChild.classList.remove('menu_frontend_background');
    
        } else{
            frontend.style.overflow = 'hidden';
            frontend.lastChild.classList.remove('menu_frontend_background2');
            frontend.lastChild.classList.add('menu_frontend_background');
          }
        }
    return (
        <div className='menu_frontend' id='frontend' onClick={show} >
            <h2 className='menu_frontend_text'>FRONTEND <br/> DEVELOPER</h2>  
            <p className='menu_frontend_description'> 
            I do frontend development, here you can see my latest work.
            </p>
            <div className='menu_frontend_circle'></div>
            <div className='menu_frontend_background'></div> 
        </div>
    )

}

export default frontend;
