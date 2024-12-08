import React from 'react';
import { Box, Typography } from '@mui/material';

const ReviewPublishStep: React.FC = () => (
  <Box>
    <Typography sx={{ mb: 1, fontWeight: 'bold' }}>Review & Publish</Typography>
    <Typography>
      Please review all your information before publishing your job post.
    </Typography>
  </Box>
);

export default ReviewPublishStep;
