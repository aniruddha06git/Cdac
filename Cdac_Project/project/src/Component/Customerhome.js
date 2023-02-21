import React from 'react';
import Customerprofile from './Customerprofile';
import Footer from './Footer';
import Header from './Header';

class Customerhome extends React.Component{
    render(){
        return(
            <div style={{height: '100%', width: '100%'}}>
                    <Header />
                    <Customerprofile />
                    <Footer />
            </div>

        );
    }
     

}
export default Customerhome;