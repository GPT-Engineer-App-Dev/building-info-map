import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Box } from "@chakra-ui/react";
import "leaflet/dist/leaflet.css";
import BuildingInfoCard from "../components/BuildingInfoCard";

const buildings = [
  { id: 1, name: "Building 1", position: [59.91, 10.75], temperature: 22, humidity: 45, co2: 400 },
  { id: 2, name: "Building 2", position: [59.92, 10.76], temperature: 21, humidity: 50, co2: 420 },
  { id: 3, name: "Building 3", position: [59.93, 10.77], temperature: 23, humidity: 40, co2: 410 },
  { id: 4, name: "Building 4", position: [59.94, 10.78], temperature: 20, humidity: 55, co2: 430 },
  { id: 5, name: "Building 5", position: [59.95, 10.79], temperature: 24, humidity: 35, co2: 390 },
  { id: 6, name: "Building 6", position: [59.96, 10.80], temperature: 22, humidity: 45, co2: 400 },
  { id: 7, name: "Building 7", position: [59.97, 10.81], temperature: 21, humidity: 50, co2: 420 },
  { id: 8, name: "Building 8", position: [59.98, 10.82], temperature: 23, humidity: 40, co2: 410 },
  { id: 9, name: "Building 9", position: [59.99, 10.83], temperature: 20, humidity: 55, co2: 430 },
  { id: 10, name: "Building 10", position: [60.00, 10.84], temperature: 24, humidity: 35, co2: 390 },
];

const Index = () => {
  const [selectedBuilding, setSelectedBuilding] = useState(null);

  return (
    <Box height="100vh" width="100vw">
      <MapContainer center={[59.91, 10.75]} zoom={12} style={{ height: "100%", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {buildings.map((building) => (
          <Marker
            key={building.id}
            position={building.position}
            eventHandlers={{
              click: () => {
                setSelectedBuilding(building);
              },
            }}
          >
            <Popup>{building.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
      <BuildingInfoCard building={selectedBuilding} />
    </Box>
  );
};

export default Index;