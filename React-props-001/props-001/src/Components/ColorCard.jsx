const ColorCard = (props) =>{
    const a=`${props.color}`
   
  return (
    <div className="maincont">
        <div className="card">
        <div style={{height:"60%", width:"100%", backgroundColor:a}}>

        </div>
        <div style={{margin:"10px"}}>
        <h2> {props.code}</h2>
        <h3 style={{marginTop:"-20px", color:a}}>{props.name}</h3>
        </div>
    </div>
    </div>
  )   
       
}
export default ColorCard