import { Item } from '@jl/core-data';
import { Action } from '@ngrx/store';

const initialItems: Item[] = [
  {
    name: 'Cap',
    image:
      'https://drive.google.com/uc?export=view&id=1IENs8fKOYpjeFfPdrHr3mRODYcz1s_gn',
    price: 299.0,
  },
  {
    name: 'Shades',
    image:
      'https://drive.google.com/uc?export=view&id=1BGCosKHSfLmxsm3JzNe_MTcBQ33KieSW',
    price: 1099.0,
  },
  {
    name: 'T-Shirt',
    image:
      'https://drive.google.com/uc?export=view&id=14nELhUsFtf5892K-d_i4wFFzD5Sudg7v',
    price: 799.0,
  },
  {
    name: 'Jeans',
    image:
      'https://drive.google.com/uc?export=view&id=18y944GiqgoOnC5BPOeAQXhMTbIOF9MWo',
    price: 2999.0,
  },
  {
    name: 'Socks',
    image:
      'https://drive.google.com/uc?export=view&id=1XHCNNuoDUnP-Ys0vJ69Nt9477VSIWQo8',
    price: 99.0,
  },
  {
    name: 'Shoe',
    image:
      'https://drive.google.com/uc?export=view&id=1ElqRr2l9WnrboYW6Fou_izgk_XpRh9sU',
    price: 5499.0,
  },
];

const addNewItem = (items, item) => [...items, item];
const incrementExistingItem = (items: Item[], item: Item) =>
  items.map((i) => {
    return i.name === item.name
      ? Object.assign({},item.quantity + 1, item)
      : item;
  });

const decrementExistingItem = (items: Item[], item: Item) =>
  items.map((i) => {
    return i.name === item.name
      ? Object.assign({}, item, item.quantity - 1)
      : item;
  });

export interface DashBoardState {
  items: Item[];
  currentItem?: string | null;
}

export const initialState: DashBoardState = {
  items: initialItems,
  currentItem: null,
};
export function dashBoardReducer(
  state: DashBoardState = initialState,
  action
): DashBoardState {
  switch (action.type) {
    case 'addNewItemToCart':
      return {
        items: addNewItem(state.items, action.payLoad),
        currentItem : null
      };
    case 'incrementQty':
        return {
            items: incrementExistingItem(state.items, action.payLoad),
            currentItem : null
          };
    case 'decrementQty':
        return {
            items: decrementExistingItem(state.items, action.payLoad),
            currentItem : null
          };
    default:
        console.log('default...');
      return state;
  }
}
