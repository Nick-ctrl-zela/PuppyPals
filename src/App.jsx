import { useState } from 'react'
import './App.css'


import { puppyList } from './data.js'
console.log(puppyList);

function App() {
  const [puppies, setPuppies] = useState(puppyList)
  const [featPupId, setFeatPupId] = useState(null)

  // function handleClick() {
  //   // some logic here
  // }

  const featuredPup = puppies.find((pup)=> pup.id === featPupId)

  console.log("puppyList: ", puppyList);
 return (
    <>
    <h1><span>&#161;</span>Puppy Pals al rescate!</h1>
      <div className="App">
        <div className="puppyNames">
    {puppies.map((puppy) => {
        return <p onClick={()=>{ setFeatPupId(puppy.id)}} key={puppy.id}>{puppy.name}</p>
      })
      
    }
    </div>
    <div className="onClick">
    {featPupId && (
        <div>
          <h2>{featuredPup.name}</h2>
          <ul>
          <li>Age: {featuredPup.age}</li>
          <li>Email: {featuredPup.email}</li>
          <li>ID: {featPupId}</li>
          </ul>
          </div>
      )}
      </div>
      </div>


     
    </>
 )
}

export default App;
 