import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
const App = React.lazy(() => import ("./App"));

function Index()
{
    return (
        <div>
            <Suspense fallback="Načítám">
              <App/>
            </Suspense> 
        </div>
    );
}

ReactDOM.render(<Index/>, document.getElementById("app"));