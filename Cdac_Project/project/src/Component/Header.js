import React from "react";
import {CardBody, Card} from "reactstrap";

function Header () {
    return(
        <div>
            <Card className="bg-info">
                <CardBody>
               <h1 style={{fontFamily: 'cursive'}} className="text-center my-0" > <img style={{paddingRight: "3%"}} height="10%" width="10%"  src="/img/logo.png"/> Ride On Rentals 
               </h1>
                </CardBody>
            </Card>
        </div>
    );
}
export default Header;