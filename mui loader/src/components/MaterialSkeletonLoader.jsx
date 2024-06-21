import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';

export default function MaterialSkeletonLoader() {
  const theme = useTheme();

  // Use media queries to determine screen size
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isDesktop = useMediaQuery(theme.breakpoints.between('md', 'lg'));
  const isTelevision = useMediaQuery(theme.breakpoints.up('lg'));

  // Define styles based on screen size
  const skeletonStyles = {
    fontSize: isMobile
      ? '1rem'
      : isTablet
      ? '1.25rem'
      : isDesktop
      ? '1.5rem'
      : '2rem',
    circular: {
      width: isMobile ? 40 : isTablet ? 60 : isDesktop ? 80 : 100,
      height: isMobile ? 40 : isTablet ? 60 : isDesktop ? 80 : 100,
    },
    rectangular: {
      width: '100%',
      height: isMobile ? 60 : isTablet ? 80 : isDesktop ? 100 : 120,
    },
    rounded: {
      width: '100%',
      height: isMobile ? 60 : isTablet ? 80 : isDesktop ? 100 : 120,
    },
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%', // Full viewport width
        padding: '20px 0', // Add padding to the top and bottom
      }}
    >
      <Stack spacing={2} sx={{ width: '90%', maxWidth: '600px' }}>
        <Skeleton variant="text" sx={{ fontSize: skeletonStyles.fontSize, width: '100%' }} />
        <Skeleton variant="circular" sx={skeletonStyles.circular} />
        <Skeleton variant="rectangular" sx={skeletonStyles.rectangular} />
        <Skeleton variant="rounded" sx={skeletonStyles.rounded} />
      </Stack>
    </Box>
  );
}
