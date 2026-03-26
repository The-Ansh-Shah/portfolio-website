'use client';

import { useState, useEffect } from 'react';

export default function LiveClock() {
  const [time, setTime] = useState('');

  useEffect(() => {
    function update() {
      const now = new Date();
      const pst = new Date(now.toLocaleString('en-US', { timeZone: 'America/Los_Angeles' }));
      const h = pst.getHours() % 12 || 12;
      const m = pst.getMinutes().toString().padStart(2, '0');
      const ampm = pst.getHours() >= 12 ? 'PM' : 'AM';
      setTime(`${h}:${m} ${ampm}`);
    }
    update();
    const interval = setInterval(update, 10000);
    return () => clearInterval(interval);
  }, []);

  if (!time) return null;

  return (
    <span className="text-[28px] md:text-[32px] font-semibold text-[#1D1D1F] dark:text-[#F5F5F7] tabular-nums tracking-tight">
      {time}
    </span>
  );
}
