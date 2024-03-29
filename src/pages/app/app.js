import { Route, Switch } from 'react-router-dom';

import { MainPage, CartPage, ItemPage } from '../index';
import { AppHeader } from '../../components/app-header';
import Background from './food-bg.jpg';

const App = () => {

	return (
		<div style={{ background: `url(${Background}) center center/cover no-repeat` }} className='app'>
			<AppHeader total={50} />
			<Switch>
				<Route path='/' exact component={MainPage} />
				<Route path='/cart' exact component={CartPage} />
				<Route path='/:id' component={ItemPage} />
			</Switch>
		</div>
	);
};

export default App;