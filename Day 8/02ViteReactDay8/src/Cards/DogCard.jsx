import React from 'react'
export function Image({src , height , width})//destructuring
{
    return(<>
        <img src={src} height={height} width={width}/>
    </>)
}


export function DogCard(props) {

    const img = props.src;
    let h = 300;
    let w = 300;
  return (
   <>
        <h1>{props.name}</h1>  
        <h2 style={{fontSize : "10px" ,color : "red"}}>{props.message}</h2>  
        <Image src={img} height={h} width={w}/>
        <Image src={img} height={h} width={w}/>
        {/* Reausibility */ }

   </>
  )
}
