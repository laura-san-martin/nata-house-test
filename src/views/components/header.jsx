import React from "react";
import { Container, Col, Row} from 'reactstrap';

class Header extends React.Component {

    render() {
        return <>
            <Container>
                <Row>
                    <Col>
                        <h1>Technical test - nata.house</h1>
                        <h2>Star Wars API - <a href="https://swapi.dev/">https://swapi.dev/</a></h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <nav>
                            <a className="color-green" href="/">Home</a> - <a className="color-green" href="/about">About</a>
                        </nav>
                    </Col>
                </Row>
            </Container>
        </>
    }
}

export default Header;