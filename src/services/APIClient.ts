import axios from "axios";
import { accessToken, baseURL } from "../constants/constants";

export default axios.create({
    baseURL: baseURL,
    headers: {
        Authorization: `Bearer ${accessToken}`,
        Accept: "application/json",
    },
});
