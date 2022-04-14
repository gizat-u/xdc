import './App.css';

import AppRouter from './components/AppRouter/AppRouter';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
	return (
		<div className="App">
			<Header />
			<AppRouter />
			<Footer />
		</div>
	);
}

export default App;
	