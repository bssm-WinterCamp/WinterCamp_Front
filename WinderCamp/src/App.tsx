import { BrowserRouter, Routes, Route } from 'react-router-dom'
import GlobalLayout from './layouts/GlobalLayout'
import HomePage from './pages/home'
import PostListPage from './pages/PostListPage'
import WritePage from './pages/WritePage'
import MyPage from './pages/MyPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<GlobalLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/posts" element={<PostListPage />} />
          <Route path="/write" element={<WritePage />} />
          <Route path="/mypage" element={<MyPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
