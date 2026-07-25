import { useEffect, useRef } from 'react';
import styles from '../styles/BackgroundFX.module.sass';

const SHAPES = [
  { cls: 'circle', size: 70, top: '8%', left: '6%' },
  { cls: 'circle', size: 38, top: '65%', left: '12%' },
  { cls: 'circle', size: 54, top: '20%', right: '10%' },
  { cls: 'diamond', size: 34, top: '75%', right: '16%' },
  { cls: 'plus', size: 26, top: '42%', left: '48%' },
  { cls: 'plus', size: 20, top: '10%', right: '38%' },
];

export default function BackgroundFX() {
  const containerRef = useRef(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const container = containerRef.current;
    if (reduceMotion || !container) return undefined;

    // Build the proximity dot grid
    const cols = 72;
    const rows = 40;
    const dots = [];
    for (let r = 0; r < rows; r += 1) {
      for (let c = 0; c < cols; c += 1) {
        const dot = document.createElement('div');
        dot.className = styles.dot;
        dot.style.left = `${(c / (cols - 1)) * 100}%`;
        dot.style.top = `${(r / (rows - 1)) * 100}%`;
        container.appendChild(dot);
        dots.push(dot);
      }
    }

    const shapeWraps = Array.prototype.slice.call(container.querySelectorAll(`.${styles.shapeWrap}`));
    const shapes = shapeWraps.map((wrap) => {
      const rect = wrap.getBoundingClientRect();
      return {
        wrap,
        baseX: rect.left + rect.width / 2,
        baseY: rect.top + rect.height / 2,
        inner: wrap.querySelector(`.${styles.shape}`),
      };
    });

    let mouseX = -9999;
    let mouseY = -9999;
    let intensity = 1;
    let raf;

    const handleMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    window.addEventListener('mousemove', handleMove);

    function tick() {
      const dotRadius = 130 * intensity;
      dots.forEach((dot) => {
        const dx = dot.offsetLeft - mouseX;
        const dy = dot.offsetTop - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const influence = Math.max(0, 1 - dist / dotRadius);
        dot.style.opacity = 0.03 + influence * 0.22;
        dot.style.transform = `translate(-50%,-50%) scale(${1 + influence * 1.4})`;
      });

      const shapeRadius = 220 * intensity;
      shapes.forEach((s) => {
        const dx = mouseX - s.baseX;
        const dy = mouseY - s.baseY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const influence = Math.max(0, 1 - dist / shapeRadius);
        const pullX = dx * influence * 0.3;
        const pullY = dy * influence * 0.3;
        s.wrap.style.transform = `translate(${pullX}px,${pullY}px)`;
        if (s.inner) {
          s.inner.style.opacity = 0.3 + influence * 0.4;
          const rot = s.inner.classList.contains(styles.diamond) ? 'rotate(45deg) ' : '';
          s.inner.style.transform = `${rot}scale(${1 + influence * 0.4})`;
        }
      });

      raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      cancelAnimationFrame(raf);
      dots.forEach((dot) => dot.remove());
    };
  }, []);

  return (
    <div className={styles.bgFx} ref={containerRef} aria-hidden="true">
      {SHAPES.map((s, i) => (
        <div
          key={i}
          className={styles.shapeWrap}
          style={{ top: s.top, left: s.left, right: s.right }}
        >
          <div
            className={`${styles.shape} ${styles[s.cls]}`}
            style={{ width: s.size, height: s.size }}
          />
        </div>
      ))}
    </div>
  );
}
