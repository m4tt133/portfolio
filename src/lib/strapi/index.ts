import axios from "axios";

export function getStrapiURL(path = "") {
    return `${process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337/api"}${path}`;
}

export async function fetchAPI(path: string): Promise<object> {
    const requestUrl = getStrapiURL(path);
    const { data } = await axios.get(requestUrl);
    
    return data;
}