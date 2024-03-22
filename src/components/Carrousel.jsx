import { Carousel } from "flowbite-react";
import { useEffect } from "react";

export function Carrousel({ races }) {
  const racesArray = races;

  useEffect(() => {}, [racesArray]);

  return (
    <div className="h-20 ">
      <Carousel>
        {races &&
          racesArray.map((race) => {
            return (
              <div
                key={race.raceName}
                className="flex w-3/4 pb-8 h-full items-center justify-center bg-gray-400 "
              >
                {race.raceName} Fecha {race.round}
              </div>
            );
          })}
      </Carousel>
    </div>
  );
}
