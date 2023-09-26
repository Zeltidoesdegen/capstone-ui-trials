import { SimpleGrid, Text, Box, Grid, GridItem, useDisclosure, Button, CardFooter, CardBody, CardHeader, Heading, Image, HStack, Icon} from "@chakra-ui/react";

import { Container, FormControl, FormLabel, Code, Flex } from "@chakra-ui/react";
import { Card } from "@chakra-ui/react";
import { Select } from "chakra-react-select";
import FoodImage from "../component_img/Food.jpg";
import {ViewIcon} from "@chakra-ui/icons";
import { MdReceipt } from "react-icons/md";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";

export const colorOptions = [
  { value: "blue", label: "Blue" },
  { value: "purple", label: "Purple" },
  { value: "red", label: "Red" },
  { value: "orange", label: "Orange" },
  { value: "yellow", label: "Yellow" },
  { value: "green", label: "Green" }
];

export const groupedOptions = [
  {
    label: "Colors",
    options: [
      { value: "blue", label: "Blue" },
      { value: "purple", label: "Purple" },
      { value: "red", label: "Red" },
      { value: "orange", label: "Orange" },
      { value: "yellow", label: "Yellow" },
      { value: "green", label: "Green" }
    ]
  }
];

export const groupedOptions1 = [
  {
    label: "Numbers",
    options: [
      { value: "one", label: "One" },
      { value: "two", label: "Two" },
      { value: "three", label: "Three" }
    ]
  }
];

export const groupedOptions2 = [
  {
    label: "Names",
    options: [
      { value: "Jesus", label: "Jesus" },
      { value: "Fries", label: "Fries" },
      { value: "Kween", label: "Kween" }
    ]
  }
];



const IngredientsPickerMain = () => {
  const { isOpen, onToggle } = useDisclosure();
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  }

  const closeModal = () => {
    setModalOpen(false);
  }
  
  
  
  return (
    <>
      <Button 
        onClick={onToggle} 
        display={{ base: 'block', md: 'block', lg: 'none' }} // Show button only on small and medium screens
        width='100%'
        height={{base: '50px'}}
      > 
        Ingredients List
      </Button>
      <Grid templateColumns="repeat(6, 1fr)" bg="gray.50">
        <GridItem
          as="aside"
          colSpan={{ base: 6, lg:2, xl:1 }}
          bg="orange.400"
          minHeight={{lg: '100vh'}}
          p={{ base: '20px', lg: '30px', }}
          display={{ base: isOpen ? 'block' : 'none', md: isOpen ? 'block' : 'none', sm: 'block', lg: 'block' }} // Toggle display based on isOpen state
        >
          <Container mb={16}>

              <FormControl p={{ base: 4, lg: 1, xl:0 }} mb={{base: 5, md: 3, lg: 8,  }} >
                <FormLabel >
                  Meat & Poultry
                </FormLabel>
                <Select
                  isMulti
                  name="colors"
                  options={groupedOptions}
                  closeMenuOnSelect={false}
                  color='Blue'
                />
              </FormControl>

            
          </Container>
          
        </GridItem>
        
        <GridItem as="main" colSpan={{ base: 6, lg:4, xl:5 }} p="40px" bg="gray.800">
          <SimpleGrid  spacing={10} minChildWidth="300px">
            <Card>
              <CardHeader>
                <Flex>
                  <Box w="100%" h="100%">
                    <Image src={FoodImage}></Image>
                  </Box>
                </Flex>
              </CardHeader>
              <CardBody>
                <Box>
                  <Heading as="h2" size="sm">Lugaw</Heading>
                  <Text>Hehe Yum!</Text>
                </Box>
              </CardBody>
              <CardFooter>
                <HStack>
                  <Button leftIcon={<ViewIcon />} onClick={openModal}>View Preview</Button>
                  <Modal onClose={closeModal} isOpen={isModalOpen} isCentered>
                    <ModalOverlay />
                    <ModalContent>
                      <ModalHeader>Lugaw</ModalHeader>
                      <ModalCloseButton />
                      <ModalBody>
                        <Text>This is me This is real</Text>
                      </ModalBody>
                      <ModalFooter>
                        <Button onClick={closeModal}>Close</Button>
                      </ModalFooter>
                    </ModalContent>
                  </Modal>
                  <Button leftIcon={<Icon as={MdReceipt} />}>Get Recipe</Button>
                </HStack>
              </CardFooter>
            </Card>
            <Box bg="white" h="200px" border="1px solid" borderRadius='lg' overflow='hidden'></Box>
            <Box bg="white" h="200px" border="1px solid" borderRadius='lg' overflow='hidden'></Box>
            <Box bg="white" h="200px" border="1px solid" borderRadius='lg' overflow='hidden'></Box>

            <Box bg="white" h="200px" border="1px solid" borderRadius='lg' overflow='hidden'></Box>
            <Box bg="white" h="200px" border="1px solid" borderRadius='lg' overflow='hidden'></Box>
            <Box bg="white" h="200px" border="1px solid" borderRadius='lg' overflow='hidden'></Box>
            <Box bg="white" h="200px" border="1px solid" borderRadius='lg' overflow='hidden'></Box>

            <Box bg="white" h="200px" border="1px solid" borderRadius='lg' overflow='hidden'></Box>
            <Box bg="white" h="200px" border="1px solid" borderRadius='lg' overflow='hidden'></Box>
            <Box bg="white" h="200px" border="1px solid" borderRadius='lg' overflow='hidden'></Box>
            <Box bg="white" h="200px" border="1px solid" borderRadius='lg' overflow='hidden'></Box>
          </SimpleGrid>
        </GridItem>
      </Grid>
    </>
  );
};

export default IngredientsPickerMain;
