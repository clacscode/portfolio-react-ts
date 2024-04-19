import './App.css'
import { Header, Navbar, Footer } from './components';
import { HomePage, ProfilePage, ContentPage } from './pages/index'
import { Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Routes>
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/content' element={<ContentPage />} />
        {/* <Route path='/proyects' element={<ProfilePage />} />
        <Route path='/contact' element={<ContactPage />} /> */}
      </Routes>
      <Footer />
    </>
  )
}