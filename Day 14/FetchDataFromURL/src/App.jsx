import { DogCard } from "./Cards/01DogCard"

function App() {

//using for spread operators
//{...obj}
  const obj ={
    name:"Alex",
    src :"https://media.istockphoto.com/id/1193591781/photo/obedient-dog-breed-welsh-corgi-pembroke-sitting-and-smiles-on-a-white-background-not-isolate.jpg?s=612x612&w=0&k=20&c=ZDKTgSFQFG9QvuDziGsnt55kvQoqJtIhrmVRkpYqxtQ=" , message:"Hello From Alex"
  }

  return (
    <>
       This is from App Component show Dogs Images. 
       <DogCard {...obj} />
       <DogCard  name="bruno" src="https://media.istockphoto.com/id/1193591781/photo/obedient-dog-breed-welsh-corgi-pembroke-sitting-and-smiles-on-a-white-background-not-isolate.jpg?s=612x612&w=0&k=20&c=ZDKTgSFQFG9QvuDziGsnt55kvQoqJtIhrmVRkpYqxtQ=" message="Hello From Alex"></DogCard>
    </>
    //2 DogCard available from this component using one as spread operator 
  )
}
export default App
