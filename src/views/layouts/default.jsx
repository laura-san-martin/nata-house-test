import React from "react";
import { withRouter } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";

class Default extends React.Component {

    render() {
        return <>
                <Header/>
            <this.props.Component {...this.props} />
            <Footer />
            </>
    }
}

export default withRouter(Default);