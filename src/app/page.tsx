import { SideBar, Header, List, Card, BackgroundDotted } from "./components/";

export default function HomePage() {
  return (
    <div className="
    grid grid-cols-[auto_1fr] grid-rows-[3rem_1fr] gap-x-2 
    h-[calc(100vh-8px)]
    ">
      <div className="col-span-2"><Header /></div>
      <div className="pl-2"><SideBar /></div>
      <div className="
      flex flex-col overflow-y-auto
      md:grid grid-cols-2 grid-rows-2 gap-2  md:overflow-hidden 
      rounded-xl relative mr-2 p-4 z-0
      ">
        <Card className="h-full">
          Weather
        </Card>
        <Card className="row-span-2">
          <List />
        </Card>
        <Card className="h-full">
          Pomodoro
        </Card>
        <BackgroundDotted />
      </div>
    </div>
  );
}
