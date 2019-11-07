import React, { useState, useEffect } from 'react'
import './index.scss'

const ImageWall = props => {
    const { images, containerWidth, className } = props
    const [ imageWidth, setImageWidth ] = useState(0)
    useEffect(() => {
        if(images.length === 1) {
            setImageWidth('100%')
            return
        }
        if( images.length === 2 || images.length === 4) {
            setImageWidth((containerWidth - 0.12) / 2 + 'rem')
            return
        }
        setImageWidth((containerWidth - 0.24) / 3 + 'rem')
    }, [images, containerWidth])
    return (
        <div style={ {width: containerWidth + 'rem'} } className={ `images ${ className }` }>
            {
                images.map(src => {
                    if(images.length === 1) {
                        return <img style={ {width: imageWidth} } src={ src } key={ src } alt="" />
                    }
                    return <div 
                    style={ 
                                { 
                                    width: imageWidth, 
                                    height: imageWidth,
                                    backgroundImage: `url('${ src }')`, 
                                    backgroundSize: 'cover' 
                                } 
                            }
                    // 四张图片时样式需要特殊处理
                    className={ images.length === 4 ? 'four' : 'other' }
                    key={ src }></div>
                })
            }
        </div>
    )
}

const PostItem = props => {
    const { className } = props
    const images = [
        'http://b-ssl.duitang.com/uploads/item/201810/05/20181005124014_nqsit.jpg',
        'http://b-ssl.duitang.com/uploads/item/201801/28/20180128185226_eymxr.jpeg',
        'http://attach.bbs.miui.com/forum/201106/22/11245452jo8o8qosoebtwb.jpg',
        'http://pic.rmb.bdstatic.com/bfd1eac02360e4c2176b0654b7fa598e.jpeg',
        // 'http://i0.hdslb.com/bfs/article/72b71f13be27e46798000af6fbb92d11db99c4e2.jpg',
        // 'http://b-ssl.duitang.com/uploads/item/201808/03/20180803191232_kbucf.jpg',
        // 'http://b-ssl.duitang.com/uploads/item/201509/12/20150912174254_Rr5jS.jpeg',
        // 'http://img2.imgtn.bdimg.com/it/u=2490587917,2502047405&fm=26&gp=0.jpg',
        // 'http://img0.imgtn.bdimg.com/it/u=2994864450,934824312&fm=26&gp=0.jpg'
    ]
    return(
        <div className={`post-item ${ className }`}>
            <div>
                <img src="http://b-ssl.duitang.com/uploads/item/201807/26/20180726113920_hwggs.jpg" alt=""/>
                <div>
                    <p>友人A</p>
                    <p>关注了帖子</p>
                </div>
            </div>
            <div className="post-item__content">
                <p>男生会主动搭讪一个长得很高并且颜值很高的女生吗？</p>
                <p className="lines2">身为一个174女生，从上了大学才开始有桃花运我真的枯了。以前初高中只能是那种暗恋别人不敢说的女配心酸酸。以一个女生视角来说真的会被搭讪的，而且喜欢我的几乎都是一米七多小眼睛可爱boy 所以男朋友和我也差不多高。。</p>
            </div>
            <ImageWall containerWidth={ 6.22 } images={ images } />
            <div className="post-item__comment">
                <span></span>
                <p>
                    <span>给你一锤：</span> 2019年4月会有一个版本升级，下个版本将会变更
                </p>
            </div>
            <div className="post-item__footer">
                <span>2019-01-01  18:20:45</span>
                <div>
                    <div>
                        <i className="iconfont icon-like"></i>
                        168
                    </div>
                    <div>
                        <i className="iconfont icon-message"></i>
                        24
                    </div>
                </div>
            </div>
        </div>
    )
}


export default PostItem