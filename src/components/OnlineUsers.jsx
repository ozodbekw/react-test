function OnlineUsers() {
  return (
    <div className="hidden h-screen w-64 shrink-0 overflow-x-auto bg-success/20 bg-opacity-20 p-2 pt-10 dark:bg-opacity-20 lg:block">
      <h4 className="mb-5 text-xl font-medium">Users:</h4>
      <ul className="flex flex-col gap-4">
        <li className="text-md btn btn-ghost btn-outline btn-sm btn-block h-auto justify-start px-1 py-2 bg-transparent hover:bg-info-content dark:hover:text-white">
          <img className="w-10 h-10 rounded-full" src="./logo.svg" alt="" />
          <span className="mr-auto"> user 1</span>
          <span className="block h-3 w-3 rounded-full bg-green-400"></span>
        </li>
        <li className="text-md btn btn-ghost btn-outline btn-sm btn-block h-auto justify-start px-1 py-2 bg-transparent hover:bg-info-content dark:hover:text-white">
          <img className="w-10 h-10 rounded-full" src="./logo.svg" alt="" />
          <span className="mr-auto"> user 1</span>
          <span className="block h-3 w-3 rounded-full bg-green-400"></span>
        </li>
        <li className="text-md btn btn-ghost btn-outline btn-sm btn-block h-auto justify-start px-1 py-2 bg-transparent hover:bg-info-content dark:hover:text-white">
          <img className="w-10 h-10 rounded-full" src="./logo.svg" alt="" />
          <span className="mr-auto"> user 1</span>
          <span className="block h-3 w-3 rounded-full bg-green-400"></span>
        </li>
      </ul>
    </div>
  );
}

export default OnlineUsers;
