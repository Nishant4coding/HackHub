import React from 'react';
import { Box, Text, Badge } from '@chakra-ui/react';

function HackathonCard({ hackathon }) {
  return (
    <Box borderWidth="1px" borderRadius="md" p={4} my={2}>
      <Text fontSize="xl">{hackathon.name}</Text>
      <Text>Date: {hackathon.date}</Text>
      <Text>Description: {hackathon.description}</Text>
      <Badge mt={2} colorScheme="blue">View Details</Badge>
    </Box>
  );
}

export default HackathonCard;
