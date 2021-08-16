import Characters from './components/Characters';
import Header from './components/Headers';

import './main.scss';
import './components/Headers.css'

function App () {
  
  return (
    <div className="">
      <Header
        title='Rick and Morty API'
        content='Application that shows the characters of the famous Rick and Morty series'
      />

      <Characters />
    </div>
  )
}

export default App;