export async function fetchAllProducts() {
  try {
    const response = await fetch('https://dummyjson.com/products');

    if (response.ok) {
      const data = await response.json();

      const products = data.products.map((product) => {
        return {
          id: product.id,
          title: product.title,
          price: product.price,
          img: product.thumbnail,
        };
      });

      return products;
    } else {
      console.error(response.statusText);
    }
  } catch (error) {
    console.error(error);
  }
}
