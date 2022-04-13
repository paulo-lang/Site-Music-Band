import React, { useState, useEffect } from "react"
import axios from "axios"
import './styles.css'
import api from "../../services/api"

const Media = () => {

    const [photos, setPhotos] = useState([])
    const [videos, setVideos] = useState([])

    useEffect(() => {
        var links = document.getElementsByClassName('link')
        for (let i = 0; i < links.length; i++) {
            links[i].style.color = "#5ae1e6"
        }
        document.getElementsByClassName('header')[0].style.backgroundColor = "#0b2047"
        console.log('photos')

        api.get('medias').then(response=>{
            setPhotos(response.data)
        })
    }, [])

    function changeColor(e, name) {
        e.target.style.color = "#5ae1e6"
        document.getElementById(name).style.color = "#c5c5c5"
    }

    return (
        <div>
            <div className="media-container-header">
                <div id="photo" onClick={(e) => { changeColor(e, "video") }} className="media-container-title">Fotos</div>
                <div className="separator" />
                <div id="video" onClick={(e) => { changeColor(e, "photo") }} className="media-container-title">Vídeos</div>
            </div>

            <div className="feed-container">
                <ul>
                    {photos.map(photo => (
                        <li style={{height:540, width:380}} key={photo.id}>
                            <img height={540} width={380} src={'https://drive.google.com/uc?export=view&id='+photo.link}/>
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    )
}



export default Media