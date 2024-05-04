import { BASE_JOB_LIST_URL } from "./urls";

export const getJobList = async (filters = {}, page = 1, limit = 10) => {
    const body = JSON.stringify({
        "limit": limit,
        "offset": page - 1,
        filters
    });

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body
    };

    return fetch(BASE_JOB_LIST_URL, requestOptions)
}