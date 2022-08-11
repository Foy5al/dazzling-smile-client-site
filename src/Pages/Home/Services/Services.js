import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import fluoride from '../../../assets/images/fluoride.png';
import cavity from '../../../assets/images/cavity.png';
import whitening from '../../../assets/images/whitening.png';
import Service from '../Service/Service';

const Services = () => {

    const services = [
        {
            name: 'Fluoride Treatment',
            description: "Fluoride treatments are typically professional treatments containing a high concentration of fluoride that a dentist or hygienist will apply to a person's teeth to improve health and reduce the risk of cavities",
            img: fluoride
        },
        {
            name: 'Cavity Filling',
            description: "Sometimes your dentist is able to tell that you have a cavity just by looking at your mouth through an oral exam. They will look for things like discoloration, enamel destruction, or holes in the teeth.",
            img: cavity
        },
        {
            name: 'Teeth Whitening',
            description: "Teeth whitening is a form of dentistry and should only be carried out by a dentist or another regulated dental professional, such as a dental hygienist or dental therapist, on the prescription of a dentist.",
            img: whitening
        }
    ]

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container maxWidth="lg">
                <Typography variant="h6"
                    component="div" sx={{ textAlign: 'center', mb: 2, color: 'info.main', fontWeight: 600 }}>
                    OUR SERVICES
                </Typography>
                <Typography variant="h4"
                    component="div" sx={{ textAlign: 'center', fontWeight: 'bold', mb: 4 }}>
                    SERVICES WE PROVIDE
                </Typography>

                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 8, md: 12 }}>
                    {services.map((service, index) => (<Service
                        key={service.name}
                        service={service}
                    ></Service>

                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default Services;