import { PlusCircle } from 'lucide-react'

export const TimeZonesTab = () => {
  return (
    <section className="flex h-full w-full min-w-[360px] flex-col gap-4 overflow-y-auto p-4 text-c-snow">
      <header className="flex items-center justify-between">
        <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-c-snow">
          Time zones
        </h3>
        <button
          aria-label="Register new time zone"
          // onClick={createHabitFormModal.openModal}
        >
          <PlusCircle />
        </button>
      </header>

      {/* <Card>
        <p>Horas previas para marcar una tarea con alerta</p>
        <p>{`<Select/>`} con horas</p>
      </Card> */}
    </section>
  )
}
