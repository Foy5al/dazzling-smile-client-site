import { Avatar, Card, CardContent, CardHeader, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import React from 'react';
import quote from '../../../assets/icons/quote.svg'
import prople1 from '../../../assets/images/people1.png'
import prople2 from '../../../assets/images/people2.png'
import prople3 from '../../../assets/images/people3.png'

const clientSaysQuote = {
    background: `url(${quote})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right',
    backgroundSize: 100
}

const reviews = [
    {
        id: 1,
        name: "Remy Sharp",
        img: prople1,
        position: "Web Developer",
        text: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content"
    },
    {
        id: 2,
        name: "Travis Howard",
        img: prople2,
        position: "Web Developer",
        text: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content"
    },
    {
        id: 3,
        name: "Cindy Baker",
        img: prople3,
        position: "Model",
        text: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content"
    }
]
const Testimonial = () => {

    return (
        <Box sx={{ my: 2 }}>
            <Container>
                <Box style={clientSaysQuote}>
                    <Typography variant='h6' sx={{ color: '#5CE7ED' }} component='h6'>
                        Testimonial
                    </Typography>
                    <Typography variant='h4' component='h4' sx={{ fontWeight: 600 }}>
                        What Our Patients <br />
                        Says
                    </Typography>
                </Box>

                <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                    {
                        reviews.map(review => <Card key={review.id} sx={{
                            boxShadow: 3, maxWidth: 320, p: 1,
                            m: 2, borderRadius: 3
                        }}>
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                    {review.text}
                                </Typography>
                            </CardContent>

                            <CardHeader
                                avatar={
                                    <Avatar sx={{ border: '3px solid #5CE7ED' }} alt={review.name} src={review.img} />
                                }

                                title={review.name}
                                subheader={review.position}
                            />
                        </Card>)
                    }
                </Box>
            </Container>
        </Box>
    );
};

export default Testimonial;