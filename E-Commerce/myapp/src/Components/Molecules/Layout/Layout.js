import Header from "../../Organisms/Header/Header";
import Footer from "../../Organisms/Footer/Footer";
import Carousel from "../../atoms/Carousel";
import React from "react";
function Layout(props){
    return(
       <>
         <Header />
         <Carousel/>
         {props.children}
        <Footer />
       </>
    )
}
export default Layout;