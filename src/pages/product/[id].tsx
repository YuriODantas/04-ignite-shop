import { useRouter } from 'next/router'
import React from 'react'
import { ImageContainer, ProductContainer, ProductDetails } from '../../styles/pages/product'

export default function Product() {
  const { query } = useRouter()

  return (
    <ProductContainer>
      <ImageContainer>

      </ImageContainer>

      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>R$ 79.90</span>

        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae, fugiat ipsam? Iste mollitia unde aut sit optio. Velit dolor magni ea nemo, rem iusto non, excepturi tempore nisi deserunt optio.</p>

        <button>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  )
}
