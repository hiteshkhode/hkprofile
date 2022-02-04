import './App.css'
import Header from './Components/Header.jsx'
import HeaderCurves from './Components/Headercurves.jsx'
import ProfileImage from './Components/ProfileImage.jsx'
import ProfileStatement from './Components/ProfileStatment'
import ImgStatementBundler from './Components/ImgStatementBundler.jsx'

function App() {
  return (
    <div>
      <Header />
      {/* <HeaderCurves /> */}
      <ImgStatementBundler />
    </div>
  )
}

export default App
