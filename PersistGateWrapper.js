import React from 'react';
import { Provider } from 'react-redux';
import App from './App'
import { PersistGate } from 'redux-persist/es/integration/react'
import configureStore from './Redux/configureStore'
const { persistor, store } = configureStore();

const onBeforeLift = () => {
	// take some action before the gate lifts
}

class PersistGateWrapper extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<PersistGate
					loading={null}
					onBeforeLift={onBeforeLift}
					persistor={persistor}>
					<App store={store} />
				</PersistGate>
			</Provider>
		);
	}
}

export default PersistGateWrapper;