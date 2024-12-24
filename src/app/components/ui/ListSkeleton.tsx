export const ListSkeleton = () => {
  return (
    <>
      <div className="mx-auto w-full p-4">
        <div className="flex animate-pulse space-x-4">
          <div className="h-10 w-10 rounded-full bg-gray-200" /> {/* Circle */}
          <div className="flex-1 space-y-4 py-1">
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2 h-2 rounded bg-gray-200"></div>
                <div className="col-span-1 h-2 rounded bg-gray-200"></div>
              </div>
            </div>
            <div className="h-2 rounded bg-gray-200"></div>
          </div>
        </div>
      </div>
      <div className="mx-auto w-full p-4">
        <div className="flex animate-pulse space-x-4">
          <div className="h-10 w-10 rounded-full bg-gray-200" /> {/* Circle */}
          <div className="flex-1 space-y-4 py-1">
            <div className="h-2 rounded bg-gray-200"></div>
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-1 h-2 rounded bg-gray-200"></div>
                <div className="col-span-2 h-2 rounded bg-gray-200"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto w-full p-4">
        <div className="flex animate-pulse space-x-4">
          <div className="h-10 w-10 rounded-full bg-gray-200" /> {/* Circle */}
          <div className="flex-1 space-y-4 py-1">
            <div className="h-2 rounded bg-gray-200"></div>
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2 h-2 rounded bg-gray-200"></div>
                <div className="col-span-1 h-2 rounded bg-gray-200"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
