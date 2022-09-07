import Carousel from 'react-bootstrap/Carousel';

import CHAT from '../assets/img/chat.png';
import MAP from '../assets/img/map.png';
import WEATHER from '../assets/img/weather.png';
import JIRA from '../assets/img/jira.png';


function ProjectsCarousel() {
    return (
        <Carousel fade className='carousel'>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={CHAT}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3 className='slider-text'>Online chat</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={MAP}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3 className='slider-text'>Rental Property on Google Map</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={WEATHER}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3 className='slider-text'>Weather forecast application</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={JIRA}
                    alt="Fourth slide"
                />

                <Carousel.Caption>
                    <h3 className='slider-text'>Todo List</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default ProjectsCarousel;