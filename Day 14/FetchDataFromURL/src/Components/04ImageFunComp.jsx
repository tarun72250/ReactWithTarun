import pic from "../Images/img2.jpg"

function ImageFunComp()
{
    let h =300;
    let w =300;
    return(
        <>
            <h1>Hello From Fun Image Comp</h1>
            <img src={pic} height={h} width={w}/>
        </>
    )
}

export default ImageFunComp;