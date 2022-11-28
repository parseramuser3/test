import ProductController from "./dist/ProductController";
import CategoryController from "./dist/CategoryController";

// This module is intended to unwrap Axios default export as named.
// Keep top-level export same with static properties
// so that it can keep same with es module or cjs
const Controllers = { ProductController, CategoryController };

export { Controllers as default, ProductController, CategoryController };
