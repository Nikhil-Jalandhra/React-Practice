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
    <div className='w-full bg-gray-800 h-screen p-[100px]'>
      <div className='container border m-auto  h-auto px-5 py-7 w-[450px]  border-slate-950 bg-blue-500 rounded-lg'>
    <pre> {JSON.stringify(userInfo, undefined, 2)}</pre>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1 className=' text-[40px] font-semibold ml-[40px]'>Registration Form</h1>
          <div className='ui divider w-[400px] border border-black m-3'></div>
            <div className='ui form flex flex-col items-center'>
              <div className='field flex flex-col'>
                <label className='p-2 text-[20px] font-sans font-semibold'>User Name</label>
                <input type="text" name='username' placeholder='Username' className='w-[400px] rounded-sm px-3 py-2' {...register("userName", {required: true})} />
                {errors.userName && <p className=' text-red-700 pt-1 font-bold' >The User Name is required</p>}
              </div>
              <div className='field flex flex-col'>
                <label className='p-2 text-[20px] font-sans font-semibold'>Email</label>
                <input type="email" name='email' placeholder='Email' className='w-[400px] rounded-sm px-3 py-2'  {...register("Email", {required: true})}/>
                {errors.Email && <p className=' text-red-700 pt-1 font-bold' >The Email is required</p>}
              </div>
              <div className='field flex flex-col'>
                <label className='p-2 text-[20px] font-sans font-semibold'>Password</label>
                <input type="password" name='password' placeholder='Password' className='w-[400px] rounded-sm px-3 py-2' {...register("Password", {required: true})}/>
                {errors.Password && <p className=' text-red-700 pt-1 font-bold' >The Password is required</p>}
              </div>
              <button className='w-[200px] h-[30px] mt-[25px] bg-white  rounded-sm text-25px font-semibold'>Submit</button>
            </div>
        </form>
      </div>
    </div>
    </>
  )
}

export default App
