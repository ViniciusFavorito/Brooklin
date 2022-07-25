export const getProducts: any = async (args: { categoryId?: string }) => {
  const { categoryId = "" } = args ?? {};
  const response = await fetch("./productsCategory.json", {
    headers: {
      Accept: "application/json",
    },
  });

  const { data } = await response.json();

  const products = data.nodes;
  if (categoryId) {
    return products.filter(
      (product: { category: { _id: string } }) =>
        categoryId === product.category._id
    );
  }
  return products;
};
