import React, { useState } from "react";
import { Carrousel } from "./components/Carrousel";

const AppContainer = ({ datos }) => {
  const { yearClass, fetchByYear, racesArray } = { ...datos };

  const [year, setYear] = useState([
    2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014,
    2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023,
  ]);

  return (
    <div className="min-h-full">
      <header className="bg-rose-700">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            F1-anaticos
          </h1>
        </div>
      </header>
      <main>
        <div className="h-dvh bg-slate-900">
          <div className="flex h-3/4">
            <div className="grid grid-cols-2 w-1/6 text-center mt-6 ml-2 p-3 border-double border-4 border-rose-600">
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

            <div className="w-5/6 mt-6 mr-2 border-double border-4 border-rose-600 ">
              <Carrousel races={racesArray} />
            </div>
            <div id="podio-container"></div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AppContainer;
