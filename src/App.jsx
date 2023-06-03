import './App.css'
import Content from './components/Content'
import SideBar from './components/Sidebar'
import Topnavbar from './components/Topnavbar'

function App() {

  return (
    <div className='flex bg-gray-700'>
      <SideBar />
      <Topnavbar />
      <Content />
    </div>
  )
}

export default App
