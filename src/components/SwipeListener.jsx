import { useRef, useState } from 'react';

export default function SwipeListener({ onSwipeLeft, onSwipeRight }) {
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchStartY, setTouchStartY] = useState(0);
  const [isSwiping, setIsSwiping] = useState(false);

  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchStartX(e.targetTouches[0].clientX);
    setTouchStartY(e.targetTouches[0].clientY);
    setIsSwiping(false); // reset
  };

  const onTouchMove = (e) => {
    const touchX = e.targetTouches[0].clientX;
    const touchY = e.targetTouches[0].clientY;

    const deltaX = touchStartX - touchX;
    const deltaY = touchStartY - touchY;

    // se o movimento horizontal for maior, bloqueia o scroll vertical
    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      setIsSwiping(true);
      e.preventDefault(); // 🔑 impede o "tremor"
    }
  };

  const onTouchEnd = (e) => {
    if (!isSwiping) return; // se foi vertical, deixa o scroll rolar

    const touchEndX = e.changedTouches[0].clientX;
    const deltaX = touchStartX - touchEndX;

    if (deltaX > minSwipeDistance) {
      onSwipeLeft && onSwipeLeft();
    }
    if (deltaX < -minSwipeDistance) {
      onSwipeRight && onSwipeRight();
    }
  };

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 1,
        touchAction: "none", // ajuda em alguns browsers
        background: 'red'
      }}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    />
  );
}