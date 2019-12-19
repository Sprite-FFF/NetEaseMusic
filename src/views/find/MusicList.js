import React, { useState } from 'react'
import MusicItem from './MusicItem'
const MusicList = props => {
    const { recommends, albums, songs } = props
    const [ flag, setFlag ] = useState(0)
    const handleChange = (f) => {
        if(f === flag) {
            return
        }
        setFlag(f)
    }
    return (
        <div className="music-list">
            <h2>
                推荐歌单
                <button>歌单广场</button>
            </h2>
            <div className="recommand">
                {
                    recommends.map(el => <MusicItem desc={ el } key={ el.id } />)
                }
            </div>
            <h2>
                <p>
                    <span onClick={ () => handleChange(0) } className={ flag ? '' : 'active' }>新碟</span>
                    <span> | </span>
                    <span onClick={ () => handleChange(1) } className={ flag ? 'active' : '' }>新歌</span>
                </p>
                <button style={{ display: flag ? 'none' : 'block' }}>更多新碟</button>
                <button style={{ display: flag ? 'block' : 'none' }}>新歌推荐</button>
            </h2>
            <div style={{ display: flag ? 'none' : 'flex' }} className="new">
                {
                    albums.map(el => <MusicItem key={ el.id } desc={ el } />)
                }
            </div>
            <div style={{ display: flag ? 'flex' : 'none' }} className="new">
                {
                    songs.slice(0, 3).map(el => <MusicItem key={ el.id } desc={ el } />)
                }
            </div>
        </div>
    )
}

export default MusicList