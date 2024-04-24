//this is also consider as complex components 
export function Image({src , height , width})//Destructuring
{
    return(<img src={src} height={height} width={width}/>)
}

export function DogCard(props)
{

    let message = "this is a Dog Card";

    const img = props.src;
    let h = 300;
    let w = 300;
    
    return(<>
             <h1>{props.name}</h1>
             {/* Valid jsx curlies , always used camelcasing ,  */}
            <h2 style={{fontSize : "10px" , color :"red" }}>{props.message}</h2>     
            {/* valid jsx write */}
            <Image  src={img} height={h} width={w} />
            <Image src={img} height={h} width={w} />
            <Image src={img} height={h} width={w} />
            {/* //because of this we acheved reausibility  */}
        </>)
}
//export default DogCard