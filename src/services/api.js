const apiKey = "47e36626e993463eba8594017a59dded";
const apiURL = "https://emailvalidation.abstractapi.com/v1/?api_key=" + apiKey;

export const sendEmailValidationRequest = async (email) => {
  try {
    const response = await fetch(apiURL + "&email=" + email);
    const data = await response.json();
    return data.is_valid_format.value;
  } catch (error) {
    throw error;
  }
};
