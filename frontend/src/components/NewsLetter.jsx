import { useRef, useState } from 'react';
import React from 'react'
// import { SMTPClient } from 'emailjs';
import './newsLetter.css'
// import emailjs from '@emailjs/browser';

const NewsLetter = () => {
    
    const [email, setEmail] = useState('')
    const handleChange = (e)=>{
      setEmail(e.target.value)
    }
  
    const handleClick = async()=>{
        alert('You have successfully subscribed')
        // const client = new SMTPClient({
        //     user: 'user',
        //     password: 'password',
        //     host: 'smtp.your-email.com',
        //     ssl: true,
        // });
        
        // try {
        //     const message = await client.sendAsync({
        //         text: 'i hope this works',
        //         from: 'you <username@your-email.com>',
        //         to: 'someone <someone@your-email.com>, another <another@your-email.com>',
        //         cc: 'else <else@your-email.com>',
        //         subject: 'testing emailjs',
        //     });
        //     console.log(message);
        // } catch (err) {
        //     console.error(err);
        // }

        fetch(`http://localhost:3000/subscribe`, {
            "content-Type": 'appplication/json',
            body: email,
        })
        .then((res)=>{
            return res.json()
        })
        .then((res)=>{
            return res
        })
        .catch((err)=>{
            console.log(err);
        })

    }
    
    return (
      <div className="app" >
        <div className='letter'>
            <input className='email__input' type="email" placeholder='Enter your Email' value={email} onChange={handleChange} />
            <button className='subscribe__btn' onClick={handleClick} >Subscribe</button>
        </div>
      </div>
    );
}

export default NewsLetter