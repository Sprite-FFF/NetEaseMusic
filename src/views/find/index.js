import React, { useState, useEffect } from 'react'
import { Carousel } from 'antd-mobile'
import Menu from './Menu'
import MusicList from './MusicList'
import Service from '../../service'
import './index.scss'

const slideImages = [
    'http://b.zol-img.com.cn/desk/bizhi/start/1/1348732363167.jpeg',
    'http://b-ssl.duitang.com/uploads/item/201801/07/20180107005803_VJs5Z.thumb.700_0.jpeg',
    'http://b-ssl.duitang.com/uploads/item/201801/07/20180107012314_t2JBd.jpeg'
]
const Find = () => {
    const [ images ] = useState(slideImages)
    const [ imageHeight ] = useState(150)
    const [ slideIndex, setSlideIndex ] = useState(1)
    const [ recommends, setRecommends ] = useState([])
    const [ topAlbum, setTopAlbum ] = useState([])
    const [ newSongs, setNewSongs ] = useState([])
    const getRecommends = () => {
        Service.recommendMusicList()
            .then(result => {
                if (result.code === 200) {
                    console.log(result.recommend)
                    setRecommends(result.recommend)
                }
            })
            .catch()
    }
    const getTopAlbum = () => {
        Service.topAlbum({ offset: 1, limit: 3 })
            .then(result => {
                if (result.code === 200) {
                    setTopAlbum(result.albums.map(el => {
                        return {
                            id: el.id,
                            name: el.name,
                            author: el.artists[0].name,
                            picUrl: el.picUrl
                        }
                    }))
                }
            })
            .catch()
    }
    const getNewSongs = () => {
        Service.newSongs()
            .then(result => {
                if (result.code === 200) {
                    setNewSongs(result.result.map(el => {
                        return {
                            id: el.id,
                            name: el.name,
                            author: el.song.artists[0].name,
                            picUrl: el.picUrl
                        }
                    }))
                }
            })
    }
    useEffect(() => {
        getRecommends()
        getTopAlbum()
        getNewSongs()
    },[])
    return (
        <div className="find-container">
            <div className="carousel-container">
                <Carousel className="carousel"
                    frameOverflow="visible"
                    cellSpacing={0}
                    slideWidth={1}
                    autoplay
                    infinite
                    // beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                    afterChange={index => setSlideIndex({ slideIndex: index })}
                >
                    {images.map((val, index) => (
                        <a
                            key={val}
                            href="/find"
                            style={{
                                display: 'block',
                                position: 'relative',
                                top: slideIndex === index ? -10 : 0,
                                height: imageHeight,
                                boxShadow: '2px 1px 1px rgba(0, 0, 0, 0.2)',
                            }}
                        >
                            <img
                                src={ val }
                                alt=""
                                style={{ width: '100%', verticalAlign: 'top' }}
                                onLoad={() => {
                                    // fire window resize event to change height
                                    window.dispatchEvent(new Event('resize'));
                                    // setImageHeight('auto');
                                }}
                            />
                        </a>
                    ))}
                </Carousel>
            </div>
            <Menu />
            <MusicList recommends={ recommends } albums={ topAlbum } songs={ newSongs }/>
        </div>
    )
}

export default Find