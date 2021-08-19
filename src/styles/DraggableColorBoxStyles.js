const styles= {
    root:{
        width: "20%",
        height: "25vh" ,
        margin: "0 auto",
        display: "inline-block",
        cursor: "pointer",
        position: "relative",
        marginBottom: "-4px",
        "&:hover svg":{
            color:"black",
            transform:"scale(1.5)"
        }
    },
    boxContent: {
        position: "absolute",
        width: "100%",
        left: "0px",
        bottom: "0px",
        padding: "10px",
        color: "black",
        letterSpacing: "1px",
        textTransform: "uppercase",
        fontSize: "15px",
        display:"flex",
        justifyContent:"space-between"
    },
    deleteIcon:{
        color:"white",
        transition:"all 0.3s ease-in-out"
    }
}

export  default  styles;