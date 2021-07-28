import { ProductsService } from "../services/Products.js";
const categories = document.getElementById('categories');
const productsService = new ProductsService();

const setCategoriesList = async () => {
    let {categories} = await productsService.getCategories();
    console.log(categories);
    categories.forEach((item, index) => {
        setCategories(item);
    });
}
setCategoriesList();

const setCategories = (category) => {
    categories.innerHTML +=
        `
        <li><a class="dropdown-item" href="#" id="${category.id}">${category.description_}</a></li>
        <li><hr class="dropdown-divider"></li>
        `;
}

