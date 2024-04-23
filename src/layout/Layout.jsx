import { NavLink, Outlet } from 'react-router-dom'
import { Navbar } from '../components/Navbar/Navbar'
import { Footer } from '../components/Footer/Footer'


export const Layout = () => {

    const links = [
        {name: "Home", link: "home"},
        {name: "About", link: "about"},
        {name: "Gallery", link: "gallery"},
    ];


  return (
    <>
    <Navbar links={links} />
    <Outlet /> 
    <Footer />
    </>
  )
}
