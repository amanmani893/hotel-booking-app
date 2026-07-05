const API_URL = "https://demohotelsapi.pythonanywhere.com/hotels/";

export async function getHotels() {
  const response = await fetch(API_URL);
  const result = await response.json();

  return result.data;
}