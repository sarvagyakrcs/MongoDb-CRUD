"use client"
import { QueryClient, QueryClientProvider as ClientQuery } from '@tanstack/react-query'

const QueryClientProvider = ({ children }) => {
    const queryClient = new QueryClient()
  return (
    <ClientQuery client={queryClient}>
      {children}
    </ClientQuery>
  )
}

export default QueryClientProvider