'use client';

import { m, useInView } from 'framer-motion';
import { useRef } from 'react';
import SectionLabel from './SectionLabel';

const spotifyTracks = [
  { num: 1, title: 'Neon', artist: 'John Mayer', duration: '4:41', playing: true },
  { num: 2, title: 'Nights', artist: 'Frank Ocean', duration: '5:07', playing: false },
  { num: 3, title: 'Motion Sickness', artist: 'Phoebe Bridgers', duration: '3:51', playing: false },
  { num: 4, title: 'Pink + White', artist: 'Frank Ocean', duration: '3:04', playing: false },
  { num: 5, title: 'Line of Sight', artist: 'ODESZA', duration: '4:32', playing: false },
];

function Equalizer() {
  return (
    <div className="flex items-end gap-[2px] h-[14px]">
      <div className="w-[2.5px] rounded-[1px] bg-spotify-green animate-eq1" />
      <div className="w-[2.5px] rounded-[1px] bg-spotify-green animate-eq2" />
      <div className="w-[2.5px] rounded-[1px] bg-spotify-green animate-eq3" />
      <div className="w-[2.5px] rounded-[1px] bg-spotify-green animate-eq4" />
    </div>
  );
}

export default function BeyondTheLab() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-content px-6" ref={ref}>
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-6"
        >
          <SectionLabel>More about me</SectionLabel>
          <h2 className="text-section text-text-primary mt-2">Beyond Coursework</h2>
        </m.div>

        <div className="space-y-3.5">
          {/* HKN Card */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.08, ease: [0.25, 0.1, 0.25, 1] }}
            className="rounded-card bg-bg-card border border-border p-6 md:p-8 hover:shadow-card-hover transition-shadow duration-300"
          >
            <div className="flex flex-col items-center text-center">
              {/* Large HKN badge area */}
              <div className="flex items-center justify-center h-[90px] w-[90px] rounded-xl bg-berkeley-blue mb-4">
                <span className="text-[22px] font-bold text-berkeley-gold leading-none">HKN</span>
              </div>
              <h3 className="text-[22px] font-semibold text-text-primary">Eta Kappa Nu</h3>
              <p className="text-[15px] text-text-muted mt-1">Industrial Relations Officer & Treasurer</p>
              <p className="text-[16px] text-text-muted mt-3">
                Connecting Berkeley EECS to industry.
              </p>
              <p className="text-[12px] text-text-muted mt-3">
                Interested in hosting your company?{' '}
                <a href="mailto:indrel@hkn.eecs.berkeley.edu" className="text-text-primary font-medium hover:underline">
                  indrel@hkn.eecs.berkeley.edu
                </a>
              </p>
            </div>
          </m.div>

          {/* Spotify Card */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.16, ease: [0.25, 0.1, 0.25, 1] }}
            className="rounded-card bg-bg-card border border-border p-6 md:p-8 hover:shadow-card-hover transition-shadow duration-300"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-5">
              <span className="text-label uppercase text-text-muted tracking-[0.08em]">What I&apos;m listening to</span>
              {/* Spotify logo */}
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="#1DB954">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
              </svg>
            </div>

            {/* Dark player card */}
            <div className="rounded-[14px] bg-[#161616] p-4 md:p-5">
              {spotifyTracks.map((track, i) => (
                <div
                  key={track.num}
                  className={`flex items-center gap-3 py-3 ${
                    i < spotifyTracks.length - 1 ? 'border-b border-[#2A2A2A]' : ''
                  }`}
                >
                  {/* Track number */}
                  <span className="w-4 text-right text-sm text-[#5A5A5E] flex-shrink-0">
                    {track.num}
                  </span>

                  {/* Album art / Equalizer */}
                  <div className="h-11 w-11 rounded-md bg-[#2A2A2A] flex-shrink-0 flex items-center justify-center">
                    {track.playing ? <Equalizer /> : null}
                  </div>

                  {/* Song info */}
                  <div className="flex-1 min-w-0">
                    <p className={`text-sm font-medium truncate ${track.playing ? 'text-spotify-green' : 'text-[#E5E5E7]'}`}>
                      {track.title}
                    </p>
                    <p className="text-xs text-[#6E6E73] truncate">{track.artist}</p>
                  </div>

                  {/* Duration */}
                  <span className="text-xs text-[#5A5A5E] flex-shrink-0">{track.duration}</span>
                </div>
              ))}
            </div>
          </m.div>
        </div>
      </div>
    </section>
  );
}
