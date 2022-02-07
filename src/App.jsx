import './App.css'
// import './githubprofile.css'
import './animate.css'
import Header from './Components/Header.jsx'
import HeaderCurves from './Components/Headercurves.jsx'
import ProfileImage from './Components/ProfileImage.jsx'
import ProfileStatement from './Components/ProfileStatment'
import ImgStatementBundler from './Components/ImgStatementBundler.jsx'
import Signature from './Components/Signature'
import GithubProfile from './Components/GithubProfile'
import Footer from './Components/Footer.jsx'

function App() {
  return (
    <div className='flex flex-col'>
      <Header />
      {/* <HeaderCurves /> */}
      <ImgStatementBundler />
      {/* <Signature /> */}
      <GithubProfile />
      <Footer />
    </div>
  )
}

export default App
