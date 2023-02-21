import React from 'react';
import Adminprofile from './Adminprofile';
import Footer from './Footer';
import Header from './Header';

class Adminhome extends React.Component{
    render(){
        return(
            <div style={{height: '100%', width: '100%'}}>
                    <Header />
                    <Adminprofile />
                    <Footer />
            </div>

        );
    }
     

}
export default Adminhome;