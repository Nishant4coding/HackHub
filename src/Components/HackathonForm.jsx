
import React, { useState } from 'react';
import { Box, Heading, FormControl, FormLabel, Input, Button } from '@chakra-ui/react';

function HackathonForm() {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send the form data to the backend API for creation
    console.log(formData);
  };

  return (
    <Box borderWidth="1px" borderRadius="md" p={4} my={2}>
      <Heading as="h2" size="md">Create Hackathon</Heading>
      <form onSubmit={handleSubmit}>
        <FormControl mt={2}>
          <FormLabel>Hackathon Name</FormLabel>
          <Input name="name" value={formData.name} onChange={handleChange} />
        </FormControl>
        <FormControl mt={2}>
          <FormLabel>Hackathon Date</FormLabel>
          <Input type="date" name="date" value={formData.date} onChange={handleChange} />
        </FormControl>
        <FormControl mt={2}>
          <FormLabel>Description</FormLabel>
          <Input name="description" value={formData.description} onChange={handleChange} />
        </FormControl>
        <Button mt={4} colorScheme="blue" type="submit">Create</Button>
      </form>
    </Box>
  );
}

export default HackathonForm;
