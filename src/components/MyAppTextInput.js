import { useState } from "react";
import { TextInput } from "react-native";

export const MyAppTextInput = (props) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <TextInput
      {...props}
      style={[
        props.style,
        isFocused && { backgroundColor: "#FFFFFF", borderColor: "#FF6C00" },
      ]}
      onBlur={() => setIsFocused(false)}
      onFocus={() => setIsFocused(true)}
    />
  );
};
