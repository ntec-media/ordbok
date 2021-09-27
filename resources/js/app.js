require('./bootstrap');
import React from 'react';
import {render} from 'react-dom';
import {createInertiaApp} from '@inertiajs/inertia-react';
import {InertiaProgress} from '@inertiajs/progress';
import 'typeface-lobster';

createInertiaApp({
    resolve: name => require(`./Pages/${name}.tsx`),
    setup({el, App, props}) {
        render(<App {...props} />, el);
    },
});

InertiaProgress.init();
