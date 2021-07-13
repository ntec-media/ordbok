import axios from "axios";

export const search = async (value: string, page: number) => {
    return await axios
        .post("/", {
            search: value,
            page: page,
        })
        .then((res) => {
            return res.data;
        });
};
