import { useState } from 'react'

export default function useSearch(data, keys) {
  const [query, setQuery] = useState('')

  const filteredData = data.filter(item =>
    keys.some(key =>
      String(item[key])
        .toLowerCase()
        .includes(query.toLowerCase())
    )
  )

  return { query, setQuery, filteredData }
}
