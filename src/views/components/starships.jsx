import React from 'react';
import { onlyNumbers } from "../../logic/helpers";
import { getSpaceShips } from "../../logic/request";
import { Container, Col, Row } from 'reactstrap';


class Starships extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            starships: []
        };
    }


    async componentDidMount() {
        var results = await getSpaceShips();
        this.setState({ starships: results });
    }

    calcMGLT = (distance, mglt, consumables) =>
    {
        if (consumables === "unknown" || mglt === "unknown")
        {
            return consumables;    
        }

        var time2Stop = parseInt(onlyNumbers(consumables));

        if (consumables.indexOf("day") > 0) {
            time2Stop = 24 * time2Stop;
        } else if (consumables.indexOf("week") > 0) {
            time2Stop = 24 * 7 * time2Stop;
        } else if (consumables.indexOf("month") > 0) {
            time2Stop = 24 * 30 * time2Stop;
        } else if (consumables.indexOf("year") > 0) {
            time2Stop = 24 * 30 * 12 * time2Stop;
        }

        var distance2stop = time2Stop * mglt;

        return Math.floor(distance / distance2stop);
    }

    render() {

        return <>
            {
                this.props.distance !== 0 ?
                <div>
                    {
                        this.state.starships.map((starship, index) => {
                            return <p className="color-blue">{ starship.name }: { this.calcMGLT(this.props.distance, starship.MGLT, starship.consumables) }</p>
                        })
                    }
                </div>
                :
                <p className="color-red">Enter a value bigger than 0 to show the results.</p>
            }
        </>
    }
}

export default Starships;