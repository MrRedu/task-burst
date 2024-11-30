import { SideBar, Header, List, Card } from "./components";

export default function HomePage() {
  return (
    <div className="flex gap-x-2 flex-wrap h-[calc(100vh-1.4rem)]">
      <div className="w-full "><Header /></div>
      <div className="h-[95%] pl-2 bg-red-400"><SideBar /></div>
      <div className="
      grow h-[95%] overflow-hidden rounded-xl relative mr-2 
      grid grid-cols-2 grid-rows-2 gap-2 p-4
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
        <div className="absolute inset-0 bg-bg-secondary bg-[radial-gradient(#4d4d4d,transparent_1px)] [background-size:24px_24px] -z-50" /> {/* <- Background dotted */}
      </div>
    </div>
  );
}
