import Ionicons from "react-native-vector-icons/Ionicons";
import { MaterialIcons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

export const ArrowUp = ({ color }) => {
  return <Ionicons name="ios-arrow-up-sharp" size={24} color={color} />;
};

export const PersonIcon = ({ color }) => {
  return <Ionicons name="person-outline" size={24} color={color} />;
};

export const GridIcon = ({ color }) => {
  return <Ionicons name="grid-outline" size={24} color={color} />;
};

export const PlusIcon = ({ color }) => {
  return <AntDesign name="plus" size={24} color={color} />;
};

export const FlipCameraIcon = ({ color }) => {
  return <MaterialIcons name="flip-camera-ios" size={24} color={color} />;
};

export const CameraIcon = ({ color }) => {
  return <MaterialIcons name="photo-camera" size={24} color={color} />;
};

export const LocationIcon = ({ style, color }) => {
  return <EvilIcons name="location" size={24} color={color} style={style} />;
};

export const TrashIcon = ({ color }) => {
  return <Feather name="trash-2" size={24} color={color} />;
};

export const CloseCircleIcon = ({ color }) => {
  return <AntDesign name="closecircleo" size={25} color={color} />;
};

export const LikeIcon = ({ color }) => {
  return <AntDesign name="like2" size={24} color={color} />;
};

export const CommentIcon = ({ color }) => {
  return <FontAwesome name="comment" size={24} color={color} />;
};

export const ArrowLeftIcon = ({ color, style, onPress }) => {
  return (
    <AntDesign
      name="arrowleft"
      size={24}
      color={color}
      style={style}
      onPress={onPress}
    />
  );
};

export const LogoutIcon = ({ color, style, onPress }) => {
  return (
    <MaterialIcons
      name="logout"
      size={24}
      color={color}
      style={style}
      onPress={onPress}
    />
  );
};
