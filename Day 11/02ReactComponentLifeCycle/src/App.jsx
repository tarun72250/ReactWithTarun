import { DogCard } from "./Cards/DogCard"

function App() {


  //using spread operator
  //{...obj}
  const obj ={
    name:"Alex",
    message :"Hello from Alex",
    src:"https://media.istockphoto.com/id/1193591781/photo/obedient-dog-breed-welsh-corgi-pembroke-sitting-and-smiles-on-a-white-background-not-isolate.jpg?s=612x612&w=0&k=20&c=ZDKTgSFQFG9QvuDziGsnt55kvQoqJtIhrmVRkpYqxtQ="
  }
  return (
    <>
    <DogCard {...obj} />
        <DogCard name="Bruno" message="HelloFrom Bruno" src="https://media.istockphoto.com/id/1193591781/photo/obedient-dog-breed-welsh-corgi-pembroke-sitting-and-smiles-on-a-white-background-not-isolate.jpg?s=612x612&w=0&k=20&c=ZDKTgSFQFG9QvuDziGsnt55kvQoqJtIhrmVRkpYqxtQ="/>
    </>
  )
}


export default App
