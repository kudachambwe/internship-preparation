import React from 'react';
import NavbarComponent from "./components/navbar/NavbarComponent";
import MainContent from "./components/maincontent/MainContent";
import PageHeader from "./components/pageheader/PageHeader";
import FooterComponent from "./components/footer/FooterComponent";


class App extends React.Component {
    render() {
        return (

            <div className="container">

                <NavbarComponent/>

                <PageHeader/>

                <MainContent/>

                <FooterComponent/>

            </div>

        )
    }

}


export default App;

