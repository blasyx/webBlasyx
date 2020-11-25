import React from 'react';
import '../styles/contact.css';

const Contact = () => {

    const show = ()=> {

        const art = document.getElementById('art');
        const frontend = document.getElementById('frontend');
        const head = document.getElementById('head');
        const contact = document.getElementById('contact');
        const contactText = document.getElementById('menu_contact_text');

        frontend.classList.toggle('hide');
        head.classList.toggle('hide');
        art.classList.toggle('hide');
        contactText.classList.toggle('menu_contact_text2');
    
        if(frontend.classList.contains('hide')){
          contact.style.overflow = 'visible';
          contact.lastChild.classList.add('menu_contact_background2');
          contact.lastChild.classList.remove('menu_contact_background');
    
        } else{
          contact.style.overflow = 'hidden';
          contact.lastChild.classList.remove('menu_contact_background2');
          contact.lastChild.classList.add('menu_contact_background');
          }
           
    };
      
    return (
        <div className='menu_contact' id='contact' onClick={show}>
            <p className='menu_contact_description' > 
            Contact me for whatever you need.
            </p>
            <p className='contact_info'>mail / blasgarcia.ph@gmail.com <br/> wsp / +49 167 36081296 <br/> ig / @blasyx_</p>
            <h2 className='menu_contact_text' id='menu_contact_text'>CONTACT</h2>
            <div className='menu_contact_background'></div>      
        </div>
    )
}

export default Contact
