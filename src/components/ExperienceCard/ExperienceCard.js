import React, { useState } from 'react';
import { Button, Card, Modal } from 'react-bootstrap';
import { ImageHolder } from '..';
import * as Asset from "../../assets"
import styles from "./ExperienceCard.module.css";

const assets = {
    "Brynga": <ImageHolder primarySource={Asset.BryngaLogo} secondarySource={Asset.FallbackBryngaLogo} alt="Brynga" className={`card-img ${styles.image}`} />,
    "Ao4": <ImageHolder primarySource={Asset.Ao4Logo} secondarySource={Asset.FallbackBryngaLogo} alt="Ao4" className={`card-img ${styles.image}`} />,
    "Nutrimais": <ImageHolder primarySource={Asset.NutrimaisLogo} secondarySource={Asset.FallbackBryngaLogo} alt="Nutrimais" className={`card-img ${styles.image}`} />,
    "Poty": <ImageHolder primarySource={Asset.PotyLogo} secondarySource={Asset.FallbackBryngaLogo} alt="Poty" className={`card-img ${styles.image}`} />,
    "Pca": <ImageHolder primarySource={Asset.PcaLogo} secondarySource={Asset.FallbackBryngaLogo} alt="Pca" className={`card-img ${styles.image}`} />,
    "F2": <ImageHolder primarySource={Asset.F2Logo} secondarySource={Asset.FallbackBryngaLogo} alt="F2" className={`card-img ${styles.image}`} />
}

const ExperienceCard = (props) => {
    const [modalDisplay, setModalDisplay] = useState(false);

    const handleModalOpen = () => setModalDisplay(true);
    const handleModalClose = () => setModalDisplay(false);

    return (
        <Card className={styles.container}>
            {assets[props.logo]}
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>{props.organization}<br /><span style={{ fontWeight: "500" }}>{props.duration}</span></Card.Text>
                {props.liveUrl ? <Button className={styles.button} variant={props.variant} href={props.liveUrl} target="_blank">Visit Website</Button> : null}
                {
                    props.description ?
                        (
                            <React.Fragment>
                                <Button className={styles.button} variant="secondary" onClick={handleModalOpen}>
                                    View Description
                                </Button>
                                <Modal centered size="lg" show={modalDisplay} onHide={handleModalClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>{props.organization}</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <div style={{ textAlign: "center" }}><h4>{props.title}</h4></div>
                                        <div style={{ textAlign: "center" }}><h5>{props.duration}</h5></div>
                                        <ul>
                                            {props.description.map(elem => <li>
                                                {elem}
                                            </li>)}
                                        </ul>
                                    </Modal.Body>
                                </Modal>
                            </React.Fragment>
                        )
                        : null
                }
            </Card.Body>
        </Card >
    )
}

export default ExperienceCard;