import { useState } from "react"
import pic from "../Images/img2.jpg";
function ImageCheckFunComp()
{

    const[flag , setFlag] = useState(false);
        return(
            <>
                <img src={pic} style={{display:flag?"block":"none"}}/>

                <input type="checkbox" name="nm" checked={flag} onChange={(e)=>setFlag(e.target.checked)}/>
                <br/>
                {flag.toString()}
            </>
        )
}
export default ImageCheckFunComp