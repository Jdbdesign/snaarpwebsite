/** Shared headshot photos used across Download-page mockups (Mail, Contacts,
 * Teams, Meet, Kalender) so the same person reads as the same face wherever
 * they reappear, instead of a plain two-letter initials circle. Sourced from
 * public/assets/avatars/avatar-a.png..avatar-h.png. A handful of minor,
 * one-off names reuse a photo from a person who never appears on the same
 * screen, since there are only 8 stock photos to go around. */
export const AVATARS = {
  jacob: '/assets/avatars/avatar-e.png',
  amaraChen: '/assets/avatars/avatar-g.png',
  arlo: '/assets/avatars/avatar-d.png',
  priyaNair: '/assets/avatars/avatar-c.png',
  marcusWebb: '/assets/avatars/avatar-f.png',
  marcusCole: '/assets/avatars/avatar-d.png',
  sofiaReyes: '/assets/avatars/avatar-h.png',
  danielOsei: '/assets/avatars/avatar-b.png',
  tundeBakare: '/assets/avatars/avatar-a.png',
  elenaRuiz: '/assets/avatars/avatar-h.png',
  devonBlake: '/assets/avatars/avatar-a.png',
  aikoTanaka: '/assets/avatars/avatar-g.png',
  spotifyContact: '/assets/avatars/avatar-c.png',
  sarahContact: '/assets/avatars/avatar-c.png',
  amKalender: '/assets/avatars/avatar-f.png',
} as const;
