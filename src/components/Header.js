import React from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
function Header() {
  return (
    <Container>
       <Logo> <a>TESLA Cars Collection</a></Logo>
        <Manu>
          <a href="">Madel S</a>
          <a href="">Madel 3</a>
          <a href="">Madel X</a>
          <a href="">Madel Y</a>
        </Manu>
        <RightMenu>
          <a href="">Shop</a>
          <a href="">Tesla Account</a>
          <CustomMenu />
        </RightMenu>
    </Container>
  )
}

export default Header

const Container = styled.div`
  min-height:60px;
  position:fixed;
  background-color:black;
  display:flex;
  align-items:center;
  padding: 0 20px;
  top:0;
  left:0;
  right:0;


`

const Manu = styled.div`
  display:flex;
  text-align:center;
  justify-content:center;
  flex:1;
  a{
    font-weight: 600;
    text-transformation:Uppercase;
    padding: 0 10px;
  }
  a{
    color:white;
  }
`

const Logo = styled.div`
  
  a{
    color:white;
    font-weight: 600;
    text-transformation:Uppercase;
    font-size:24px;
  }
`

const RightMenu= styled.div`
  a{
    color:white;
    font-weight: 600;
    text-transformation:Uppercase;
  }
`

const CustomMenu = styled(MenuIcon)`

`