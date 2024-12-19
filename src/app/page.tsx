import { List, Card, Clock } from "@/components/.";

export default function HomePage() {
  return (
    <section
      className={`
      flex flex-col overflow-y-auto
      md:grid grid-cols-2 grid-rows-2 gap-6  md:overflow-hidden 
      rounded-xl relative mr-2 p-4 z-0

      // Background Dotted
      bg-c-woodsmoke bg-[radial-gradient(#4d4d4d,transparent_1px)] [background-size:24px_24px]
      `}
    >
      <Card className="h-full">Algo</Card>
      <Card className="row-span-2">
        <List />
      </Card>
      <Card className="h-full">
        {/* Pomodoro */}
        <Clock />
      </Card>
    </section>
  );
}
