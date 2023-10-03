import Link from "next/link";
import { headers } from 'next/headers'

type Todo = {
  title: string;
};

async function getData() {
  const headersData = headers();
  const host:any = headersData.get('host');
  const protocol = headersData.get('x-forwarded-proto') ?? host.startWith('localhost') ? 'http' : 'https';
  const apiBase = `${protocol}://${host}`;
  const res = await fetch(`${apiBase}/api/todos`, {
    next: {
      revalidate: 10,
    },
  });
  return res.json();
}

export default async function Page() {
  const todos: Todo[] = await getData();

  return (
    <>
      <h1>Todos</h1>
      {todos.map((todo) => (
        <div key={todos.length}>{todo.title}</div>
      ))}
      <Link href="/">Home</Link>
    </>
  );
}
