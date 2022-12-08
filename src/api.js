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

export const getCommentsById = (article_id) => {
    return axios
    .get(`https://long-blue-snapper-robe.cyclic.app/api/articles/${article_id}/comments`)
    .then((res) => {
        return res.data.comments;
    })
}

export const patchVotesById = (article_id, vote) => {
    return newsApi
    .patch(`${article_id}`, { inc_votes: vote})
    .then((res) => {
        return res.data;
    })
}