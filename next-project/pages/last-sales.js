import { useEffect, useState } from "react"

export default function LastSalesPage() {
  const [sales, setSales] = useState()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    fetch('https://nextjscourse-59cfb-default-rtdb.firebaseio.com/sales.json').then(response => response.json()).then(data => {
      const transformData = []
      for (const key in data) {
        transformData.push({
          id: key,
          username: data[key].username,
          volume: data[key].volume
        })
      }

      setSales(transformData)
      setIsLoading(false)
    })
  }, [])

  if (isLoading) {
    return <p>Loading... Just hang in there for a second.</p>
  }

  if (!sales) {
    return <p>No sales here.</p>
  }
  
  return <ul>
    {sales.map(sale => <li key={sale.id}>{sale.username} - ${sale.volume}</li>)}
  </ul>
}