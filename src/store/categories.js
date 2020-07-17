let initialState = {
  categories: [
    { name: 'electronics', displayName: 'Elecronics', description: 'electronics' },
    { name: 'food', displayName: 'Food', description: 'food' },
    { name: 'clothing', displayName: 'Clothing', description: 'clothing' },
  ],
  products: [
    { name: 'TV', category: 'electronics', price: 699.00, inStock: 5 },
    { name: 'Radio', category: 'electronics', price: 99.00, inStock: 15 },
    { name: 'Shirt', category: 'clothing', price: 9.00, inStock: 25 },
    { name: 'Socks', category: 'clothing', price: 12.00, inStock: 10 },
    { name: 'Apples', category: 'food', price: .99, inStock: 500 },
    { name: 'Eggs', category: 'food', price: 1.99, inStock: 12 },
    { name: 'Bread', category: 'food', price: 2.39, inStock: 90 },
  ],
  activeCategory: 'food',
};
export default (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
  case 'ACTIVATE':
    state.activeCategory = payload;
    return { categories: state.categories, products: state.products, activeCategory: state.activeCategory };
  default:
    return state;

  }
};


export const activate = (name) => {
  return {
    type: 'ACTIVATE',
    payload: name,
  };
};
