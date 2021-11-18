import axios from "axios"

export const getVideos = () => {
    return axios.get(`${process.env.VUE_APP_API_URL}/applicant-test/`);
}