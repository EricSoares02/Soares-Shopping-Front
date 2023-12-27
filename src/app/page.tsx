'use client'
import Categories from '@/components/home/categories/categories'
import Products from '@/components/home/product/product'
import Slider from '@/components/home/slider/slider'
import { useProductsRequest } from '@/hooks/hookForHome/useRequestToHome'
import Load from '@/utils/loading/loading'
import styled from 'styled-components'

const Separetor = styled.div`
width: 100%;
height: 50px;
`


export default function Home() {

  const {data, isLoading} = useProductsRequest()
  
  return isLoading ? (<main><Load/></main>) : (
    <main>
      <Slider></Slider>
      <Separetor/>
      <Categories></Categories>
      {Products(data?.data)}
    </main>
  )
}
