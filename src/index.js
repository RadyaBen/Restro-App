import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import { store } from './redux/store';
import { RestoServiceContext } from './components/resto-service-context';
import { RestoService } from './services';
import { App } from './pages/app';
import { ErrorBoundary } from './components/error-boundary';

import './index.scss';

const restoService = new RestoService();

ReactDOM.render(
	<Provider store={store}>
		<ErrorBoundary>
			<RestoServiceContext.Provider value={restoService}>
				<Router>
					<App />
				</Router>
			</RestoServiceContext.Provider>
		</ErrorBoundary>
	</Provider>
	, document.getElementById('root'));
