import axios from "axios";

export const search = async (value: string, page: number) => {
    return await axios
        .post("/api/search", {
            search: value,
            page: page,
        })
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            console.error(err);
            return err;
        });
};

export const week = async () => {
    return await axios
        .post("/api/statistic/week")
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            console.error(err);
            return err;
        });
};
