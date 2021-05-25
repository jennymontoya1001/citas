import { AgregarCitas } from './components/AgregarCitas';
import { Provider } from 'react-redux';
import {store} from './store/store';

function App() {
  return (
    <Provider store={store}>
      <div className="container text-center">
        <header><h1>Spa</h1></header>
        <div className="row mt-3">
          <div className="col-md-6">
            < AgregarCitas />
          </div>
          <div className="col-md-6">
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
