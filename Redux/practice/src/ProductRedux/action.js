import { Add_Product, Delete_Product } from "./actionType";
// add button
export const AddProduct = (product) => {
  return {
    type: Add_Product,
    payload: product,
  };
};

// delete button
export const DeleteProduct = (id) => {
  return {
    type: Delete_Product,
    payload: id,
  };
};
