import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-[100vh] flex items-center justify-center flex-col">
      <h2 className="text-6xl text-primary mb-2 font-bold">404 | Not Found</h2>
      <p className="text-md font-quicksand">Could not find requested resource</p>
    </div>
  );
}
