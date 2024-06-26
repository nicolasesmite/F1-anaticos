import { Carousel } from "flowbite-react";
import { useEffect } from "react";

export function Carrousel({ data }) {
  const { racesArray, fetchRaceData } = { ...data };

  useEffect(() => {}, [racesArray]);

  return (
    <div className="h-20 ">
      <Carousel>
        {racesArray &&
          racesArray.map((race) => {
            return (
              <div
                key={race.raceName}
                className="flex w-3/4 pb-8 h-full items-center justify-center text-red-500 text-lg "
                onClick={() => fetchRaceData(race.round)}
              >
                {race.raceName} Fecha {race.round}
              </div>
            );
          })}
      </Carousel>
    </div>
  );
}
