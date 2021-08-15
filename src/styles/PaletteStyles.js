export default {
    Palette : {
        height: "100vh",
        display: "flex",
        flexDirection: "column"
    },
    PaletteColors :{
        height: "90%"
    },
    PaletteFooter :{
        height: "5vh",
        display: "flex",
        justifyContent: "flex-end",
        backgroundColor: "aquamarine",
        fontWeight: "bold",
        alignItems: "center"
    },
    emoji :{
        margin:"0 1rem",
        fontSize: "1.5rem"
    },
    goBack:{
        width: "20%",
        height:  "50%",
        margin: "0 auto",
        display: "inline-block",
        cursor: "pointer",
        position: "relative",
        marginBottom: "-4px",
        opacity:"1",
        backgroundColor:"black",
        "& Link":{
            color: "white",
            width: "100px",
            height: "30px",
            position: "absolute",
            display: "inline-block",
            top: "50%",
            bottom: "50%",
            textAlign: "center",
            outline: "none",
            background: "black",
            fontSize: "1rem",
            lineHeight: "30px",
            marginLeft: "-50px",
            marginTop: "-15px",
            color:"aliceblue",
            textTransform: "uppercase",
            textDecoration: "none",
            
        }
    }

}