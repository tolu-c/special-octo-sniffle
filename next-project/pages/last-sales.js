import { useEffect, useState } from "react"
import useSWR from 'swr'

export default function LastSalesPage() {
  const [sales, setSales] = useState()
  // const [isLoading, setIsLoading] = useState(false)

  const { data, error } = useSWR('https://nextjscourse-59cfb-default-rtdb.firebaseio.com/sales.json')
  console.log(data);

  useEffect(() => {
    if (data) {
      const transformedSales = []

      for (const key in data) {
        transformedSales.push({
          id: key,
          username: data[key].username,
          volume: data[key].volume,
        });
      }

      setSales(transformedSales)
    }
  }, [data])
  console.log(sales);

  // useEffect(() => {
  //   setIsLoading(true)
  //   fetch('https://nextjscourse-59cfb-default-rtdb.firebaseio.com/sales.json').then(response => response.json()).then(data => {
  //     const transformData = []
  //     for (const key in data) {
  //       transformData.push({
  //         id: key,
  //         username: data[key].username,
  //         volume: data[key].volume
  //       })
  //     }

  //     setSales(transformData)
  //     setIsLoading(false)
  //   })
  // }, [])

  if (error) {
    return <p>Failed to load data.</p>
  }

  if (!data || !sales) {
    return <p>Loading your data.. Hang in there for a second.</p>
  }

  return (
    <ul>
      {sales.map((sale) => (
        <li key={sale.id}>
          {sale.username} - ${sale.volume}
        </li>
      ))}
    </ul>
  )
}