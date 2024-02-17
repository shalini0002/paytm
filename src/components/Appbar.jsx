export const Appbar = () => {
  return (
    <>
      <div className="flex h-14 justify-between shadow">
        <div className="ml-4 flex flex-col justify-center font-bold text-2xl">
          Payments App
        </div>
        <div className="flex h-full mr-4 items-center justify-center">
          <div className="mr-4">Hello,</div>
          <div className="">User</div>
          <div className="rounded-full ml-4 flex items-center justify-center bg-slate-300 h-12 w-12 ">
            U
          </div>
        </div>
      </div>
    </>
  );
};
