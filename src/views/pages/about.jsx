import React from "react";
import { withRouter } from "react-router-dom";
import { Container, Col, Row } from 'reactstrap';

class Default extends React.Component {

    render() {
        return <>
            <Container>
                <Row>
                    <Col>
                    <p>Hello there! </p>
                    <p>This application was made as a technical test for nata.house appliance.</p>
                    <br />
                    <p>It was made using ReactJS, using fetch with promises(async) to call SWAPI.</p>
                    <p>Once de app start is made the API call requesting the starships data, the response is paginated, so while the property ‘nextPage’ is not null, the code will keep fetching for new pages until it gets all the data.</p >
                    <p>After that it is possible to input a number as the desire distance, if this value is bigger than 0, the app will call a function for each starship data to calculate how many stops the ship will make until reach the destination.This calculus is made using the following logic: </p>
                    <ul>
                        <li>First checks if the starship data has a valid numeric value for the properties ‘MGLT’ and ‘consumables’.</li>
                        <li>Next normalize the numeric value form ‘consumables’ to reflect the consume per hour.</li>
                        <li>Then multiply with the MGLT value to get how many hours the ship will go until it needs to resupply.</li>
                        <li>Finally divide the input distance with the number found to get the total stops the ship will need to do until reach its destination. </li>
                    </ul>
                    <br/>
                    <p>I guess that’s all.</p>
                    <p>Thanks everyone :)</p>
                    </Col>
                </Row>
            </Container>
        </>
    }
}

export default withRouter(Default);