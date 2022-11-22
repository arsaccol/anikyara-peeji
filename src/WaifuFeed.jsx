import { useState } from 'react'
import useWaifus from './useWaifus.js'

function WaifuFeed() {
    const { waifus, loading, error } = useWaifus()
    
    const waifuUrls = waifus.files

    const waifuPics = waifuUrls?
        waifuUrls.map(url => {
            return <img src={url}></img>
        })
    :
        <></>

    return (
        loading?
            <div>Loading...</div>
        :
        error?
            <div>An error occurred. No waifus could be loaded. :(</div>
        :
            <section className='waifu-feed'>{waifuPics}</section>
    )


}

export default WaifuFeed
