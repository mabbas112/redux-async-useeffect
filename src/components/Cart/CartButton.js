import classes from './CartButton.module.css';
import { useDispatch } from 'react-redux';
import { uiSliceActions } from '../../store/ui-slice';
import { useSelector } from 'react-redux';

const CartButton = (props) => {
  const dispatch = useDispatch();
  const totalQuantity = useSelector(state => state.cart.totalQuantity)

  return (
    <button className={classes.button} onClick={() => dispatch(uiSliceActions.toggleCart())}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
