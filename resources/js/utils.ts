import axios from "axios";
import INewWord from "./Interfaces/INewWord";

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
