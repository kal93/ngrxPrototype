import { Item } from '@jl/core-data';
import { Action } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { DashBoardActionTypes } from './dashboard.actions';

export const initialItems: Item[] = [
  {
    name: 'Cap',
    image:
      'https://drive.google.com/uc?export=view&id=1IENs8fKOYpjeFfPdrHr3mRODYcz1s_gn',
    price: 299.0,
    quantity: 0,
  },
  {
    name: 'Shades',
    image:
      'https://drive.google.com/uc?export=view&id=1BGCosKHSfLmxsm3JzNe_MTcBQ33KieSW',
    price: 1099.0,
    quantity: 0,
  },
  {
    name: 'T-Shirt',
    image:
      'https://drive.google.com/uc?export=view&id=14nELhUsFtf5892K-d_i4wFFzD5Sudg7v',
    price: 799.0,
    quantity: 0,
  },
  {
    name: 'Jeans',
    image:
      'https://drive.google.com/uc?export=view&id=18y944GiqgoOnC5BPOeAQXhMTbIOF9MWo',
    price: 2999.0,
    quantity: 0,
  },
  {
    name: 'Socks',
    image:
      'https://drive.google.com/uc?export=view&id=1XHCNNuoDUnP-Ys0vJ69Nt9477VSIWQo8',
    price: 99.0,
    quantity: 2,
  },
  {
    name: 'Shoe',
    image:
      'https://drive.google.com/uc?export=view&id=1ElqRr2l9WnrboYW6Fou_izgk_XpRh9sU',
    price: 5499.0,
    quantity: 0,
  },
];

const addNewItemToCart = (items, item: Item) => {
  const itemTobeAdded = { ...item, quantity: 1 };
  console.log([...items, itemTobeAdded]);
  return [...items, itemTobeAdded];
};

const removeItemFromCart = (items: Item[], item: Item) => {
  const a = items.filter((i) => i.name !== item.name);
  console.log('....');
  console.log(a);
  return a;
}
const incrementExistingItem = (items: Item[], item: Item) =>
  items.map((i) => {
    return i.name === item.name ? { ...item, quantity: item.quantity + 1 } : i;
  });

const decrementExistingItem = (items: Item[], item: Item) =>
  items.map((i) => {
    return i.name === item.name ? { ...item, quantity: item.quantity - 1 } : i;
  });

const getItemsInCart = (items: Item[]) => {
  return items.filter((item) => item.quantity > 0);
};

const updateItems = (items: Item[], item: Item) =>
  items.map((i) => {
    return i.name === item.name ? { ...item, quantity: 1 } : i;
  });

export interface DashBoardState {
  items: Item[];
  cartItems?: Item[] | null;
}

export const initialState: DashBoardState = {
  items: [],
  cartItems: null,
};

// export interface DashBoardState extends EntityState<Item> {

// }
export function dashBoardReducer(
  state: DashBoardState = initialState,
  action
): DashBoardState {
  switch (action.type) {
    case DashBoardActionTypes.DashBoardItemsLoaded:
      console.log(action.type);
      return {
        items: state.items,
        cartItems: null,
      };
    case DashBoardActionTypes.LoadCartItems:
      return {
        items: state.items,
        cartItems: getItemsInCart(state.items),
      };
    case DashBoardActionTypes.AddNewItemToCart:
      return {
        items: updateItems(state.items, action.payLoad),
        // cartItems: getItemsInCart(state.items),
        cartItems: addNewItemToCart(state.cartItems, action.payLoad),
      };
      case DashBoardActionTypes.RemoveItemFromCart:
      return {
        items: updateItems(state.items, action.payLoad),
        // cartItems: getItemsInCart(state.items),
        cartItems: removeItemFromCart(state.cartItems, action.payLoad),
      };
    case DashBoardActionTypes.IncreaseQty:
      return {
        items: incrementExistingItem(state.items, action.payLoad),
        cartItems: incrementExistingItem(state.cartItems, action.payLoad),
      };
    case DashBoardActionTypes.DecreaseQty:
      return {
        items: decrementExistingItem(state.items, action.payLoad),
        cartItems: decrementExistingItem(state.cartItems, action.payLoad),
      };
    default:
      console.log(action.type);
      console.log('default...');
      return state;
  }
}
