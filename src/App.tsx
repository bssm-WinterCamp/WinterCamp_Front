import { BrowserRouter, Routes, Route } from 'react-router-dom'
import GlobalStyles from './styles/GlobalStyles'
import GlobalLayout from './layouts/GlobalLayout'
import HomePage from './pages/home'
import WritePage from './pages/write'
import MyPage from './pages/myPage'
import DetailPage from './pages/detail'
import PostListPage from './pages/postList'
import LoginPage from './pages/login'
import RegisterPage from './pages/register'

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<GlobalLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/detail/:id" element={<DetailPage />} />
            <Route path="/write" element={<WritePage />} />
            <Route path="/work-log" element={<PostListPage />} />
            <Route path="/mypage" element={<MyPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
