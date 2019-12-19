import React from "react"

const MusicItem = props => {
    const { desc } = props
    return (
        <div className="music-item">
            {/* <span>375万</span> */}
            <div className="img-box">
                <img src={ desc.picUrl } alt=""/>
            </div>
            <p className="lines2">
                { desc.name }
            </p>
            <p className="author">{ desc.author }</p>
        </div>
    )
}

export default MusicItem