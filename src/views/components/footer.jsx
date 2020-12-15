import React from "react";
import { Container, Col, Row } from 'reactstrap';

class Footer extends React.Component {

    render() {
        return <>
            <Container>
                <Row>
                    <Col>
                        <a className="color-green" target="_blank" href="https://github.com/laura-san-martin">Laura San Martin</a> - <a className="color-green"  target="_blank" href="https://github.com/laura-san-martin/nata-house-test">https://github.com/laura-san-martin/nata-house-test</a>
                    </Col>
                </Row>
            </Container>
        </>
    }
}

export default Footer;