import {
    CATEGORY_ID,
    SITE_ID,
    trendsUrl,
    searchByNameUrl
} from "../globals/apiPaths.js";


export class CategoryService {

    trends;

    async getTrendsByCategory() {
        const trends = await fetch(trendsUrl(SITE_ID, CATEGORY_ID));
        return await trends.json();
    }

    async seachByName(name) {
        const product = await fetch(searchByNameUrl(SITE_ID, name));
        return await product.json();
    }

    async getRandomTrendProducts(trends) {
        // TODO asignar un rango aleatorio del 0 al 49
        const slicedTrends = trends.slice(0, 9);
        const products = await Promise.all(
            slicedTrends.map(trend => this.seachByName(trend.keyword))
        );
        return await products.json();
    }

}

const data = new CategoryService();

data.getTrendsByCategory().then(trends => {
    data.trends = trends
    console.log(data.trends)
    data.seachByName(data.trends[0].keyword)
        .then(product => data.getRandomTrendProducts(data.trends)).then(console.log)
});
