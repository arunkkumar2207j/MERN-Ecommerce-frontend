import React from 'react'
import ProductDetail from '../features/product-list/components/ProductDetail'
import NavBar from '../features/navbar/Navbar'

export default function ProductDetailPage() {
  return (
    <div>
        <NavBar>
            <ProductDetail />
        </NavBar>
    </div>
)
}
