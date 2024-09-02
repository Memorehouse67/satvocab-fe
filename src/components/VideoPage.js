import React, { useState, useRef } from 'react';

const VideoPage = () => {
    const [isMuted, setIsMuted] = useState(true);
    const videoRef = useRef(null);

    const toggleMute = () => {
        setIsMuted(!isMuted);
        if (videoRef.current) {
            videoRef.current.muted = !isMuted;
        }
    };

    return (
        <div style={styles.container}>
            <video 
                style={styles.video} 
                autoPlay 
                loop 
                muted={isMuted} 
                ref={videoRef}
            >
                <source src="/videos/video3.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <button style={styles.button} onClick={toggleMute}>
                {isMuted ? 'Unmute' : 'Mute'}
            </button>
            <p style={styles.textCenter}>Test</p> {/* Keep the text centered below the video */}
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column', // Align children vertically
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh', // Full height of the viewport
        backgroundColor: '#f0f0f0', // Clean background color
    },
    video: {
        width: '250px', // Set the width to 250 pixels
        height: '200px', // Set the height to 200 pixels
        borderRadius: '8px', // Rounded corners for aesthetics
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Subtle shadow for depth
    },
    textCenter: {
        textAlign: 'center', // Ensure the text is centered
    },
    button: {
        padding: '10px 20px',
        fontSize: '16px',
        margin: '10px',
        cursor: 'pointer',
    }
};

export default VideoPage;
