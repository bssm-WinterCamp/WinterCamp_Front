import { BrowserRouter, Routes, Route } from 'react-router-dom'
import GlobalStyles from './styles/GlobalStyles'
import GlobalLayout from './layouts/GlobalLayout'
import HomePage from './pages/home'
import WritePage from './pages/write'
import MyPage from './pages/myPage'
import DetailPage from './pages/detail'
import WorkLogPage from './pages/workLog'
import LoginPage from './pages/login'

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<GlobalLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/detail/:id" element={<DetailPage />} />
            <Route path="/write" element={<WritePage />} />
            <Route path="/work-log" element={<WorkLogPage />} />
            <Route path="/mypage" element={<MyPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
