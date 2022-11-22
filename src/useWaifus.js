import { useEffect, useState } from 'react'
import axios from 'axios'

const WAIFU_URL = import.meta.env.VITE_WAIFU_URL
console.log(`WAIFU_URL: ${WAIFU_URL}`)

function useWaifus() {
    const [waifus, setWaifus] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(undefined)

    useEffect( () => {
        async function getWaifuPics() {
            try {
                setLoading(true)

                const { data }  = await (axios.post(WAIFU_URL, {exclude: []}))
                setWaifus(data)
                setLoading(false)
                setError(false)
            }
            catch(err) {
                console.log(err)
                setLoading(false)
                setError(true)
            }
        }

        getWaifuPics()
    }, [])


    return { waifus, loading, error }
}

export default useWaifus
