'use client'
import Categories from '@/components/home/categories/categories'
import Slider from '@/components/home/slider/slider'
import styled from 'styled-components'

const Separetor = styled.div`
width: 100%;
height: 50px;
`


export default function Home() {
  return (
    <main>
      <Slider></Slider>
      <Separetor/>
      <Categories></Categories>
    </main>
  )
}
