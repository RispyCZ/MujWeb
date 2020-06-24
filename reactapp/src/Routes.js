import React, { Suspense } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Home from './Pages/Home/Home';
import Rules from './Pages/Rules/Rules';
import Faq from './Pages/Faq/Faq';
import About from './Pages/About/About';
import AdminTeam from './Pages/AdminTeam/AdminTeam';
import Wiki from './Pages/Wiki/Wiki';
//import Contact from './Pages/Contact/Contact';

function Routes() {
    return (
        <>
            <Router>
                <div>
                    <Switch>
                        <Route path="/faq">
                            <Suspense fallback="Načítám obsah...">
                                <Faq />
                            </Suspense>
                        </Route>
                        <Route path="/pravidla">
                            <Suspense fallback="Načítám obsah...">
                                <Rules />
                            </Suspense>
                        </Route>
                        <Route path="/onas">
                            <Suspense fallback="Načítám obsah...">
                                <About />
                            </Suspense>
                        </Route>
                        <Route path="/wiki">
                            <Suspense fallback="Načítám obsah...">
                                <Wiki />
                            </Suspense>
                        </Route>
                        <Route path="/adminteam">
                            <Suspense fallback="Načítám obsah...">
                                <AdminTeam />
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