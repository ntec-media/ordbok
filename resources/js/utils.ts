import axios from "axios";
import INewWord from "./Interfaces/INewWord";

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

export const newWord = async (values: INewWord) => {
    return await axios
        .post("/word", {
            norwegian: values.norwegian,
            sami: values.sami,
            description: values.description,
            email: values.email,
        })
        .then((res) => {
            return res;
        });
};
