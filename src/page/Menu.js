import React from 'react'
import MenuImage from './menu/MenuImage'
import Food from "../page/menu/Menulink"
import HeaderImage from '../Component/HeaderImage'



function Menu() {
  return (
    <>
   <HeaderImage page="MENU"/>
   
<div className='box'>
    <div className='container'>
        <div className='row'>

          {Food.map(function rr(e){
            return(
              <MenuImage id={e.id}  src={e.src} name={e.name}  />
            )
          })}
           
          {/* <MenuImage  src={Food[0].src} name={Food[0].name}  />
        <MenuImage src="https://i.pinimg.com/736x/dc/03/7a/dc037a83805ec7639e51e8462adec7b6.jpg" name="Def"/>
        <MenuImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJO-mZINU86lwbiJ-9yyEXBGfdV0ndKaYOEjAo2tqc6biYrcK1I5lNwNwWyChYhGAzBX4&usqp=CAU" name="Ghi"/>
        <MenuImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4PJwADXxHJfCT2bhHv69V-nL89NpiMaYPPA&usqp=CAU" name="Jkln"/>
        <MenuImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYC6NJHpIPlKd2050vh5_v7byt2gBD7h2-mg&usqp=CAU" name="Mno"/>
        <MenuImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWw5vhGacBAbg1VGcdNUS_d7dxc5arFHUsdw&usqp=CAU" name="Pqr"/>
        <MenuImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqzV7g_xDhqt76AKz2QQ_9af-fnnAMwGxpPA&usqp=CAU" name="Stu"/>
        <MenuImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkgQ0I5ulvW1T8kz6x9Q2gxfULlnzoWV0W6g&usqp=CAU" name="Vwx"/>
        <MenuImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZIU2pASUzHRyQ8Np5_BWNaJ4A7FPDJxtY9w&usqp=CAU" name="Yzr"/>
        */}
        </div>
    </div>

</div>
  
    </>
  )
}

export default Menu