import React from 'react';
import Appointment from '../../images/calling.svg'
import OurServices from '../../images/community.svg'
import Opening from '../../images/calendar.svg'
import {
    ServicesContainer, 
    ServicesWrapper, 
    ServicesCard, 
    ServicesH1, 
    ServicesH2, 
    ServicesIcon, 
    ServicesP
} from './ServicesElements';
import { Button } from '../Button';
import { Link } from 'react-router-dom';
// import routes
import * as ROUTES from '../../constants/routes.js';

const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={OurServices}/>
                    <ServicesH2>Services</ServicesH2>
                    <ServicesP>Learn more about what we offer.</ServicesP>
                    <Link to={ROUTES.SIGN_UP}>
                                <Button
                                 buttonSize='btn-wide' buttonColour='pink'
                                >
                                    EXPLORE
                                </Button>
                    </Link>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Appointment}/>
                    <ServicesH2>Have an appointment?</ServicesH2>
                    <ServicesP>Schedule your visit now.</ServicesP>
                    <Link to={ROUTES.SIGN_UP}>
                                <Button
                                 buttonSize='btn-wide' buttonColour='pink'
                                >
                                    BOOK NOW
                                </Button>
                    </Link>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Opening}/>
                    <ServicesH2>Opening Hours</ServicesH2>
                    <ServicesP>Mon - Fri: 08:00 - 17:00hrs</ServicesP>
                    <ServicesP>Contact Us:  +2547 22 477 776</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
