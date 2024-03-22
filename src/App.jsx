import "./index.css";

import AppContainer from "./AppContainer";
import { useEffect, useState } from "react";

function App() {
  const url = "https://ergast.com/api/f1/2003.json";
  const [yearClass, setYearClass] = useState();
  const [data, setData] = useState();
  const [racesArray, setRacesArray] = useState();

  useEffect(() => {
    async function fetching(url) {
      try {
        const response = await fetch(url);
        const result = await response.text();
        const resultado = JSON.parse(result);
        setRacesArray(resultado.MRData.RaceTable.Races);
        console.log();
      } catch (error) {
        console.error(error);
      }

      const res = racesArray;

      return res;
    }

    async function fetchByYear(year) {
      const url = "https://ergast.com/api/f1/" + `${year}` + ".json";
      /* Aca debo llamar a la api y traer las carreras por a;o*/
      setYearClass(year);
      const result = await fetching(url);
      return result;
    }

    setData({ fetchByYear, yearClass, racesArray });
  }, [yearClass]);

  return <AppContainer datos={data} />;
}

export default App;
