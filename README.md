# 📸 Photo-Booth

A fun React app that lets users take a 4 photo strip with their webcam. It uses voice detection to trigger photos when you say “Go” and includes a manual capture button. The photos are combined vertically into a single downloadable strip.

https://photo-booth-pearl.vercel.app/


# 💻 How It Works
- Tech: React functional components + hooks

- Camera: Uses navigator.mediaDevices.getUserMedia to show live video

- Voice: Web Speech API (SpeechRecognition) listens for “Go” to start countdown & capture

- Capture: Countdown (3-2-1), then take 4 photos in a row

- Canvas: Combines 4 images vertically into one strip for display & download

- UI: Retro theme with SVG decorations, responsive for desktop & mobile

# ⚙️ Optimizations
- Minimizes unnecessary React re-renders with hooks

- Stops camera stream on component unmount to free resources

- Handles permission errors gracefully with user feedback

- Uses lightweight SVGs instead of heavy images

- Responsive layout for different screen sizes

# ✔️ Lessons Learned
- Powerful browser APIs enable rich multimedia apps without backend

- Small UI touches (countdown, animations, SVGs) improve user engagement

- React hooks simplify managing camera, countdown, and photo states but require careful dependency management

- Testing responsiveness on mobile and desktop is important
