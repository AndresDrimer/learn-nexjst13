import Link from "next/link";

function Header() {
  return (
    <header className="p-5 bg-blue-300">
    
      <p className="text-5xl text-center font-bold text-white tracking-widest
       p-2 hover:scale-105">Hello from Header</p>
       <div className="w-full flex justify-center space-x-12">
       <Link href="/" className="rounded-lg bg-white px-2 py-1 hover:bg-gray-200"> home </Link>
       <Link href="/todos" className="rounded-lg bg-white px-2 py-1 hover:bg-gray-200"> Todos </Link>
       <Link href="/search" className="rounded-lg bg-white px-2 py-1 hover:bg-gray-200"> Search </Link></div>
    </header>
  );
}

export default Header;
