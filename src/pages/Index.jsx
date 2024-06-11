import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Box, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button, Text } from "@chakra-ui/react";
import "leaflet/dist/leaflet.css";
import BuildingInfoCard from "../components/BuildingInfoCard";
import { useEvents } from "../integrations/supabase/index.js";

const Index = () => {
  const [selectedBuilding, setSelectedBuilding] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const { data: events, isLoading, error } = useEvents();

  const generateRandomLocation = () => {
    const lat = 59.91 + Math.random() * 0.1;
    const lng = 10.75 + Math.random() * 0.1;
    return [lat, lng];
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading events</div>;

  return (
    <Box height="100vh" width="100vw">
      <MapContainer center={[59.91, 10.75]} zoom={12} style={{ height: "100%", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {events.map((event) => (
          <Marker
            key={event.id}
            position={generateRandomLocation()}
            eventHandlers={{
              click: () => {
                setSelectedEvent(event);
              },
            }}
          >
            <Popup>{event.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
      <BuildingInfoCard building={selectedBuilding} />
      <Modal isOpen={!!selectedEvent} onClose={() => setSelectedEvent(null)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{selectedEvent?.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Date: {selectedEvent?.date}</Text>
            <Text>Description: {selectedEvent?.description}</Text>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={() => setSelectedEvent(null)}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Index;