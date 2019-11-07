import React from 'react'
import './index.scss'

const Edit = () => {
    return (
        <div className="edit">
            <div className="edit-title">
                <button>取消</button>
                <button>发布</button>
            </div>
            <div className="edit-content">
                <div>
                    <input type="text"/>
                </div>
                <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>
            <div className="edit-upload"></div>
            <div className="edit-topic"></div>
        </div>
    )
}

export default Edit