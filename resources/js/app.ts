require("./bootstrap");

import React from "react";
import { render } from "react-dom";
import { createInertiaApp } from "@inertiajs/inertia-react";
import { InertiaProgress } from "@inertiajs/progress";

createInertiaApp({
    resolve: (name) => require(`./Components/${name}.tsx`),
    setup({ el, App, props }) {
        render(<App {...props} />, el);
    },
});

InertiaProgress.init();