import {Button, TextField} from '@material-ui/core';
import {trans} from 'matice';
import React, {useState} from 'react';
import INewWord from '../../Interfaces/INewWord';
import {newWord} from '../../utils';

const Form = (props: {result: (status: number) => void}) => {
    const [data, setData] = useState<INewWord>({
        norwegian: null,
        sami: null,
        description: undefined,
        email: undefined,
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const submit = async () => {
        setIsSubmitting(true);
        if (data.norwegian === null || data.norwegian === '') {
            setData({...data, norwegian: ''});
        } else if (data.sami === null || data.sami === '') {
            setData({...data, sami: ''});
        } else {
            const res = await newWord(data);
            props.result(res.status);
        }
        setIsSubmitting(false);
    };

    const update = (
        e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
    ) => setData({...data, [e.target.id]: e.target.value});

    return (
        <div>
            <form className="flex flex-col mx-2 mt-0 space-y-6 md:mt-8 md:ml-8 ">
                <label className="sr-only" htmlFor="norwegian">
                    {trans('WordSuggestion.norwegian')}
                </label>
                <TextField
                    required
                    error={data.norwegian === ''}
                    id="norwegian"
                    label={trans('WordSuggestion.norwegian')}
                    variant="outlined"
                    onChange={e => update(e)}
                />
                <label className="sr-only" htmlFor="sami">
                    {trans('WordSuggestion.sami')}
                </label>
                <TextField
                    required
                    error={data.sami === ''}
                    id="sami"
                    label={trans('WordSuggestion.sami')}
                    variant="outlined"
                    onChange={e => update(e)}
                />
                <label className="sr-only" htmlFor="description">
                    {trans('WordSuggestion.description')}
                </label>
                <TextField
                    id="description"
                    multiline
                    rows={3}
                    label={trans('WordSuggestion.description')}
                    variant="outlined"
                    onChange={e => update(e)}
                />
                <label className="sr-only" htmlFor="email">
                    {trans('WordSuggestion.email')}
                </label>
                <TextField
                    id="email"
                    label={trans('WordSuggestion.email')}
                    variant="outlined"
                    onChange={e => update(e)}
                />
                <Button
                    className="h-12"
                    color="primary"
                    disabled={isSubmitting}
                    variant="contained"
                    onClick={submit}
                >
                    {trans('WordSuggestion.btnText')}
                </Button>
            </form>
        </div>
    );
};

export default Form;
