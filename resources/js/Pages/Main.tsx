import React, {useState} from 'react';
import Statistics from '../Pages/Statistics';
import Header from '../Components/Search/Header';
import Menu from '../Components/Search/Menu';
import Layout from '../Components/Shared/Layout';
import App from './App';
import Search from './Search';
import WordSuggestion from './WordSuggestion';
import About from './About';

const Main = () => {
    const [selected, setSelected] = useState(9);
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
            case 4:
                return <About />;
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
