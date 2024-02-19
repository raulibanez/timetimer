function updateSector() {
  const TOTAL_DURATION_MINUTES = 60;
  const INITIAL_TIME_MINUTES = 15;
  const TOTAL_DURATION_MS = TOTAL_DURATION_MINUTES * 60 * 1000;
  let remainingTimeMS = INITIAL_TIME_MINUTES * 60 * 1000;
  const sector = document.getElementById("sector");
  const radius = 9.2;
  const knob = document.getElementById("knob");
  const alarm = document.getElementById("alarm");
  let volumeSlider = document.getElementById("volumeSlider");
  let startTime = Date.now() - (TOTAL_DURATION_MS - remainingTimeMS);
  let isMouseDown = false;
  
  volumeSlider.addEventListener("input", function() {
    alarm.volume = volumeSlider.value; // Set volume based on slider value
  });

  const calculateAngle = (clickX, clickY) => {
    let angle = Math.atan2(clickY, clickX) + Math.PI / 2;
    return angle < 0 ? angle + 2 * Math.PI : angle;
  };

  const setTimer = (angle) => {
    const timeFraction = angle / (2 * Math.PI);
    remainingTimeMS = TOTAL_DURATION_MINUTES * (1 - timeFraction) * 60 * 1000;
    startTime = Date.now() - (TOTAL_DURATION_MS - remainingTimeMS);
    animate();
  };

  const updateTimer = (event) => {
    const timerRect = document.getElementById("timer").getBoundingClientRect();
    const centerX = timerRect.left + timerRect.width / 2;
    const centerY = timerRect.top + timerRect.height / 2;
    const clickX = event.clientX - centerX;
    const clickY = event.clientY - centerY;

    setTimer(calculateAngle(clickX, clickY));
  };

  const updateHandAndSector = (angle, progress) => {
    const x = 16 + radius * Math.cos(angle);
    const y = 16 + radius * Math.sin(angle);
    const largeArcFlag = progress <= 0.5 ? 1 : 0;

    sector.setAttribute(
      "d",
      `M16,16 L16,${
        16 - radius
      } A${radius},${radius} 0 ${largeArcFlag},0 ${x},${y} z`
    );
    knob.setAttribute("transform", `rotate(${progress * 360} 16 16)`);

    const timerHand = document.getElementById("timerHand");
    timerHand.setAttribute("x2", x);
    timerHand.setAttribute("y2", y);
  };

  const animate = () => {
    const elapsedTime = Date.now() - startTime;
    const progress = elapsedTime / TOTAL_DURATION_MS;

    if (progress < 1) {
      updateHandAndSector(-Math.PI / 2 + 2 * Math.PI * progress, progress);
      requestAnimationFrame(animate);
    } else {
      sector.setAttribute("d", "");
      alarm.play();
    }
  };

  // Mouse and touch interactions

  const updateTimerTouch = (event) => {
    event.preventDefault(); // Prevent the default touch behavior
    const touch = event.touches[0]; // Get the first touch
    updateTimer(touch); // Use the touch event instead of the mouse event
  };

  const onMouseMove = (event) => isMouseDown && updateTimer(event);
  const onTouchMove = (event) => isMouseDown && updateTimerTouch(event);

  document.addEventListener("mousedown", (event) => {
    isMouseDown = true;
    updateTimer(event);
    document.addEventListener("mousemove", onMouseMove);
  });

  document.addEventListener("mouseup", () => {
    isMouseDown = false;
    document.removeEventListener("mousemove", onMouseMove);
  });

  document.addEventListener("touchstart", (event) => {
    isMouseDown = true;
    updateTimerTouch(event);
    document.addEventListener("touchmove", onTouchMove);
  });

  document.addEventListener("touchend", () => {
    isMouseDown = false;
    document.removeEventListener("touchmove", onTouchMove);
  });

  animate();
}

window.onload = updateSector;
