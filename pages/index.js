import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Fragment } from "react";
import HomeBody from '../component/Body/Home/HomeBody'
import Slider from '../component/Header/Slider/Slider1'

export default function Home() {
  return (
    <Fragment>
    
    <Slider/>
<HomeBody/>
            </Fragment>
  )
}
