import Link from "next/link";

export default function Clientspage() {
  const clients = [
    {
      id: "Max",
      name: "Maximilan",
    },
    {
      id: "manuel",
      name: "Manuel",
    },
  ];
  return (
    <>
      <h1>The Clients Page</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link
              href={{
                pathname: "/clients/[id]",
                query: { id: client.id },
              }}
            >
              {client.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
