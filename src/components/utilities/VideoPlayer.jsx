'use client'

import Youtube from 'react-youtube'
import {XCircle} from '@phosphor-icons/react'
import { useState } from 'react'
 
export default function VideoPlayer({ youtubeId }) {
    const [isOpen, setIsOpen] = useState(true)

    const videoHandler = () => {
        setIsOpen((prevState) => !prevState)
    }
    const option = {
        width: '350',
        height: '250'
    }

    const Player = () => {
        return (
        <div className='fixed bottom-2 right-2'>
            <button onClick={videoHandler}><XCircle size={32} color="#ec323e" weight="duotone"/></button>
            <Youtube
                videoId={youtubeId}
                onReady={(event) => event.target.pauseVideo}
                opts={option}
                onError={() => alert('Sorry, video trailer is broken.')}
            />
        </div>
        )
    }
    return isOpen ? <Player /> : null
}
