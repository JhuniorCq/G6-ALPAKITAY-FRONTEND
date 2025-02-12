export const quantityOfItems = (listItems) =>
  listItems.reduce((accumulator, product) => accumulator + product.quantity, 0);

export const calculateTotalCost = (shoppingCart) =>
  shoppingCart.reduce(
    (accumulator, product) => accumulator + product.price * product.quantity,
    0
  );
