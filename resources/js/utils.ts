// es-lint-disable-next-line
import axios from 'axios';
import INewWord from './Interfaces/INewWord';

export const week = async () => {
    return await axios
        .get('/api/statistic/week')
        .then(res => {
            return res.data;
        })
        .catch(err => {
            console.error(err);
            return err;
        });
};

export const month = async () => {
    return await axios
        .get('/api/statistic/month')
        .then(res => {
            return res.data;
        })
        .catch(err => {
            console.error(err);
            return err;
        });
};

export const year = async () => {
    return await axios
        .get('/api/statistic/year')
        .then(res => {
            return res.data;
        })
        .catch(err => {
            console.error(err);
            return err;
        });
};

export const newWord = async (values: INewWord) => {
    return await axios
        .post('/api/word', {
            norwegian: values.norwegian,
            sami: values.sami,
            description: values.description,
            email: values.email,
        })
        .then(res => {
            return res;
        });
};
