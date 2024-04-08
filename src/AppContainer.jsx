import React, { useState } from "react";
import { Carrousel } from "./components/Carrousel";

const AppContainer = ({ datos }) => {
  const {
    yearClass,
    fetchByYear,
    racesArray,
    fetchRaceData,
    raceData,
    circuitName,
  } = {
    ...datos,
  };

  const [year, setYear] = useState([
    2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014,
    2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023,
  ]);

  const carrouselData = { fetchRaceData, racesArray };

  return (
    <div className="h-full">
      <header className="bg-rose-700">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            F1-anaticos
          </h1>
        </div>
      </header>
      <main>
        <div className="h-full bg-slate-900">
          <div className="flex min-h-screen">
            <div className=" text-gray-50 max-h-80 w-1/6 text-center mt-6 ml-2 p-3 border-double border-4 border-rose-600">
              {racesArray ? (
                <p>
                  -Has click sobre el nombre del circuito para conocer los
                  detalles
                </p>
              ) : (
                <p>-Selecciona el año de la carrera</p>
              )}
            </div>
            <div className="max-h-80 grid grid-cols-2 w-1/6 text-center mt-6 ml-2 p-3 border-double border-4 border-rose-600">
              {year.map((element) => {
                if (element == yearClass) {
                  return (
                    <a key={element} className="text-yellow-300 ">
                      {element}
                    </a>
                  );
                } else {
                  return (
                    <a
                      key={element}
                      onClick={() => fetchByYear(element)}
                      className="text-gray-50 hover:text-yellow-300 cursor-pointer "
                    >
                      {element}
                    </a>
                  );
                }
              })}
            </div>

            <div className="w-5/6 mt-6 mr-2">
              <Carrousel data={carrouselData} />

              {raceData && (
                <div className="text-red-500 flex flex-wrap justify-center place-content-center mt-4 gap-0.5">
                  <h2 className="w-3/4 text-center text-lg border-solid border-red-600 border-2">
                    {circuitName}
                  </h2>

                  <table className="w-3/4">
                    <tbody>
                      <tr className="border-solid border-red-600 border-2 text-lg">
                        <td className="p-2 text-center">Posicion</td>
                        <td className="p-2 text-center">Piloto</td>
                        <td className="p-2 text-center">Nacionalidad</td>
                        <td className="p-2 text-center">Marca Automovil</td>
                      </tr>
                      {raceData &&
                        raceData.map((pilot) => {
                          return (
                            <tr key={pilot.position}>
                              <td className="p-2 text-center">
                                {pilot.position}
                              </td>
                              <td className="p-2 text-center">
                                {pilot.Driver.familyName}
                              </td>
                              <td className="p-2 text-center">
                                {pilot.Driver.nationality}
                              </td>
                              <td className="p-2 text-center">
                                {pilot.Constructor.name}
                              </td>
                            </tr>
                          );
                        })}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AppContainer;
