'use client';

import { gql, useQuery } from '@apollo/client';
import client from '@/lib/apollo-client';

const GET_ALL_ORIPA = gql`
  query {
    getAllOripa {
      id
      name
      type
      createdAt
    }
  }
`;

export default function Home() {
  const { data, loading, error } = useQuery(GET_ALL_ORIPA, { client });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Oripa List</h1>
      <ul>
        {data.getAllOripa.map((oripa: any) => (
          <li key={oripa.id}>
            {oripa.name} ({oripa.type}) - {new Date(oripa.createdAt).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
}
