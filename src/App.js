import './App.css';
import Header from './components/Header/Header';
import MainPage from './components/MainPage/MainPage';
//CONTEXT-API
import DataContextProvider from './context/DataContext';

function App() {
  return (
    <DataContextProvider>
      <div className="App">
        <Header />
        <MainPage />
      </div>
    </DataContextProvider>
  );
}

export default App;
