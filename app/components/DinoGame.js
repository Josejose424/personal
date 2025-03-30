'use client';
import { useEffect, useRef } from 'react';

export default function DinoGame() {
  const canvasRef = useRef(null);
  const dinoY = useRef(0);
  const velocity = useRef(0);
  const isJumping = useRef(false);
  const obstacleX = useRef(300);

  const gravity = 0.6;
  const jumpPower = -12;
  const dinoHeight = 30;
  const obstacleHeight = 30;
  const groundY = 170; // where the feet of everything should sit

  // Set dino starting Y position
  dinoY.current = groundY - dinoHeight;

  const jump = () => {
    if (!isJumping.current) {
      isJumping.current = true;
      velocity.current = jumpPower;
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationId;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Dino physics
      velocity.current += gravity;
      dinoY.current += velocity.current;

      if (dinoY.current >= groundY - dinoHeight) {
        dinoY.current = groundY - dinoHeight;
        isJumping.current = false;
      }

      // Move obstacle
      obstacleX.current -= 4;
      if (obstacleX.current < -20) {
        obstacleX.current = 300;
      }

      // Draw dino
      ctx.fillStyle = '#3B82F6';
      ctx.fillRect(20, dinoY.current, 30, dinoHeight);

      // Draw cactus
      ctx.fillStyle = '#DC2626';
      ctx.fillRect(obstacleX.current, groundY - obstacleHeight, 20, obstacleHeight);

      animationId = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={300}
      height={200}
      onClick={jump}
      className="w-full h-full rounded-3xl"
      style={{ backgroundColor: 'transparent' }}
    />
  );
}