import {useState} from "react";
import Button from "./Button";


function App() {

  const [color, setColor] = useState("red")

  return (
    <>
    <div className="w-full h-screen duration-200  "
    style = {{backgroundColor: color}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap gap-3 shadow-2xl bg-white px-3 py-2 rounded-2xl">
          <Button colour = "blue" setColour = {setColor} />
          <Button colour = "green" setColour = {setColor} />
          <Button colour = "pink"  setColour = {setColor}/>
          <Button colour = "yellow"  setColour = {setColor}/>
        </div>
      </div>
    </div>
    </>
  )
}

export default App






{/* <div className="w-full h-screen duration-200  "
    style = {{backgroundColor: colour}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap gap-3 shadow-2xl bg-white px-3 py-2 rounded-2xl">
          <button 
          onClick={() => setColour("red")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-2xl"
          style={{backgroundColor: "red"}}
          >Red</button>
          <button 
          onClick={() => setColour("blue")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-2xl"
          style={{backgroundColor: "blue"}}
          >Blue</button>
          <button 
          onClick={() => setColour("yellow")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-2xl"
          style={{backgroundColor: "yellow"}}
          >Yellow</button>
          <button 
          onClick={() => setColour("black")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-2xl"
          style={{backgroundColor: "black"}}
          >Black</button>
          <button 
          onClick={() => setColour("white")}
          className="outline-none px-4 py-1 rounded-full text-black shadow-2xl"
          style={{backgroundColor: "white"}}
          >White</button>
        </div>
      </div>
    </div> */}
