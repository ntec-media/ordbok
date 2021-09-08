import {trans} from 'matice';
import React, {useContext} from 'react';
import {Context} from '../../Store';
import {localDictsSupported} from '../../interfaces';
import MultipleSelectModal from '../Modals/MultipleSelectModal';

interface Props {
    open: boolean;
    closeModal: () => void;
}

const DictionaryModal = (props: Props) => {
    const [cookies, setCookies] = useContext(Context);

    const updateCookie = (name: string, items: Object) => {
        setCookies(name, JSON.stringify(items), {path: '/'});
    };

    return (
        <MultipleSelectModal
            open={props.open}
            closeModal={items => {
                updateCookie('dicts', items);
                props.closeModal();
            }}
            title={trans('Search.SearchField.dictModalHeader')}
            items={cookies.dicts || localDictsSupported}
        />
    );
};

export default DictionaryModal;