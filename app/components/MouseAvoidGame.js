'use client';
import { useRef, useEffect, useState } from 'react';

export default function MouseAvoidGame() {
  const gameRef = useRef(null);
  const playerRef = useRef({ x: 100, y: 100 });
  const obstacleRef = useRef([]);
  const [started, setStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [canvasSize, setCanvasSize] = useState({ width: 300, height: 200 });

  const skills = ['Python', 'Next.js', 'Java', 'SQL', 'Firebase', 'React', 'Node.js', 'Docker','Risk Managment', 'Microsoft Office', 'Agile', 'Scrum', 'Project Management', 'UI/UX Design', 'Figma', 'GitHub', 'LaTeX',
    'Android Studio','Kotlin', 'web 3', 'solidty', 'Postgress', 'Data Anlaysis', 'Excel', 'Fast API', 'Rest API'
  ];  

  const spawnObstacle = () => {
    const label = skills[Math.floor(Math.random() * skills.length)];
    return {
      id: Math.random(),
      x: Math.random() * (canvasSize.width - 100),
      y: -30,
      speed: 2 + Math.random() * 3,
      label
    };
  };

  useEffect(() => {
    if (!started || gameOver) return;

    const interval = setInterval(() => {
      obstacleRef.current.push(spawnObstacle());
      setScore((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [started, gameOver, canvasSize]);

  useEffect(() => {
    if (!started || gameOver) return;
    const canvas = gameRef.current;
    const ctx = canvas.getContext('2d');
    let animationId;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Player
      ctx.fillStyle = '#3B82F6';
      ctx.fillRect(playerRef.current.x, playerRef.current.y, 30, 30);

      // Obstacles
      const updated = [];
      for (let obs of obstacleRef.current) {
        obs.y += obs.speed;
        if (obs.y < canvasSize.height) updated.push(obs);

        ctx.font = 'bold 12px sans-serif';
        const textWidth = ctx.measureText(obs.label).width;
        const boxWidth = textWidth + 16;

        ctx.fillStyle = '#DC2626';
        ctx.fillRect(obs.x, obs.y, boxWidth, 30);

        // Draw centered bold text
        ctx.fillStyle = 'white';
        ctx.fillText(obs.label, obs.x + (boxWidth - textWidth) / 2, obs.y + 20);

        // Collision detection
        const px = playerRef.current.x;
        const py = playerRef.current.y;
        if (
          px < obs.x + boxWidth &&
          px + 30 > obs.x &&
          py < obs.y + 30 &&
          py + 30 > obs.y
        ) {
          setGameOver(true);
          setStarted(false);
          obstacleRef.current = [];
          return;
        }
      }
      obstacleRef.current = updated;

      animationId = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(animationId);
  }, [started, gameOver, canvasSize]);

  const handleMouseMove = (e) => {
    if (!started || gameOver) return;
    const rect = gameRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - 15;
    const y = e.clientY - rect.top - 15;
    playerRef.current = {
      x: Math.max(0, Math.min(canvasSize.width - 30, x)),
      y: Math.max(0, Math.min(canvasSize.height - 30, y))
    };
  };

  useEffect(() => {
    const resizeCanvas = () => {
      const parent = gameRef.current?.parentElement;
      if (parent) {
        const { width, height } = parent.getBoundingClientRect();
        setCanvasSize({ width, height });
      }
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    return () => window.removeEventListener('resize', resizeCanvas);
  }, []);

  return (
    <>
      {(!started || gameOver) && (
        <div className="z-20 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2">
          <button
            onClick={() => {
              setGameOver(false);
              setScore(0);
              obstacleRef.current = [];
              setStarted(true);
            }}
            className="bg-blue-500 text-white px-2 py-2 rounded"
          >
            See My Skills! 
          </button>
          {gameOver && (
            <div className="text-red-600 font-bold">Game Over</div>
          )}
        </div>
      )}
      <div className="absolute top-2 right-4 z-30 text-white font-bold text-sm bg-transparent px-2 py-1 rounded pointer-events-none">
        Score: {score}
      </div>
      <canvas
        ref={gameRef}
        width={canvasSize.width}
        height={canvasSize.height}
        onMouseMove={handleMouseMove}
        className="z-10 rounded-3xl w-full h-full"
        style={{ backgroundColor: 'transparent', pointerEvents: started && !gameOver ? 'auto' : 'none' }}
      />
    </>
  );
}
