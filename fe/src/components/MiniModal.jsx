export default function MiniModal({setConfirmNunber}) {
  return (
    <div className="">
      <div className="flex justify-between px-2 w-full">
        <h1>Add Category</h1>
        <h1 onClick={()=>{setConfirmNunber(2)}}>X</h1>
      </div>
    </div>
  );
}
