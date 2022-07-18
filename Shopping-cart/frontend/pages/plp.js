import Head from 'next/head'
import Categories from '../components/Categories'
import Products from '../components/Products'

export default function Plp() {
  return (
    <>
      <Head>
        <title>PLP</title>
      </Head>

      <div className="container mx-auto">
      <div className="flex">
      <Categories />
      <Products />
      </div>
      </div>
    </>
  )
}
