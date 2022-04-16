import httpService from "./httpService";

export const getProducts = () => {
  return httpService.get(`/products`);
};

export const getProduct = (productId: string | undefined) => {
  return httpService.get(`/products/${productId}`);
};

export const getCategories = () => {
  return httpService.get(`/products/categories`);
};

export const getCategoryProducts = (category: string) => {
  return httpService.get(`/products/category/${category}`);
};
