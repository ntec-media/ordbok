import React, {useState} from 'react';
import Statistics from './Statistics';
import Header from '../Components/Search/Header';
import Menu from '../Components/Search/Menu';
import Layout from '../Components/Shared/Layout';
import App from './App';
import Search from './Search';
import WordSuggestion from './WordSuggestion';

const Main = () => {
    const [selected, setSelected] = useState(0);
    const [searching, setSearching] = useState(false);

    const getContent = () => {
        switch (selected) {
            default:
                return (
                    <Search
                        input={newInput =>
                            newInput !== '' && setSearching(true)
                        }
                    />
                );
            case 1:
                return <WordSuggestion />;
            case 2:
                return <Statistics />;
            case 3:
                return <App />;
        }
    };

    return (
        <Layout>
            <Header searching={searching} />
            <Menu setSelected={newSelected => setSelected(newSelected)} />
            {getContent()}
        </Layout>
    );
};

export default Main;
