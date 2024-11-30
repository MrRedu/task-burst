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
      grid grid-cols-2 grid-rows-2 gap-2 p-4 z-0
      overflow-hidden rounded-xl relative mr-2 
      ">
        <Card>
          Weather
        </Card>
        <Card className="row-span-2">
          <List />
        </Card>
        <Card>
          Pomodoro
        </Card>
        <BackgroundDotted />
      </div>
    </div>
  );
}
