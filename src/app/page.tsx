import { SideBar, Header, List } from "./components";

export default function HomePage() {
  return (
    <div className="flex gap-x-2 flex-wrap h-[calc(100vh-1.4rem)]">
      <div className="w-full "><Header /></div>
      <div className="h-[95%] pl-2 bg-red-400"><SideBar /></div>
      <div className="grow h-[95%] overflow-hidden rounded-xl relative">
        <div
          className="absolute inset-0 bg-bg-secondary 
          bg-[radial-gradient(#4d4d4d,transparent_1px)] [background-size:24px_24px] -z-50"
        ></div>
        <List />
      </div>
    </div>
  );
}
