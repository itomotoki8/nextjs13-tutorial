import Link from "next/link";

export default function Page() {
  return (
    <>
      <h1>Page2</h1>

      <Link href="/todos">todosへ</Link>
    </>
  );
}
