import React from 'react'
import AccordionGallery from './../components/AccordionGallery'
const items = [
  { image: '/assets/SpecialWeekTs.jpg', label: 'Special Week', link: '#' },
  { image: '/assets/SilenceSuzukaTs.jpg', label: 'Silence Suzuka', link: '#' },
  { image: 'https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/259a0488a1154328b6c90eb238ad65e0/kv_pc.jpg', label: 'Forever Young', link: '#' },
  { image: '/assets/NoReasonTs.jpg', label: 'No Reason', link: '#' },
  { image: '/assets/NiceNatureTs.jpg', label: 'Nice Nature', link: '#' }
];
const Characters = () => {
  return (
<AccordionGallery
  items={items}
  defaultIndex={2}
  expandRatio={0.52}
  trigger="hover"
  accentColor="#ffffff"
  overlayColor="#060010"
  textColor="#ffffff"
  grayscale
  showLabels
  duration={0.6}
  ease="power3.out"
  parallax={0.5}
  tilt={8}
  stagger={0.06}
  height={700}
  gap={10}
  radius={16}
  orientation="horizontal"
/>
  )
}

export default Characters;