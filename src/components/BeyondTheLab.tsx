'use client';

import { m, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

const spotifyTracks = [
  {
    num: 1,
    title: 'Selfless',
    artist: 'The Strokes',
    duration: '3:42',
    playing: true,
    spotifyUrl: 'https://open.spotify.com/track/2MKNOF6HBkWNhVGEMhiGkP',
    art: '/images/icons/the-new-abnormal.png',
  },
  {
    num: 2,
    title: 'Ode to the Mets',
    artist: 'The Strokes',
    duration: '5:51',
    playing: false,
    spotifyUrl: 'https://open.spotify.com/track/49eOiEHOoU3VnYmOIoMbiA',
    art: '/images/icons/the-new-abnormal.png',
  },
  {
    num: 3,
    title: 'The Adults Are Talking',
    artist: 'The Strokes',
    duration: '5:09',
    playing: false,
    spotifyUrl: 'https://open.spotify.com/track/2EBLAN1UREyHFj1EOtwJBx',
    art: '/images/icons/the-new-abnormal.png',
  },
  {
    num: 4,
    title: 'Bulleya',
    artist: 'Amit Mishra, Shilpa Rao',
    duration: '5:52',
    playing: false,
    spotifyUrl: 'https://open.spotify.com/track/5SBbTMBiVYQEbFGMWMf3sP',
    art: '/images/icons/ae-dil-hai-mushkil.jpg',
  },
  {
    num: 5,
    title: 'Moonlight on the River',
    artist: 'Mac DeMarco',
    duration: '8:42',
    playing: false,
    spotifyUrl: 'https://open.spotify.com/track/1gxYbBko8RBHgRmRabMN5F',
    art: '/images/icons/this-old-dog.jpg',
  },
];

function Equalizer() {
  return (
    <div className="flex items-end gap-[2px] h-[16px]">
      <div className="w-[3px] rounded-[1px] bg-[#1DB954] animate-eq1" />
      <div className="w-[3px] rounded-[1px] bg-[#1DB954] animate-eq2" />
      <div className="w-[3px] rounded-[1px] bg-[#1DB954] animate-eq3" />
      <div className="w-[3px] rounded-[1px] bg-[#1DB954] animate-eq4" />
    </div>
  );
}

const ease = [0.25, 0.1, 0.25, 1] as const;

export default function BeyondTheLab() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section className="py-12 md:py-20">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10" ref={ref}>
        <m.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease }}
          className="mb-8"
        >
          <span className="text-[13px] font-medium text-[#86868B] uppercase tracking-widest">
            Outside of engineering
          </span>
          <h2 className="mt-2 text-[clamp(36px,4.5vw,52px)] font-semibold tracking-tight text-[#1D1D1F] leading-[1.1]">
            Other things I&apos;m up to...
          </h2>
        </m.div>

        {/* HKN Card */}
        <m.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.08, ease }}
          className="rounded-[24px] bg-[#F5F5F7] border border-[#E8E8ED] mb-5 text-center p-8 md:p-12 lg:p-16"
        >
          <div className="mx-auto mb-6 flex items-center justify-center h-[80px] w-[80px] md:h-[100px] md:w-[100px] rounded-[20px] bg-[#003262]">
            <span className="text-[28px] font-bold text-[#FDB515] leading-none">HKN</span>
          </div>
          <h3 className="text-[24px] md:text-[28px] font-semibold text-[#1D1D1F]">Eta Kappa Nu</h3>
          <p className="text-[17px] text-[#86868B] mt-2">IR Officer & Treasurer</p>
          <p className="text-[20px] text-[#86868B] mt-4 max-w-[500px] mx-auto">
            Connecting Berkeley EECS to industry.
          </p>
          <p className="text-[14px] text-[#86868B] mt-6">
            Interested in hosting?{' '}
            <a
              href="mailto:indrel@hkn.eecs.berkeley.edu"
              className="text-[#1D1D1F] font-medium hover:underline"
            >
              indrel@hkn.eecs.berkeley.edu
            </a>
          </p>
        </m.div>

        {/* Spotify Card */}
        <m.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.16, ease }}
          className="rounded-[24px] bg-[#F5F5F7] border border-[#E8E8ED] p-8 md:p-10"
        >
          <div className="flex items-center justify-between mb-5">
            <span className="text-[13px] uppercase tracking-widest text-[#86868B] font-medium">
              What I&apos;m listening to
            </span>
            <svg className="h-[22px] w-[22px]" viewBox="0 0 24 24" fill="#1DB954">
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
            </svg>
          </div>

          <div className="rounded-[16px] bg-[#161616] p-5">
            {spotifyTracks.map((track, i) => (
              <div
                key={track.num}
                className={`flex items-center gap-4 py-3 ${
                  i < spotifyTracks.length - 1 ? 'border-b border-[#2A2A2A]' : ''
                }`}
              >
                {/* Track number */}
                <span className="w-4 text-right text-[13px] text-[#5A5A5E] flex-shrink-0">
                  {track.num}
                </span>

                {/* Album art or equalizer */}
                <div className="h-11 w-11 rounded-[8px] bg-[#2A2A2A] flex-shrink-0 flex items-center justify-center overflow-hidden relative">
                  {track.playing ? (
                    <Equalizer />
                  ) : (
                    <Image
                      src={track.art}
                      alt={track.title}
                      fill
                      className="object-cover"
                      sizes="44px"
                    />
                  )}
                </div>

                {/* Song info — title links to Spotify */}
                <div className="flex-1 min-w-0">
                  <a
                    href={track.spotifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-[15px] font-medium truncate block hover:underline ${
                      track.playing ? 'text-[#1DB954]' : 'text-[#E5E5E7]'
                    }`}
                  >
                    {track.title}
                  </a>
                  <p className="text-[13px] text-[#6E6E73] truncate">{track.artist}</p>
                </div>

                {/* Duration */}
                <span className="text-[13px] text-[#5A5A5E] flex-shrink-0">{track.duration}</span>
              </div>
            ))}
          </div>
        </m.div>
      </div>
    </section>
  );
}