import {Modal, ModalBody, ModalHeader, ModalTitle} from "react-bootstrap";
import YouTube from "react-youtube";
import 'react-bootstrap-carousel/dist/react-bootstrap-carousel.css';

export const MoviePlayerModal = ({video, movieTitle, isOpen, setIsOpen}) => {
    return (
        <Modal
            show={isOpen}
            onHide={() => setIsOpen(false)}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <ModalHeader closeButton>
                <ModalTitle
                    id="contained-modal-title-vcenter"
                    style={{color: '#000', fontWeight: 700}}
                >
                    {movieTitle}
                </ModalTitle>
            </ModalHeader>
            <ModalBody style={{backgroundColor: '#000'}}>
                <YouTube
                    videoId={video.key}
                    iframeClassName={"container"}
                />
            </ModalBody>
        </Modal>
    );
};