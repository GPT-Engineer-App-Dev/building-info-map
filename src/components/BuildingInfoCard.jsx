import { Box, Text, VStack } from "@chakra-ui/react";

const BuildingInfoCard = ({ building }) => {
  if (!building) return null;

  return (
    <Box
      position="absolute"
      top="10px"
      left="10px"
      bg="white"
      p={4}
      borderRadius="md"
      boxShadow="md"
      zIndex={1000}
    >
      <VStack align="start">
        <Text fontSize="lg" fontWeight="bold">
          {building.name}
        </Text>
        <Text>Temperature: {building.temperature}°C</Text>
        <Text>Humidity: {building.humidity}%</Text>
        <Text>CO2 Levels: {building.co2} ppm</Text>
      </VStack>
    </Box>
  );
};

export default BuildingInfoCard;