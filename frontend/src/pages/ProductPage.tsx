import { useEffect } from 'react'
import { useProductStore } from '../store/useProductStore'

const ProductPage = () => {

    const {products,loading,error,fetchProducts} = useProductStore()

    useEffect(()=>{
        fetchProducts()
    },[fetchProducts])

    console.log(products)

  return (
    <div>ProductPage</div>



  )
}

export default ProductPage


