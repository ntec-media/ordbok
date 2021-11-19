import {trans} from 'matice';
import React from 'react';
import {useCookies} from 'react-cookie';
import {translateLanguagesSupported} from '../../interfaces';
import MultipleSelectModal from '../Modals/MultipleSelectModal';

interface Props {
    open: boolean;
    closeModal: () => void;
}

// Unused component. Can be used in a potential v2
const LanguageTranslationModal = (props: Props) => {
    const [cookies, setCookies] = useCookies(['translang', 'dicts']);

    const updateCookie = (name: 'translang' | 'dicts', items: Object) => {
        setCookies(name, JSON.stringify(items), {path: '/'});
    };

    return (
        <MultipleSelectModal
            open={props.open}
            closeModal={items => {
                updateCookie('translang', items);
                props.closeModal();
            }}
            title={trans('Search.SearchField.langModalHeader')}
            items={cookies.translang || translateLanguagesSupported}
        />
    );
};

export default LanguageTranslationModal;
