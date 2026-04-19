import { useState } from 'react'

export default function useSort(data) {
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: 'asc',
  })

  const sortedData = [...data].sort((a, b) => {
    if (!sortConfig.key) return 0

    const valueA = a[sortConfig.key]
    const valueB = b[sortConfig.key]

    if (valueA < valueB)
      return sortConfig.direction === 'asc' ? -1 : 1
    if (valueA > valueB)
      return sortConfig.direction === 'asc' ? 1 : -1
    return 0
  })

  const requestSort = (key) => {
    let direction = 'asc'
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc'
    }
    setSortConfig({ key, direction })
  }

  return { sortedData, requestSort, sortConfig }
}
