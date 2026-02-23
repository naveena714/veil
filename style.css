* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  height: 100vh;
  overflow: hidden;
  font-family: 'Poppins', sans-serif;
  background: radial-gradient(circle at top, #1b0033, #050012);
  color: white;
}

/* Cosmic gradient waves */
.cosmos {
  position: absolute;
  width: 200%;
  height: 200%;
  background:
    radial-gradient(circle at 30% 30%, rgba(255, 0, 255, 0.15), transparent 40%),
    radial-gradient(circle at 70% 40%, rgba(0, 200, 255, 0.15), transparent 40%),
    radial-gradient(circle at 50% 70%, rgba(255, 200, 255, 0.12), transparent 40%);
  animation: drift 40s infinite linear;
}

@keyframes drift {
  from { transform: translate(0,0); }
  to { transform: translate(-20%, -20%); }
}

/* Stars */
.stars::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: radial-gradient(white 1px, transparent 1px);
  background-size: 80px 80px;
  opacity: 0.2;
}

/* Center veil */
.veil {
  position: relative;
  z-index: 2;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  animation: fadeIn 3s ease;
}

.veil h1 {
  font-family: 'Playfair Display', serif;
  font-size: 5rem;
  background: linear-gradient(90deg, #ffb7ff, #b388ff, #6ecbff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 30px rgba(255, 180, 255, 0.6);
}

.veil p {
  margin-top: 15px;
  font-size: 1.2rem;
  opacity: 0.8;
  letter-spacing: 2px;
}

/* Button */
button {
  margin-top: 40px;
  padding: 15px 40px;
  border-radius: 50px;
  border: none;
  background: linear-gradient(135deg, #ff9ad5, #8f7cff);
  color: white;
  font-size: 1rem;
  cursor: pointer;
  box-shadow: 0 0 30px rgba(255, 154, 213, 0.6);
  transition: transform 0.4s, box-shadow 0.4s;
}

button:hover {
  transform: scale(1.1);
  box-shadow: 0 0 60px rgba(255, 154, 213, 0.9);
}

/* Floating orb */
.orb {
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: radial-gradient(circle, #ffd1ff, #9f7cff, transparent 70%);
  bottom: 10%;
  right: 15%;
  filter: blur(20px);
  animation: float 8s infinite ease-in-out;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-40px); }
}

@keyframes fadeIn {
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
}
