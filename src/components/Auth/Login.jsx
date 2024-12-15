import React, { useState } from 'react'

const Login = () => {

    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")

    const submitHandler=(e)=>{
        e.preventDefault()
        // console.log("email",email)
        // console.log("password",password)

        setemail("")
        setpassword("")

    }

  return (
    <div className='flex items-center justify-center h-screen w-screen'>
        <div className='border-2 border-emerald-600 rounded-xl'>
            <form 
            className='flex flex-col items-center justify-center p-20'
            onSubmit={(e)=>{
                submitHandler(e)
            }}
            >
                <input 
                value={email}
                onChange={(e)=>{
                    setemail(e.target.value)
                    // console.log(e.target.value);
                }}
                required 
                className='border-2 border-emerald-600 rounded-full py-3 px-6 text-xl outline-none bg-transparent placeholder:text-gray-400 font-medium' type="email" placeholder='Enter your Email'
                />
                <input 
                required 
                value={password}
                onChange={(e)=>{
                    setpassword(e.target.value)
                }}
                className='border-2 border-emerald-600 rounded-full py-3 px-6 text-xl outline-none bg-transparent placeholder:text-gray-400 mt-4 font-medium' type="password" placeholder='Enter password' 
                />
                <button className='bg-emerald-600 hover:bg-emerald-700 w-full rounded-full py-3 px-5 text-xl text-white outline-none border-none placeholder:text-white mt-8'>Log in</button>
            </form>
        </div>
    </div>
  )
}

export default Login