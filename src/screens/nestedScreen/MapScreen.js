import { View, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";

export const MapScreen = ({ route: { params: coords } }) => {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.mapView}
        initialRegion={{
          ...coords,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker coordinate={{ ...coords }} />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center" },
  mapView: { flex: 1 },
});
