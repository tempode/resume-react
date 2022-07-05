import Header from './components/header';
import Left from './components/left';
import Right from './components/right';
import DownloadButton from './components/downloadbutton';
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <div className='main'>
        <Left />
        <Right />
      </div>
      <DownloadButton />
    </div>
  )
}

export default App
