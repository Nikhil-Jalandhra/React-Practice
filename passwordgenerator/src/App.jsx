import { useState, useCallback, useEffect, useRef } from 'react'
function App() {
  const [lenght, setLenght] = useState(8);
  const [numberAllowed , setNumberAllowed] = useState(false);
  const [charAllowed , setCharAllowed] = useState(false);
  let [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "123456789" ;
    if (charAllowed) str += "!@#$%^&*!@#$%^&*" ;

    for (let i = 1; i <= lenght; i++) {
      let char = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(char);

    }

    setPassword(pass);

  }, [lenght, numberAllowed, charAllowed, setPassword])

  const copyPasswordToClipBoard = useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])

  
  useEffect(() => {
    passwordGenerator();
  }, [lenght, numberAllowed, charAllowed]);



  return (
    <>
    <div className="w-2/4 mx-w-md mx-auto shadow-md rounded-lg px-8 py-3 my-8 text-orange-500 bg-gray-500 ">

      <h1 className=' text-white text-center my-3 text-2xl' >Password Generator</h1>

          <div className="flex shadow rounded-lg overflow-hidden mb-4 w-4/5 m-auto">

            <input type="text" 
            value={password} 
            placeholder='Password' 
            readOnly className=' outline-none w-full px-3 py-3' 
            ref={passwordRef}
            />

            <button onClick={copyPasswordToClipBoard} className='px-4 py-0.5 shrink-0 outline-none bg-blue-700 text-white'>Copy</button>

          </div>

      <div className="flex text-sm gap-x-2 mx-auto w-4/5">
          <div className="flex items-center gap-x-3 text-lg">
              <input
                type="range" 
                min={8} max={100} 
                value={lenght} 
                className=' cursor-pointer' 
                onChange={(e)=>{setLenght(e.target.value)}} 
              />
              <label>Lenght: {lenght} </label>
          </div>
          <div className="flex items-center gap-x-3 text-lg">
              <input 
                type="checkbox" 
                defaultChecked={numberAllowed} 
                id='numberInput' 
                onChange={
                  ()=>{setNumberAllowed((prev) => !prev)}} 
              />
              <label>Numbers</label>
          </div>
          <div className="flex items-center gap-x-3 text-lg">
              <input 
                type="checkbox" 
                defaultChecked={charAllowed} 
                id='numberInput' 
                onChange={
                  ()=>{setCharAllowed((prev) => !prev)}} 
              />
              <label>Character</label>
          </div>
      </div>


    </div>
    </>
  )
}
 
export default App
