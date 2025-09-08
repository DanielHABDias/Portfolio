"use client"; 

import React from 'react';
import { Box } from '@mui/material';

export default function GoogleMap({ url } : { url?: string }) {
    if(url === undefined) {
        return (
            <div>
                <p>Google Maps URL is not available.</p>
            </div>
        )
    }

    return (
        <Box
        sx={{
            width: '100%',
            maxWidth: '800px', 
            margin: '0 auto', 
            mt: 4, 
        }}
        >
            <Box
                sx={{
                position: 'relative',
                overflow: 'hidden',
                paddingBottom: '75%', 
                height: 0,
                }}
            >
                <iframe
                src={url}
                style={{
                    left: 0,
                    top: 0,
                    height: '100%',
                    width: '100%',
                    position: 'absolute',
                    border: 0,
                }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="My location"
                ></iframe>
            </Box>
        </Box>
    );
}