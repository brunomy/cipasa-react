import { useRef } from 'react';

export default function SwipeListener({ onSwipeLeft, onSwipeRight }) {
  const startX = useRef(null);
  const startY = useRef(null);
  const isSwiping = useRef(false);

  const minSwipeDistance = 50; // px mínimos
  const maxVerticalTolerance = 30; // tolerância de scroll vertical

  const onPointerDown = (e) => {
    startX.current = e.clientX;
    startY.current = e.clientY;
    isSwiping.current = false;
  };

  const onPointerMove = (e) => {
    if (startX.current === null || startY.current === null) return;

    const dx = e.clientX - startX.current;
    const dy = e.clientY - startY.current;

    // detecta movimento horizontal predominante
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dy) < maxVerticalTolerance) {
      isSwiping.current = true;
      e.preventDefault(); // bloqueia scroll vertical durante swipe
    }
  };

  const onPointerUp = (e) => {
    if (startX.current === null || startY.current === null) return;

    const dx = e.clientX - startX.current;
    const dy = e.clientY - startY.current;

    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > minSwipeDistance) {
      if (dx < 0 && onSwipeLeft) onSwipeLeft();
      if (dx > 0 && onSwipeRight) onSwipeRight();
    }

    startX.current = null;
    startY.current = null;
    isSwiping.current = false;
  };

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 5,
        background: "transparent",
        touchAction: "none",
        pointerEvents: "auto",
      }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
    />
  );
}