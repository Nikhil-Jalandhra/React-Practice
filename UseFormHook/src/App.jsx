import { useState } from 'react'
import { useForm } from 'react-hook-form';

function App() {

  const {register, handleSubmit,
     formState: {errors}, } = useForm();
  const [userInfo, setUserInfo] = useState();
  const onSubmit = (data) =>{
    setUserInfo(data)
    console.log(data);
  }
  
  return (
    <>
    <div className='w-full bg-gray-800 h-screen pt-[100px]'>
      <div className=' m-auto h-auto pb-5 px-5 lg:w-[450px] w-[290px] items-center border-slate-950 bg-blue-500 rounded-lg'>
    <pre> {JSON.stringify(userInfo, undefined, 2)}</pre>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1 className=' lg:text-[40px] text-[25px] font-semibold text-center'>Registration Form</h1>
          <div className='border border-black my-4'></div>
            <div className='flex flex-col items-center'>
              <div className=' flex flex-col'>
                <label className='p-2 lg:text-[20px] text-[16px] font-sans font-semibold'>User Name</label>
                <input type="text" name='username' placeholder='Username' className='lg:w-[400px] rounded-lg lg:px-3 px-2 lg:py-2 py-1 outline-none border-none' {...register("userName", {required: true})} />
                {errors.userName && <p className=' text-red-700 lg:pt-1 text-[15px] font-bold' >The User Name is required</p>}
              </div>
              <div className='field flex flex-col'>
                <label className='p-2 lg:text-[20px] text-[16px] font-sans font-semibold'>Email</label>
                <input type="email" name='email' placeholder='Email' className='lg:w-[400px] rounded-lg lg:px-3 px-2 lg:py-2 py-1 outline-none border-none'  {...register("Email", {required: true})}/>
                {errors.Email && <p className=' text-red-700 lg:pt-1 text-[15px] font-bold' >The Email is required</p>}
              </div>
              <div className='field flex flex-col'>
                <label className='p-2 lg:text-[20px] text-[16px] font-sans font-semibold'>Password</label>
                <input type="password" name='password' placeholder='Password' className='lg:w-[400px] rounded-lg lg:px-3 px-2 lg:py-2 py-1 outline-none border-none' {...register("Password", {required: true})}/>
                {errors.Password && <p className=' text-red-700 lg:pt-1 text-[15px] font-bold' >The Password is required</p>}
              </div>
              <button className='w-[200px] h-[30px] mt-[25px] bg-white  rounded-lg text-25px font-semibold'>Submit</button>
            </div>
        </form>
      </div>
    </div>
    </>
  )
}

export default App
