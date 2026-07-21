export default function Glow() {
  return (
    <>
      <div className="absolute left-20 top-20 h-72 w-72 rounded-full bg-violet-600/20 blur-[120px]" />

      <div className="absolute right-20 bottom-20 h-96 w-96 rounded-full bg-blue-600/10 blur-[150px]" />

      <div className="absolute left-1/2 top-40 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-violet-500/10 blur-[180px]" />
    </>
  );
}