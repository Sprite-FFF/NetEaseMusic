import React from 'react'
import ImageWall from '../../components/common/ImageWall'
import './index.scss'

const Detail = () => {
    return (
        <div className="post-detail">
            <h2>君不见黄河之水天上来</h2>
            <div className="author">
                <img src="http://imgsrc.baidu.com/forum/w=580/sign=ea715970798b4710ce2ffdc4f3cfc3b2/898ea9014c086e064d459e1a09087bf40bd1cb8d.jpg" alt=""/>
                <div>
                    <p>李太白</p>
                    <p>7-19 12:13</p>
                </div>
                <button>已关注</button>
            </div>
            <p className="content">
                君不见，黄河之水天上来，奔流到海不复回。
                君不见，高堂明镜悲白发，朝如青丝暮成雪。
                人生得意须尽欢，莫使金樽空对月。
                天生我材必有用，千金散尽还复来。
                烹羊宰牛且为乐，会须一饮三百杯。
                岑夫子，丹丘生，将进酒，杯莫停。
                与君歌一曲，请君为我倾耳听。
                钟鼓馔玉不足贵，但愿长醉不复醒。
                古来圣贤皆寂寞，惟有饮者留其名。
                陈王昔时宴平乐，斗酒十千恣欢谑。
                主人何为言少钱，径须沽取对君酌。
                五花马，千金裘，呼儿将出换美酒，与尔同销万古愁。
            </p>
            <ImageWall containerWidth={ 6.7 } />
            <div className="post-detail__bottom">
                <div className="topic">#Lolita#</div>
                <div>收起</div>
            </div>
        </div>
    )
}

export default Detail