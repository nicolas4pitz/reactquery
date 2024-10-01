import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

const getTodos = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  return response.json()
}

export default function App() {
  const {data} = useQuery({
    queryKey: ['todos'],
    queryFn: getTodos,
  })


  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <strong>👀 {data.subscribers_count}</strong>{' '}
      <strong>✨ {data.stargazers_count}</strong>{' '}
      <strong>🍴 {data.forks_count}</strong>
    </div>
  )
}