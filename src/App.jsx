import "./index.css";

import AppContainer from "./AppContainer";
import { useEffect, useState } from "react";

function App() {
  const [yearClass, setYearClass] = useState();
  const [data, setData] = useState();
  const [racesArray, setRacesArray] = useState();
  const [raceData, setRaceData] = useState();

  useEffect(() => {
    async function fetching(url) {
      try {
        const response = await fetch(url);
        const result = await response.text();
        const resultado = JSON.parse(result);
        return resultado;
      } catch (error) {
        console.error(error);
      }
    }

    async function fetchByYear(year) {
      const url = "https://ergast.com/api/f1/" + `${year}` + ".json";
      setYearClass(year);
      const result = await fetching(url);
      setRacesArray(result.MRData.RaceTable.Races);
    }

    async function fetchRaceData(round) {
      const url =
        "http://ergast.com/api/f1/" +
        `${yearClass}` +
        `/${round}/` +
        "results.json";

      const result = await fetching(url);
      setRaceData(result.MRData.RaceTable.Races[0].Results);
    }

    setData({ fetchByYear, yearClass, racesArray, fetchRaceData, raceData });
  }, [yearClass, racesArray]);

  return <AppContainer datos={data} />;
}

export default App;
