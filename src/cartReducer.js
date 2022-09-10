export default function cartReducer(cart, action) {
  switch (action.type) {
    case 'empty':
      return [];
    case 'updateQuantity': {
      //add curly brace to scope quantity and sku
      const { quantity, sku } = action;
      if (quantity === 0) {
        return cart.filter((i) => i.sku !== sku);
      }
      return cart.map((i) => (i.sku === sku ? { ...i, quantity } : i));
    }
    case 'add':
      const { id, sku } = action;
      const itemInCart = cart.find((i) => i.sku === sku);
      if (itemInCart) {
        //return new array with the matching item replaced
        return cart.map((i) =>
          i.sku === sku ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        // return new array with the new item appended
        return [...cart, { id, sku, quantity: 1 }];
      }

    default:
      throw new Error('Unhandled action ' + action.type);
  }
}
