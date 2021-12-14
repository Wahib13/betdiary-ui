import React from "react";
import Table from 'react-bootstrap/Table'
import { Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import styles from '../styles/Home.module.css';


class TestIndex extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        const bet_rows = this.props.bet_infos.map((bet_info, i) => {
            return (
                <tr key={bet_info._id}>
                    <td>{bet_info.home_team_name}</td>
                    <td>{bet_info.away_team_name}</td>
                    <td>{bet_info.form_difference}</td>

                    <td>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>0</th>
                                    <th>1</th>
                                    <th>2</th>
                                    <th>3</th>
                                    <th>4</th>
                                    <th>5</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{twoDP(bet_info.scoring_probabilities[0])}</td>
                                    <td>{twoDP(bet_info.scoring_probabilities[1])}</td>
                                    <td>{twoDP(bet_info.scoring_probabilities[2])}</td>
                                    <td>{twoDP(bet_info.scoring_probabilities[3])}</td>
                                    <td>{twoDP(bet_info.scoring_probabilities[4])}</td>
                                    <td>{twoDP(bet_info.scoring_probabilities[5])}</td>
                                </tr>
                            </tbody>
                        </Table>
                    </td>

                    <td><Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>0</th>
                                <th>1</th>
                                <th>2</th>
                                <th>3</th>
                                <th>4</th>
                                <th>5</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{twoDP(bet_info.conceding_probabilities[0])}</td>
                                <td>{twoDP(bet_info.conceding_probabilities[1])}</td>
                                <td>{twoDP(bet_info.conceding_probabilities[2])}</td>
                                <td>{twoDP(bet_info.conceding_probabilities[3])}</td>
                                <td>{twoDP(bet_info.conceding_probabilities[4])}</td>
                                <td>{twoDP(bet_info.conceding_probabilities[5])}</td>
                            </tr>
                        </tbody>
                    </Table></td>

                    <td>{bet_info.form_difference > 0 ? `${bet_info.home_team_name} Win` : `${bet_info.away_team_name} Win`}</td>
                    <td></td>
                </tr>
            )
        })
        return (
            <div>
                <Navbar bg="light" variant="light">
                    <Container>
                        <Navbar.Brand href="#home">
                            {/* <img
                                alt=""
                                src="/betdiary.png"
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                            />{' '} */}
                            Bet Diary
                        </Navbar.Brand>
                    </Container>
                </Navbar>
                <div className={styles.main}>
                    <h1>England</h1>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Home Team</th>
                                <th>Away Team</th>
                                <th>Form Difference</th>
                                <th>Goal Probabilities(Home)</th>
                                <th>Goal Probabilities(Away)</th>
                                <th>Prediction</th>
                                <th>Outcome</th>
                            </tr>
                        </thead>
                        <tbody>
                            {bet_rows}

                        </tbody>
                    </Table>
                </div>
            </div>
        )
    }
}

function twoDP(bet_info_probability) {
    if (bet_info_probability)
        return Math.round(bet_info_probability * 1000) / 1000
    return '-'
}

export default TestIndex;