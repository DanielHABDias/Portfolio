"use client";

import { ToggleButton, ToggleButtonGroup } from '@mui/material';

const style = {
    bgcolor: 'transparent', 
    color: 'white'
}

const styleButtons = {
    bgcolor: 'transparent', 
    color: 'white', 
    '&.Mui-selected': {
        bgcolor: '#000000ff',
        color: 'white',
    },
    '&:hover': { 
        bgcolor: '#00000073',
        color: '#ffffff73',
    }
}

export default function SessionMenu({ value, setValue }: any) {
    return (
        <ToggleButtonGroup
            value={value}
            color='primary'
            exclusive
            onChange={(event, newValue) => {
                if (newValue !== null) {
                    setValue(newValue);
                }
            }}
            aria-label="text alignment"
            size="small"
            sx={style}
        >
            <ToggleButton value="About" aria-label="left aligned" sx={styleButtons}>
                About
            </ToggleButton>
            <ToggleButton value="Habilits" aria-label="centered" sx={styleButtons}>
                Habilits
            </ToggleButton>
            <ToggleButton value="Experience" aria-label="right aligned" sx={styleButtons}>
                Experience
            </ToggleButton>
            <ToggleButton value="Contact-me" aria-label="justified" sx={styleButtons}>
                Contact-me
            </ToggleButton>
        </ToggleButtonGroup>
    );
}