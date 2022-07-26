import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector, useDispatch } from 'react-redux';
import { Fragment, useEffect } from 'react';
import Notification from './components/UI/Notification'
import { sendToCart } from './store/cart-slice'

let isInitial = true;


function App() {

  const cartIsVisible = useSelector(state => state.ui.cartIsVisible);
  const cart = useSelector(state => state.cart)
  const notification = useSelector(state => state.ui.notification);
  const dispatch = useDispatch();

  useEffect(
    () => {
      if (isInitial) {
        isInitial = false;
        return
      }

      dispatch(sendToCart(cart));

    }, [cart, dispatch]
  )


  return (
    <Fragment>
      {notification && <Notification
        status={notification.status}
        title={notification.title}
        message={notification.message}
      />}
      <Layout>
        {cartIsVisible && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
