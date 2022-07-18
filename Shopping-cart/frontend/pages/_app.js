import { Provider as ReduxProvider, useSelector } from 'react-redux';
import { store } from '../store';
import Footer from '../components/Footer'
import Header from '../components/Header'
import Cart from '../components/Cart'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  return (
    <>
      <ReduxProvider store={store}>
        <Header />
        <Component {...pageProps} />
        <CartComponent />
        <Footer />
      </ReduxProvider>
    </>
  )
}

const CartComponent = () => {
  const { isCartOpen } = useSelector(state => state.cart)
  return (
    <>
      {isCartOpen && <Cart />}
    </>
  )
}

export default MyApp
