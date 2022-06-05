import React from 'react'
import { MenuDesktop } from '../Header/MenuDesktop/menuDesktop'
import {Footer} from '../Body/Home/Footer/FooterUn/Footer'

export default function Container({children}) {
  return (
    <>
    <MenuDesktop/>
    {children}
    <Footer/>
    </>
  )
}
