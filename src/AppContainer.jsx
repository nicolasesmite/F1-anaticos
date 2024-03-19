import React from "react";
import { Carrousel } from "./components/Carrousel";

const AppContainer = (datos) => {
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
              <a href="#" className="text-gray-50  ">
                2003
              </a>

              <a href="#" className="text-gray-50  ">
                2004
              </a>
              <a href="#" className="text-gray-50  ">
                2005
              </a>

              <a href="#" className="text-gray-50  ">
                2006
              </a>
              <a href="#" className="text-gray-50  ">
                2007
              </a>
              <a href="#" className="text-gray-50  ">
                2008
              </a>
              <a href="#" className="text-gray-50  ">
                2009
              </a>
              <a href="#" className="text-gray-50  ">
                2010
              </a>
              <a href="#" className="text-gray-50  ">
                2011
              </a>
              <a href="#" className="text-gray-50  ">
                2012
              </a>
              <a href="#" className="text-gray-50  ">
                2013
              </a>
              <a href="#" className="text-gray-50  ">
                2014
              </a>
              <a href="#" className="text-gray-50  ">
                2015
              </a>
              <a href="#" className="text-gray-50  ">
                2016
              </a>
              <a href="#" className="text-gray-50  ">
                2017
              </a>
              <a href="#" className="text-gray-50  ">
                2018
              </a>
              <a href="#" className="text-gray-50  ">
                2019
              </a>
              <a href="#" className="text-gray-50  ">
                2020
              </a>
              <a href="#" className="text-gray-50  ">
                2021
              </a>
              <a href="#" className="text-gray-50  ">
                2022
              </a>
              <a href="#" className="text-gray-50  ">
                2023
              </a>
            </div>

            <div className="w-5/6 mt-6 mr-2 border-double border-4 border-rose-600 ">
              <Carrousel />
            </div>
            <div id="podio-container"></div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AppContainer;
