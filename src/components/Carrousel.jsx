import { Carousel } from "flowbite-react";

export function Carrousel() {
  return (
    <div className="h-20 ">
      <Carousel>
        <div className="flex w-3/4 h-full items-center justify-center bg-gray-400 ">
          Fecha 1
        </div>
        <div className="flex w-3/4 h-full items-center justify-center bg-gray-400 ">
          Fecha 2
        </div>
        <div className="flex w-3/4 h-full items-center justify-center bg-gray-400 ">
          Fecha 3
        </div>
      </Carousel>
    </div>
  );
}
