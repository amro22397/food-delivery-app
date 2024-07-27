"use client"

import Image from 'next/image'
import React, { useState } from 'react'

const page = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [creatingUser, setCreatingUser] = useState(false);
    const [userCreated, setUserCreated] = useState(false);

    const handleFormSubmit = async (ev) => {
        ev.preventDefault();
        setCreatingUser(true);
        await fetch('/api/register', {
            method: 'POST',
            body: JSON.stringify({email, password}),
            headers: {'Content-Type': 'application/json'},
        });
        setCreatingUser(false)
    }
    
      return (
    <section className="mt-8">
        <h1 className="text-center text-red-600 text-4xl
        mb-4">Register</h1>
            <form onSubmit={handleFormSubmit} 
            className='block max-w-xs mx-auto'>
                <input type="email" placeholder='email' value={email}
                disabled={creatingUser}
                onChange={ev => setEmail(ev.target.value)} />
                <input type="password" placeholder='password' value={password}
                disabled={creatingUser}
                onChange={ev => setPassword(ev.target.value)}/>
                <button type='submit'>Register</button>

                <div className="my-4 text-center text-gray-500">
                    or login with provider
                </div>
                <button className='flex gap-3 justify-center items-center'>
                    <Image src={'/google.png'} alt={''}
                    width={20} height={20} /> 
                    Login with google
                </button>
            </form>

    </section>
  )
}

export default page
