import { categories } from "../../../data";

export const fetchCategories = (id) => {
    return new Promise((res) => setTimeout(() => res(categories), 500))
}