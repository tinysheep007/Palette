export default  {
    root :{
        backgroundColor:"blue",
        height:"250vh",
        display:"flex",
        alignItems:"flex-start",
        justifyContent:"center"

    },
    container :{
        width:"50%",
        display:"flex",
        flexDirection:"column",
        alignItems:"flex-start",
        flexWrap:"wrap",
    },
    nav:{
        color:"white",
        display:"flex",
        width:"100%",
        justifyContent:"space-between"
    },
    palettes:{
        boxSizing:"border-box",
        width:"100%",
        display:"grid",
        gridTemplateColumns:"repeat(3,30%)",
        gridGap:"5%"
    }
}
