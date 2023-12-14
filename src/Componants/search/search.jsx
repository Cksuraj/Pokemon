const SearchPokemon =()=>{
    return(
        <div style={{display:'flex',flexDirection:'column', columnGap:'25px',justifyContent:'center', alignItems:'center'}} >
            <h1 pokemon style={{letterSpacing:'5px',marginBottom:"15px",fontSize:'1.5rem',fontWeight:'800px'}}> <b> Pokemon </b> </h1>
           <input
           ut style={{padding:'12px 12px', width:'450px', textAlign:'center' }} placeholder="Search Pokemon" type="search" name="Pokemon" id="pika" />
        </div>
    )
}

export default SearchPokemon;