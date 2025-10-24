const Search = ({handleFltr}) => {
  return (
    <div className="mt-10 p-5 bg-slate-600/30 rounded-xl">
      <h2 className="text-2xl font-bold">Filter Tasks</h2>
      <div className="flex items-center justify-between p-3 gap-3">
        <button onClick={() => handleFltr("all")} className="bg-white/70 w-1/5 text-slate-900" >All Tasks</button>
        <button onClick={() => handleFltr("failed")} className="bg-red-500/80 w-1/5" >Failed</button>
        <button onClick={() => handleFltr("pending")} className="bg-pink-500/30 w-1/5" >Pending</button>
        <button onClick={() => handleFltr("notaccept")} className="bg-blue-500/50 w-1/5" >Not Accepted</button>
        <button onClick={() => handleFltr("completed")} className="bg-green-500/50 w-1/5" >Completed</button>
      </div>
    </div>
  );
};
export default Search;