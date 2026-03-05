const Announcements = () => {
  return (
    <div className="bg-white p-4 rounded-md">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Announcements</h1>
        <span className="text-xs text-gray-400">View All</span>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <div className="bg-tofunmiSkyLight rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">School Fees Payment closes</h2>
            <span className="text-xs text-gray-400 bg-white px-1 py-1 rounded-md">2 days ago</span>
          </div>
          <p className="text-sm text-gray-400 mt-1">
            Please ensure all school fees are paid before the deadline to avoid any inconveniences.
          </p>
        </div>
        <div className="bg-tofunmiPurpleLight rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Exam starts soon</h2>
            <span className="text-xs text-gray-400 bg-white px-1 py-1 rounded-md">14 days ago</span>
          </div>
          <p className="text-sm text-gray-400 mt-1">
            The examination period is approaching. Please prepare accordingly and check the timetable for details.
          </p>
        </div>
        <div className="bg-tofunmiYellowLight rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Pay for final year week</h2>
            <span className="text-xs text-gray-400 bg-white px-1 py-1 rounded-md">2 days ago</span>
          </div>
          <p className="text-sm text-gray-400 mt-1">
            Final year week is approaching. Please ensure all payments are made on time to participate in the events.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Announcements