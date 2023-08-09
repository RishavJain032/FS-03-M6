import ColorCard from "./ColorCard";
const Main =(props) =>{
    return(
        <div>
             <div className="main">
      <ColorCard name="PINK" code="#FF6663" color="#FF6663 "/>
      <ColorCard name="GRAY" code="#333333 " color="#333333  "/>
      <ColorCard name='BLACK' code="#000000" color="#000000 "/>
      <ColorCard name="GREEN" code="#38BB14" color="#38BB14 "/>
      <ColorCard name="RED" code="#C90B0B " color="#C90B0B "/>
      <ColorCard name="ORANGE" code="#FF8000" color="#FF8000 "/>
      <ColorCard name="YELLOW" code="#FFF500 " color="#FFF500 "/>
      <ColorCard name="LIGHT GRAY" code="#CCCCCC " color="#CCCCCC  "/>
      <ColorCard name="PURPLE" code="#7E41A2 " color="#7E41A2 "/>
      <ColorCard name="BROWN"  code="#C14911" color="#C14911 "/>
      
    </div>

        </div>
    )
}
export default Main;