export default function louding() {
  return (
    <main className="w-[100vw] h-[100vh] flex justify-center items-center">
      <div className=" flex flex-col gap-5">
        <div className="flex justify-center gap-2">
          <img src="./Vector.png" alt="" />
          <h1 className="text-3xl font-bold">Geld</h1>
        </div>
        <div className="loading loading-spinner text-info ml-[50px]"></div>
        <div className="flex">
          {" "}
          <p>Түр хүлээнэ үү</p>
          <sub className="loading loading-dots loading-xs"></sub>
        </div>
      </div>
    </main>
  );
}
