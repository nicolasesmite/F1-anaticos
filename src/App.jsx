import "./index.css";

import AppContainer from "./AppContainer";

function App() {
  const url = "https://ergast.com/api/f1/2003.json";

  async function fetching(url) {
    try {
      const response = await fetch(url);
      const result = await response.text();
      console.log(result);
    } catch (error) {
      console.error(error);
    }

    return result;
  }

  async function fetchByYear(year) {
    const url = "https://ergast.com/api/f1/" + `${year}` + ".json";
    console.log(url);
    const result = await fetching(url);

    return result;
  }

  return <AppContainer datos={""} />;
}

export default App;
