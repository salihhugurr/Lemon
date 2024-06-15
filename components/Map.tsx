import { StyleSheet, Text } from 'react-native'
import MapBox, { Camera, LocationPuck, MapView } from "@rnmapbox/maps"
import { isEnabled } from 'react-native/Libraries/Performance/Systrace';

MapBox.setAccessToken(process.env.EXPO_PUBLIC_RNMAPBOX_ACCESS_TOKEN || "")
export default function Map() {
    return (
        <MapView style={{ flex: 1 }} styleURL='mapbox://styles/mapbox/navigation-day-v1' >
            <Camera followUserLocation followZoomLevel={16} />
            <LocationPuck puckBearingEnabled puckBearing='heading' pulsing={{ isEnabled: true }} />
        </MapView>
    )
}

const styles = StyleSheet.create({})