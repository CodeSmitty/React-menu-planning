import React, {useState} from "react";

function Header(props) {

  const [menu, setMenu] = useState(
    {menu:true}
  )

  const menuFunction = () =>{
    menu.menu = false ;
    console.log(menu)
  }


  return (
    <div className="header">
      <h1 className="beans">
        Beans &
        <br />
        Cornbread
      </h1>
      <button onClick={menuFunction} type='submit'>menu</button>
    </div>
  );
}

export default Header;
