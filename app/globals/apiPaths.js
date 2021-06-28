const baseUrl = 'https://api.mercadolibre.com';

export const SITE_ID = 'MLM'

export const CATEGORY_ID = 'MLM1648';

export const trendsUrl = (SITE_ID, CATEGORY_ID) => `${baseUrl}/trends/${SITE_ID}/${CATEGORY_ID}`;

export const searchByNameUrl = (SITE_ID, NAME) => `${baseUrl}/sites/${SITE_ID}/search?q=${NAME}`;