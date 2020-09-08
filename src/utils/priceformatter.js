export const formatPrice = (price: Number) =>
  Number(price).toFixed(2).replace('.', ',');
