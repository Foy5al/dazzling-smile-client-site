import React, { useState } from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AppointmentHeaders from '../AppointmentHeaders/AppointmentHeaders';
import AvailableAppointments from '../AvailableAppointments/AvailableAppointments';

const Appointment = () => {
    const [date, setDate] = useState(new Date());
    return (
        <>
            <Navigation />
            <AppointmentHeaders date={date} setDate={setDate} />
            <AvailableAppointments date={date} />
        </>
    );
};

export default Appointment;