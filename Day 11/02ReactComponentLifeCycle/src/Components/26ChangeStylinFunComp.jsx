import './Style.css';

function StyleComp()
{

    const styleObj ={
        color:"white",
        backgroundColor:"Orange"
    }

    return(
        <>
            <p style={{color:"white" , backgroundColor:"black"}}>Hello World By Inline Styling</p>
            <p style={styleObj}>Hello World By Style Object</p>
            <p className="content">Hello World By External Style </p>
            
        </>
    )
}

export default StyleComp;