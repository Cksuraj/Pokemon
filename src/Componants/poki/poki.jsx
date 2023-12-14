function Poki({name , image}){
    return(
        <div style={{height:'350px',width:'200px'}}>
        <div style={{letterSpacing:'8px' , fontWeight:'800px'}}>{name}</div> 
        <div> <img src={image} style={{height:'200px'}}/> </div> 
        </div>
    )
}

export default Poki;