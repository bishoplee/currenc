import { useState, useEffect } from 'react'
import axios from 'axios'
// import { RAPID_API_KEY } from '@env'

// const rapidApiKey = RAPID_API_KEY
// const rapidApiKey = "8JmRixs3FwmshZMQ3A4mfpnTNWkCp1G1qk7jsn3gJ9j2VAGLsF"
const rapidApiKey = "dfc98f11fc831d71cf6a797e541bb2ef"

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, seterror] = useState(null)

  /* const options = {
    method: 'GET',
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    headers: {
      // 'X-RapidAPI-Key': '8JmRixs3FwmshZMQ3A4mfpnTNWkCp1G1qk7jsn3gJ9j2VAGLsF',
      'X-RapidAPI-Key': rapidApiKey,
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    },
    params: { ...query },
  }; */

  const options = {
    url: `http://api.exchangeratesapi.io/v1/${endpoint}?access_key=${rapidApiKey}`,
  };

  const fetchData = async () => {
    setIsLoading(true)

    try {
      const response = await axios.request(options)

      // setData(response?.data?.data)
      setData(response.data)
      setIsLoading(false)
    } catch (error) {
      seterror(error)
      alert("There was an error.")
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const refetch = () => {
    setIsLoading(true)
    fetchData()
  }

  return { data, isLoading, error, refetch }
}

export default useFetch