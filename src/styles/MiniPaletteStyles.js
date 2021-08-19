export default  {
    root :{
        backgroundColor:"white",
        border:"1px solid black",
        borderRadius:"5px",
        padding:"0.6rem",
        position:"relative",
        overflow:"hidden",
        cursor:"pointer",
        "&:hover svg":{
            opacity:"1"
        },
        
    },
    colors:{
        background:"grey",
        height:"150px",
        width:"100%",
        borderRadius:"5px",
        overflow:"hidden"
    },
    title:{
        display:"flex",
        justifyContent:"space-between",
        alignItems:"cetner",
        margin:"0",
        color:"black",
        paddingTop:"0.5rem",
        fontSize:"1rem",
        position:"relative"
    },
    emoji:{
        marginLeft:"0.5rem",
        fontSize:"2rem"
    },
    miniColor:{
        height:"25%",
        width:"20%",
        display:"inline-block",
        margin:"0 auto",
        position:"relative",
        marginBottom:"-3.5px"

    },
    delete:{

    },
    deleteIcon:{
        backgroundColor:"red",
        color:"white",
        width:"20px",
        height:"20px",
        position:"absolute",
        right:"0px",
        top:"0px",
        padding:"10px",
        zIndex:"10",
        opacity:"0",
        
    }
}