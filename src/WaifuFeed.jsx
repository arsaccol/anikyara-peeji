import useWaifus from './useWaifus.js'

function WaifuFeed() {
    const { waifus, loading, error } = useWaifus()
    
    const waifuUrls = waifus.files

    // these are grid items
    const waifuPics = waifuUrls?
        waifuUrls.map((url, i) => {
            return (
                <img 
                    src={url} 
                    key={i}
                    style={{
                        maxWidth:"200px",
                        maxHeight: "200px",
                        borderRadius:"10px",
                    }}
                >
                </img>
            )
        })
    :
        <></>

    return (
        <div 
            style={{
                maxWidth: "1280px",
            }}

        >
        {
            loading?
                <div>Loading...</div>
            :
            error?
                <div>An error occurred. No waifus could be loaded. :(</div>
            :
                <section 
                    className='waifu-feed'
                    style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
                        justifyItems: "center",
                        gridColumnGap: "10px",
                        gridRowGap: "5px",
                        margin: "auto",
                    }
                }>
                    {waifuPics}
                </section>
        }
        </div>
    )


}

export default WaifuFeed
