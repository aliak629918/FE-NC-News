import axios from "axios";

const newsApi = axios.create({
    baseURL: "https://long-blue-snapper-robe.cyclic.app/api/articles"
})
 export const getAllArticles = (sort_by = "created_at", order = "DESC") => {
    return axios 
    .get("https://long-blue-snapper-robe.cyclic.app/api/articles", {params: {sort_by, order},})
    .then((res) => {
        return res.data
    })
 };

 export const getArticleById = (article_id) => {
    return axios
      .get(`https://long-blue-snapper-robe.cyclic.app/api/articles/${article_id}`)
      .then((res) => {
        return res.data.article;
    });
};