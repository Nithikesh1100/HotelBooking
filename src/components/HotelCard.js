import React from 'react'
import '../styles/HotelCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import {useNavigate} from 'react-router-dom';

const HotelCard = (props) => {

    const navigate = useNavigate();

    const handlebuttonClick = () => {
        navigate(`/hotelinfo/${props.id}`);
    }

    return (
        <div className='card'>

            <img src={props.photo} alt={props.hotelname} className='card-img'/>



            <div className='details'>
                <h2>{props.hotelname} - {props.hotelchainname}</h2>
                <div className='ratingsNCity'>

                    <span className='ratings'>
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} style={{marginRight:'10px'}}/>
                        ({props.totalreviews})
                    </span>
                    <span className='city'>
                        <FontAwesomeIcon icon={faLocationDot} style={{marginRight:'10px'}}/>
                        {props.city}
                        </span>
                </div>

                <div>{props.address}</div>
                
                <button className='bookbtn' onClick={handlebuttonClick}>Book Now</button>
            </div>


        </div>
    )
}

export default HotelCard