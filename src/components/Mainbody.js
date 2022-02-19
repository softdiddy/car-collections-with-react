import React from 'react'
import styled from 'styled-components'
import Section from './Section'
function Mainbody() {
  return (
    <Container>
       <Section 
          title= "Model S"
          description= "Order Online for Touchless Delivery"
          backgroundImg="Car-Background-Designs10.jpg"
          leftbtnText="Custom order"
          rightBtnText="Existing inventory"
       />
        <Section 
          title= "Model A"
          description= "Order Online for Touchless Delivery"
          backgroundImg="2022-tesla-model-3-mmp-1-1640025520.jpg"
          leftbtnText="Custom order"
          rightBtnText="Existing inventory"
       />

      <Section 
          title= "Buy Accessories"
          description= "Order Online for Touchless Delivery"
          backgroundImg="SwivelScreenMountingKitHEROGIFv7_grande.gif"
          leftbtnText="Custom order"
       />


    </Container>
  )
}

export default Mainbody

const Container=styled.div`
  height: 100vh;
`