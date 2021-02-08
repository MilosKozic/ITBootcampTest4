import { useEffect, useState } from "react"
import {getLaunches, Launches,Select} from './service'


const App = () => {
 const[launches,setLaunches]=useState([])
 let all =launches.length-1
 console.log(all)
 const[select,setSelect]=useState(all)
 console.log(select)

 useEffect(()=>{
   getLaunches().then(res=>{
   setLaunches(res.data)})
 },[])


  return (
    <div>
      <Select all={all} select={select} setSelect={setSelect}/>
      <Launches launches={launches.slice(0,select)}/>
    </div>
  )
}
export default App;
