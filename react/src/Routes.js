import React, { Suspense } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import Link from 'react-router-dom/Link';
import About from './Pages/About';
import Home from './Pages/Home';
import Projects from './Pages/Projects';

function Routes() {
    return (
        <>
            <Router>
                <div>
                    <Switch>
                        <Route path="/projekty">
                            <Suspense fallback="Načítám obsah...">
                                <Projects />
                            </Suspense>
                        </Route>
                        <Route path="/ome">
                            <Suspense fallback="Načítám obsah...">
                                <About />
                            </Suspense>
                        </Route>
                        <Route path="/">
                            <Suspense fallback="Načítám obsah...">
                                <Home />
                            </Suspense>
                        </Route>

                    </Switch>
                </div>
            </Router>
        </>
    )
}
export default Routes;