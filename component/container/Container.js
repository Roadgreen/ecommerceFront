import React from 'react'
import { MenuDesktop } from '../Header/MenuDesktop/menuDesktop'

export default function Container({children}) {
  return (
    <>
    <MenuDesktop/>
    {children}
    </>
  )
}
