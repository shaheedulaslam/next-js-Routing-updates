import { GetStaticPropsContext } from 'next'
import React from 'react'

const AboutUs = ({result}:any)=> {
    console.log(result);
    
  return (
    <div className='text-center text-2xl'>
    <h1>Hi...</h1>
    <p>I'm aboutus page</p>
</div>
  )
}


export async function getStaticProps(context:GetStaticPropsContext){
    const products = await fetch("https://fakestoreapi.com/carts")
    const result = await products.json()
    return {
        props: {
            result
        },
    }
}

export default AboutUs