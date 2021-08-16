export default  {
    "Navbar": {
        justifyContent: "flex-start",
        display: "flex",
        alignItems: "center",
        height: "6vh"
    },
    
    "logo" :{
        marginRight: "15px",
        padding: "0 15px",
        fontSize: "25px",
        background: "#ece6",
        fontFamily: "'Times New Roman', Times, serif",
        height: "100%",
        display: "flex",
        alignItems: "center",
        textDecoration: "none"
    },
    "logoLink": {
        textDecoration: "none"
    },
    
    "slider": {
        width:"350px",
        margin: "0 10px",
        display: "inline-block",
        "& .rc-slider-track":{
            backgroundColor: "transparent"
        },
        "& .rc-slider-rail":{
            height: "10px"
        },
        "& .rc-slider-handle:active, .rc-slider-handle:hover":{
            backgroundColor: "blueviolet",
            outline: "none",
            border:"3px solid green",
            boxShadow: "none",
            width: "15px"
        }
    },
    "selectContainer":{
        marginLeft: "auto",
        marginRight: "2rem"
    }
}