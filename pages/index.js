import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Fragment } from "react";
import { MenuDesktop } from "../component/Header/MenuDesktop/menuDesktop"
import Slider from '../component/Header/Slider/Slider1'

export default function Home() {
  return (
    <Fragment>
    <MenuDesktop/>
    <Slider/>
            </Fragment>
  )
}
