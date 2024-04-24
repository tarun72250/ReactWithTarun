import './Style.css';

function StyleComp()
{
    const styleboj={
        
        color:"white",
        background:"black",
    } 
    
    return(<div> 
        <p style={{color:"white",background:"orange"}}>
            Hello World with in Inline Style
        </p>
        <p style={styleboj}>
            Hello World with in Style object
        </p>
        <p className="content"> 
            Hello World with in external Style
        </p>
        <p className="bg-dark text-white">
            Hello World with in Bootstrap class 
        </p>
        <button className='btn btn-primary btn-lg'> Submit</button>
    </div>)
}

export default StyleComp;