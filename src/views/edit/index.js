import React from 'react'
import './index.scss'
import Uploader from '../../components/edit/uplaoder'
const Edit = () => {
    return (
        <div className="edit">
            <div className="edit-title">
                <button>取消</button>
                <button>发布</button>
            </div>
            <div className="edit-content">
                <div>
                    <input placeholder="请输入标题" type="text"/>
                </div>
                <textarea placeholder="请输入正文" name="" id="" cols="30" rows="10"></textarea>
            </div>
            <Uploader className="edit-upload" />
            <div className="edit-topic"></div>
        </div>
    )
}

export default Edit