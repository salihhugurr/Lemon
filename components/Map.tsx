import { StyleSheet, Text } from 'react-native'
import MapBox, { Camera, Images, LocationPuck, MapView, ShapeSource, SymbolLayer } from "@rnmapbox/maps"
import Scooters from "data/scooters.json"
import { featureCollection, point } from "@turf/helpers"
import pin from '~/assets/pin.png';
import scooters from "data/scooters.json"
MapBox.setAccessToken(process.env.EXPO_PUBLIC_RNMAPBOX_ACCESS_TOKEN || "")
export default function Map() {
    const points = scooters.map((scooter) => point([scooter.longitude, scooter.latitude]))
    return (
        <MapView style={{ flex: 1 }} styleURL='mapbox://styles/mapbox/navigation-day-v1' >
            <Camera followUserLocation followZoomLevel={8} />
            <LocationPuck puckBearingEnabled puckBearing='heading' pulsing={{ isEnabled: true }} />
            <ShapeSource id='scooters' shape={featureCollection(points)} >
                <SymbolLayer id='scooter-icons' style={{
                    iconImage: "pin",
                    iconSize: 0.5,
                    iconAllowOverlap: true
                }} />
                <Images images={{ pin }} />
            </ShapeSource>
        </MapView>
    )
}

const styles = StyleSheet.create({})