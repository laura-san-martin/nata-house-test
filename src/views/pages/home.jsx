import React from 'react';
import { Container, Col, Row, Input } from 'reactstrap';
import Starships from "../components/starships";

class Home extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            distance: 0
        };
    }
    
    render() {

        return <>
            <Container className="py-5">
                <Row>
                    <Col xs="12">
                        <p>How many stops each ship has to make  to complete a journey of: <Input type="number" onChange={e => this.setState({ distance: e.target.value })} />  Mega Lights (MGLT)</p>
                    </Col>
                    <Col xs="12">
                        <Starships distance={this.state.distance} />
                    </Col>
                </Row>
            </Container>
        </>
    }
}

export default Home;