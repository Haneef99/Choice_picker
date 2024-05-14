import React from 'react';
import AccordionGroup from '@mui/joy/AccordionGroup';
import Accordion from '@mui/joy/Accordion';
import AccordionDetails from '@mui/joy/AccordionDetails';
import AccordionSummary from '@mui/joy/AccordionSummary';
import {  Typography } from '@mui/material';
import Acc from './Acc'


const Body = (props) => {
    // console.log(props.data);

    // console.log(JSON.parse(props.data[0]).title)
    return (
        <>
            {props.data.length ? (
                <AccordionGroup sx={{ maxWidth: '80%', padding: '15px'}} variant='plain' >
                    {props.data.map((element, index) => (
                        <Accordion key={index} sx={{padding:'15px 0 15px 0'}}>
                            <AccordionSummary><Typography variant='h6'>{JSON.parse(element).title}</Typography></AccordionSummary>
                            <AccordionDetails>
                                <Acc data={JSON.parse(element)}/>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </AccordionGroup>
            ) : (
                <></>
            )}
        </>
    );
};

export default Body;
