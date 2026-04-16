import { useRef } from 'react';
import useCustomCursor from '../../hooks/useCustomCursor';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const ringRef = useRef(null);

  useCustomCursor(cursorRef, ringRef);

  return (
    <>
      <div className="cursor" ref={cursorRef}></div>
      <div className="cursor-ring" ref={ringRef}></div>
    </>
  );
}
