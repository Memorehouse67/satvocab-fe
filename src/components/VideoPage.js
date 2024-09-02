import React from 'react';

const VideoPage = () => {
    return (
        <div style={styles.container}>
            <video style={styles.video} autoPlay muted>
                {/* Update this path to match the location of your video */}
                <source src="/videos/video3.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
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
        width: '80%', // Adjust the width as needed
        maxWidth: '800px', // Maximum width for the video
        borderRadius: '8px', // Rounded corners for aesthetics
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Subtle shadow for depth
    },
    textCenter: {
        textAlign: 'center', // Ensure the text is centered
    }
};

export default VideoPage;
