import React, { useEffect, useRef, useState } from 'react';

const retroFont = `'Courier New', Courier, monospace`;

const CurtainSVG = () => (
  <svg width="100%" height="60" viewBox="0 0 400 60" style={{ display: 'block' }}>
    <defs>
      <linearGradient id="curtainGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#a0522d" />
        <stop offset="100%" stopColor="#7b3f00" />
      </linearGradient>
    </defs>
    <rect x="0" y="0" width="400" height="60" fill="url(#curtainGrad)" />
    <path d="M0,60 Q50,40 100,60 T200,60 T300,60 T400,60 V0 H0 Z" fill="#8b4513" />
    <ellipse cx="30" cy="10" rx="18" ry="8" fill="#c19a6b" opacity="0.3" />
    <ellipse cx="370" cy="15" rx="15" ry="7" fill="#c19a6b" opacity="0.2" />
  </svg>
);

const LeavesFlowersSVG = () => (
  <svg width="100%" height="40" viewBox="0 0 400 40" style={{ display: 'block' }}>
    {/* Leaves */}
    <ellipse cx="40" cy="20" rx="18" ry="8" fill="#4caf50" opacity="0.7" />
    <ellipse cx="360" cy="25" rx="15" ry="7" fill="#388e3c" opacity="0.6" />
    {/* Flowers */}
    <circle cx="80" cy="15" r="5" fill="#f06292" />
    <circle cx="320" cy="10" r="4" fill="#ffd54f" />
    <circle cx="120" cy="30" r="3" fill="#fff176" />
    <circle cx="280" cy="28" r="4" fill="#ba68c8" />
  </svg>
);

const HangingStringSVG = () => (
  <svg width="100%" height="30" viewBox="0 0 400 30" style={{ display: 'block' }}>
    <line x1="200" y1="0" x2="200" y2="30" stroke="#8b4513" strokeWidth="4" strokeDasharray="6,4" />
  </svg>
);

const ButterfliesSVG = () => (
  <svg width="60" height="40" viewBox="0 0 60 40" style={{ position: 'absolute', top: -20, left: -30, zIndex: 10 }}>
    <g>
      <ellipse cx="20" cy="20" rx="8" ry="12" fill="#ffb6b9" opacity="0.8" />
      <ellipse cx="40" cy="20" rx="8" ry="12" fill="#f8e9a1" opacity="0.8" />
      <circle cx="30" cy="20" r="4" fill="#fff" />
      <rect x="28" y="16" width="4" height="8" fill="#bdbdbd" rx="2" />
    </g>
  </svg>
);

const SparklesSVG = () => (
  <svg width="80" height="40" viewBox="0 0 80 40" style={{ position: 'absolute', bottom: -10, right: -30, zIndex: 10 }}>
    <g>
      <circle cx="10" cy="10" r="2" fill="#fffde4" />
      <circle cx="30" cy="20" r="1.5" fill="#fffde4" />
      <circle cx="60" cy="15" r="2.5" fill="#fffde4" />
      <circle cx="70" cy="30" r="1" fill="#fffde4" />
    </g>
  </svg>
);

const VinesSVG = () => (
  <svg width="100%" height="30" viewBox="0 0 400 30" style={{ position: 'absolute', top: -18, left: 0, zIndex: 5 }}>
    <path d="M0,20 Q100,0 200,20 T400,20" stroke="#388e3c" strokeWidth="3" fill="none" />
    <ellipse cx="50" cy="10" rx="8" ry="3" fill="#4caf50" />
    <ellipse cx="350" cy="15" rx="7" ry="2.5" fill="#4caf50" />
  </svg>
);

const TapeSVG = ({ style }) => (
  <svg width="60" height="24" viewBox="0 0 60 24" style={{ ...style, position: 'absolute', zIndex: 20 }}>
    <rect x="0" y="0" width="60" height="24" rx="8" fill="#ffe082" stroke="#bdb76b" strokeWidth="2" />
    <ellipse cx="30" cy="12" rx="18" ry="6" fill="#fffde4" opacity="0.5" />
  </svg>
);

const WoodyPanel = ({ children, style, tapePosition }) => (
  <div
    style={{
      background: '#fff8e1',
      border: '8px solid #8b5c2a',
      borderRadius: 24,
      boxShadow: '0 8px 32px 0 rgba(0,0,0,0.4)',
      padding: 32,
      maxWidth: 340,
      width: '100%',
      margin: '0 auto 32px auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      position: 'relative',
      ...style,
    }}
  >
    {tapePosition === 'left' && <TapeSVG style={{ left: 16, top: -18 }} />}
    {tapePosition === 'right' && <TapeSVG style={{ right: 16, top: -18 }} />}
    {children}
  </div>
);

const HeartButton = ({ onClick, disabled, flashing }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    style={{
      background: 'none',
      border: 'none',
      outline: 'none',
      cursor: disabled ? 'not-allowed' : 'pointer',
      padding: 0,
      margin: '8px 0 20px 0',
      position: 'relative',
      width: 110,
      height: 90,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transform: flashing ? 'scale(1.08)' : 'scale(1)',
      transition: 'transform 0.1s',
    }}
  >
    <svg
      width="100"
      height="80"
      viewBox="0 0 100 80"
      style={{ display: 'block', filter: disabled ? 'grayscale(0.7) opacity(0.6)' : 'none' }}
    >
      <defs>
        <radialGradient id="heartShine" cx="30%" cy="30%" r="80%">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.7" />
          <stop offset="60%" stopColor="#e57373" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#b22222" stopOpacity="0.8" />
        </radialGradient>
      </defs>
      <path
        d="M50 75 Q10 50 20 28 Q30 8 50 25 Q70 8 80 28 Q90 50 50 75 Z"
        fill="url(#heartShine)"
        stroke="#b22222"
        strokeWidth="3"
        filter="drop-shadow(0 4px 12px #b2222240)"
      />
      {/* Shine */}
      <ellipse cx="40" cy="35" rx="10" ry="4" fill="#fff" opacity="0.5" />
    </svg>
    {/* Ripple effect */}
    {flashing && (
      <span style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        width: 140,
        height: 120,
        background: 'rgba(255,105,135,0.18)',
        borderRadius: '50%',
        transform: 'translate(-50%, -50%)',
        animation: 'ripple 0.3s',
        pointerEvents: 'none',
        zIndex: 2,
      }} />
    )}
    <style>{`
      @keyframes ripple {
        0% { opacity: 0.7; transform: translate(-50%, -50%) scale(0.7); }
        100% { opacity: 0; transform: translate(-50%, -50%) scale(1.2); }
      }
    `}</style>
  </button>
);

const VoicePhotoBooth = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [stream, setStream] = useState(null);
  const [photos, setPhotos] = useState([]);
  const [countdown, setCountdown] = useState(null);
  const [listening, setListening] = useState(true);
  const [capturing, setCapturing] = useState(false);
  const [combinedUrl, setCombinedUrl] = useState(null);
  const [cameraError, setCameraError] = useState('');
  const [flash, setFlash] = useState(false);

  // Initialize camera
  useEffect(() => {
    async function getCamera() {
      try {
        const s = await navigator.mediaDevices.getUserMedia({ video: true });
        setStream(s);
        setCameraError('');
        if (videoRef.current) {
          videoRef.current.srcObject = s;
        }
      } catch (err) {
        setCameraError('Could not access camera: ' + err.message);
        console.error('Camera error:', err);
      }
    }
    getCamera();
    return () => {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
    };
    // eslint-disable-next-line
  }, []);

  // Attach stream to video
  useEffect(() => {
    if (videoRef.current && stream) {
      videoRef.current.srcObject = stream;
    }
  }, [stream]);

  // Voice recognition setup
  useEffect(() => {
    if (!('webkitSpeechRecognition' in window || 'SpeechRecognition' in window)) {
      alert('Speech Recognition not supported in this browser.');
      return;
    }
    if (!listening || photos.length >= 4) return;
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = false;
    recognition.lang = 'en-US';
    recognition.onresult = (event) => {
      for (let i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
          const transcript = event.results[i][0].transcript.trim().toLowerCase();
          if (transcript.includes('go')) {
            recognition.stop();
            setListening(false);
            startCountdown();
            break;
          }
        }
      }
    };
    recognition.onerror = (e) => {
      // Restart on error
      recognition.stop();
      setTimeout(() => setListening(true), 1000);
    };
    recognition.onend = () => {
      if (listening && photos.length < 4) {
        recognition.start();
      }
    };
    recognition.start();
    return () => recognition.abort();
    // eslint-disable-next-line
  }, [listening, photos.length]);

  // Countdown logic
  const startCountdown = () => {
    setCapturing(true);
    let count = 3;
    setCountdown(count);
    const interval = setInterval(() => {
      count--;
      setCountdown(count);
      if (count === 0) {
        clearInterval(interval);
        setCountdown(null);
        setTimeout(() => {
          setFlash(true);
          setTimeout(() => setFlash(false), 250);
          capturePhoto();
        }, 500);
      }
    }, 1000);
  };

  // Manual photo button handler
  const handleManualPhoto = () => {
    if (!capturing && photos.length < 4 && !cameraError) {
      setListening(false);
      startCountdown();
    }
  };

  // Capture photo
  const capturePhoto = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (video && canvas) {
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      const url = canvas.toDataURL('image/png');
      setPhotos(prev => {
        const newPhotos = [...prev, url];
        if (newPhotos.length === 4) {
          setTimeout(() => combineImages(newPhotos), 500);
        }
        return newPhotos;
      });
      setTimeout(() => {
        setCapturing(false);
        if (photos.length < 3) {
          setListening(true);
        }
      }, 2000);
    }
  };

  // Combine images vertically
  const combineImages = (imgs) => {
    const imgEls = [];
    let loaded = 0;
    imgs.forEach((src, i) => {
      const img = new window.Image();
      img.src = src;
      img.onload = () => {
        loaded++;
        if (loaded === imgs.length) {
          const width = Math.max(...imgEls.map(im => im.width));
          const height = imgEls.reduce((sum, im) => sum + im.height, 0);
          const comboCanvas = document.createElement('canvas');
          comboCanvas.width = width;
          comboCanvas.height = height;
          const ctx = comboCanvas.getContext('2d');
          let y = 0;
          imgEls.forEach(im => {
            ctx.drawImage(im, 0, y, im.width, im.height);
            y += im.height;
          });
          setCombinedUrl(comboCanvas.toDataURL('image/png'));
        }
      };
      imgEls[i] = img;
    });
  };

  // Download combined image
  const downloadImage = () => {
    if (!combinedUrl) return;
    const a = document.createElement('a');
    a.href = combinedUrl;
    a.download = 'photobooth.png';
    a.click();
  };

  // Woody/leafy background + vignette + paper texture
  const mainBg = `linear-gradient(135deg, #c9b29b 0%, #a67c52 100%)`;
  const borderColor = '#8b5c2a';
  const buttonRing = '#8b5c2a';
  const buttonHover = '#e57373';
  const vignette = 'radial-gradient(ellipse at center, rgba(0,0,0,0) 60%, rgba(0,0,0,0.18) 100%)';
  const paperTexture = 'url("https://www.transparenttextures.com/patterns/paper-fibers.png")';

  // Responsive: side-by-side on desktop, stacked on mobile
  const isMobile = window.innerWidth < 700;

  return (
    <div style={{
      minHeight: '100vh',
      background: `${mainBg}, ${vignette}`,
      backgroundBlendMode: 'multiply',
      backgroundImage: `${mainBg}, ${vignette}, ${paperTexture}`,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      fontFamily: retroFont,
      letterSpacing: 1,
      padding: 0,
      transition: 'background 0.5s',
      position: 'relative',
      overflowX: 'hidden',
    }}>
      <div style={{ width: '100%', maxWidth: 900, margin: '0 auto', position: 'relative', zIndex: 2 }}>
        <CurtainSVG />
        <HangingStringSVG />
      </div>
      <div style={{ width: '100%', maxWidth: 900, margin: '0 auto', position: 'relative', zIndex: 2 }}>
        <LeavesFlowersSVG />
        <VinesSVG />
        <ButterfliesSVG />
        <SparklesSVG />
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          justifyContent: 'center',
          alignItems: isMobile ? 'center' : 'flex-start',
          width: '100%',
          maxWidth: 900,
          margin: '0 auto',
          gap: isMobile ? 0 : 32,
        }}
      >
        {/* Left: Photobooth */}
        <WoodyPanel style={{ minWidth: 280, flex: 1, margin: isMobile ? '0 auto 24px auto' : '0 0 0 0', top: -30 }} tapePosition="left">
          <h2 style={{
            color: borderColor,
            fontFamily: retroFont,
            fontWeight: 'bold',
            fontSize: 32,
            marginBottom: 12,
            letterSpacing: 2,
            textShadow: '2px 2px 0 #fff, 0 0 8px #b22222',
          }}>
            <span role="img" aria-label="camera">📸</span> Photo Booth
          </h2>
          {cameraError && (
            <div style={{ color: '#b22222', fontWeight: 'bold', marginBottom: 16, fontSize: 16, textAlign: 'center' }}>
              {cameraError}<br />
              <span style={{ fontSize: 13, color: '#555' }}>Check your browser permissions and make sure you are on <b>localhost</b> in Chrome.</span>
            </div>
          )}
          <div style={{ position: 'relative', width: '100%' }}>
            <video
              ref={videoRef}
              autoPlay
              playsInline
              style={{
                width: '100%',
                borderRadius: 16,
                border: `3px solid ${borderColor}`,
                marginBottom: 12,
                boxShadow: '0 4px 16px 0 rgba(0,0,0,0.25)',
                background: '#000',
                display: cameraError ? 'none' : 'block',
                zIndex: 1,
              }}
            />
            {flash && !cameraError && (
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'rgba(255,255,255,0.85)',
                borderRadius: 16,
                pointerEvents: 'none',
                zIndex: 2,
                transition: 'opacity 0.2s',
              }} />
            )}
          </div>
          <canvas ref={canvasRef} style={{ display: 'none' }} />
          {countdown !== null && !cameraError && (
            <div style={{
              fontSize: 64,
              fontWeight: 'bold',
              color: borderColor,
              margin: 16,
              textShadow: '2px 2px 0 #fff',
              fontFamily: retroFont,
            }}>{countdown}</div>
          )}
          <div style={{ margin: '16px 0', minHeight: 24, fontSize: 18 }}>
            {!cameraError && photos.length < 4 && !capturing && (
              <span style={{ color: '#333' }}>Say <b>"Go"</b> or press the button to take a photo ({photos.length}/4)</span>
            )}
            {!cameraError && capturing && <span style={{ color: borderColor }}>Get ready!</span>}
            {!cameraError && photos.length === 4 && <span style={{ color: '#388e3c' }}>All done!</span>}
          </div>
          <HeartButton
            onClick={handleManualPhoto}
            disabled={capturing || photos.length >= 4 || !!cameraError}
            flashing={flash}
          />
        </WoodyPanel>
        {/* Right: Taken photos/strip/result */}
        <WoodyPanel style={{ minWidth: 220, flex: 1, margin: isMobile ? '0 auto' : '0 0 0 0', top: isMobile ? 0 : -30, background: '#fffbe8' }} tapePosition="right">
          <h3 style={{
            color: borderColor,
            fontFamily: retroFont,
            fontWeight: 'bold',
            fontSize: 22,
            marginBottom: 10,
            letterSpacing: 1,
            textShadow: '1px 1px 0 #fff',
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            justifyContent: 'center',
          }}>
            <span role="img" aria-label="heart">❤️</span> Captured Memories <span role="img" aria-label="heart">❤️</span>
          </h3>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 10,
            alignItems: 'center',
            marginBottom: 16,
            width: '100%',
          }}>
            {photos.map((url, i) => (
              <img
                key={i}
                src={url}
                alt={`Snapshot ${i + 1}`}
                style={{
                  width: '90%',
                  borderRadius: 8,
                  border: `2px solid ${borderColor}`,
                  boxShadow: '0 2px 8px 0 rgba(0,0,0,0.12)',
                  background: '#fff',
                  marginBottom: 4,
                }}
              />
            ))}
          </div>
          {combinedUrl && (
            <div style={{ margin: '16px 0', width: '100%' }}>
              <div style={{
                background: '#fff',
                border: `3px dashed ${borderColor}`,
                borderRadius: 12,
                padding: 8,
                marginBottom: 8,
                boxShadow: '0 2px 8px 0 rgba(0,0,0,0.10)',
              }}>
                <img
                  src={combinedUrl}
                  alt="Photobooth strip"
                  style={{
                    width: '100%',
                    border: `2px solid ${borderColor}`,
                    borderRadius: 8,
                    background: '#fff',
                  }}
                />
              </div>
              <button
                onClick={downloadImage}
                style={{
                  background: buttonRing,
                  color: '#fff',
                  fontFamily: retroFont,
                  fontSize: 18,
                  border: 'none',
                  borderRadius: 10,
                  padding: '10px 28px',
                  marginTop: 4,
                  cursor: 'pointer',
                  boxShadow: '0 2px 8px 0 rgba(0,0,0,0.18)',
                  transition: 'background 0.2s',
                }}
                onMouseOver={e => e.currentTarget.style.background = buttonHover}
                onMouseOut={e => e.currentTarget.style.background = buttonRing}
              >
                Download Strip
              </button>
            </div>
          )}
        </WoodyPanel>
      </div>
      <div style={{
        position: 'absolute',
        bottom: 10,
        right: 18,
        fontSize: 12,
        color: '#b22222',
        opacity: 0.7,
        fontFamily: retroFont,
      }}>
        <span role="img" aria-label="sparkle">✨</span> Retro Photobooth
      </div>
    </div>
  );
};

export default VoicePhotoBooth;
