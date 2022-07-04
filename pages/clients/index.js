import React from 'react'
import Link from 'next/link'

function ClientPage() {
  const clients = [
    { id: 'bhums', name: 'Bhumi' },
    { id: 'hon', name: 'Honey' },
    { id: 'honey', name: 'Honey1' },
  ];

  return (
    <div>
      <h1>Hello Client!!!!! The project of clients given.</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link href={`/clients/${client.id}`}>{client.name}</Link>
          </li>
        ))}
      </ul>

    </div>
  )
}

export default ClientPage