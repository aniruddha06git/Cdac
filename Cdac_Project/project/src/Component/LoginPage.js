import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Login from './Login';
import NavbarHome from './NavbarHome';

class LoginPage extends React.Component{
    render(){
        return(
            <div style={{backgroundColor: "skyblue"}}>
                <Header />
                <NavbarHome />
                <Login />
                <Footer />
            </div>

        );
    }
     

}
export default LoginPage;