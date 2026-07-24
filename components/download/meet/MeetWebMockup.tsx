import { Mic, MicOff, Video, ScreenShare, MessageSquare, Users, PhoneOff } from 'lucide-react';

type Tone = 'brand' | 'mint' | 'amber' | 'slate' | 'rose' | 'teal';

interface Tile {
  name: string;
  initials: string;
  tone: Tone;
  cameraOn: boolean;
  micOn: boolean;
  speaking?: boolean;
}

const TILES: Tile[] = [
  { name: 'You', initials: 'JS', tone: 'brand', cameraOn: true, micOn: true, speaking: true },
  { name: 'Priya Nair', initials: 'PN', tone: 'mint', cameraOn: true, micOn: true },
  { name: 'Marcus Cole', initials: 'MC', tone: 'slate', cameraOn: false, micOn: false },
  { name: 'Elena Ruiz', initials: 'ER', tone: 'teal', cameraOn: true, micOn: true },
  { name: 'Devon Blake', initials: 'DB', tone: 'amber', cameraOn: false, micOn: true },
  { name: 'Aiko Tanaka', initials: 'AT', tone: 'rose', cameraOn: true, micOn: false },
];

/** High-fidelity web-app mockup for the Meet Download hero's layered visual —
 * a live call screen (video grid, bottom control bar, participants panel),
 * built to the same fidelity bar as MailWebMockup/KalenderWebMockup/
 * ContactsWebMockup rather than a simplified follow-up. Kept as its own
 * component so it can be sized to sit behind the hero's phone mockup rather
 * than spanning the full page width. */
export function MeetWebMockup() {
  return (
    <div className="meet-web-mockup" aria-hidden="true">
      <div className="meet-web-mockup-main">
        <div className="meet-web-mockup-topbar">
          <span className="meet-web-mockup-rec">
            <span className="meet-web-mockup-rec-dot" />
            REC 24:18
          </span>
          <span className="meet-web-mockup-title">Weekly Product Sync</span>
          <span className="meet-web-mockup-count">6 participants</span>
        </div>

        <div className="meet-web-mockup-grid">
          {TILES.map((tile) => (
            <div className={`meet-web-mockup-tile${tile.speaking ? ' is-speaking' : ''}`} key={tile.name}>
              {tile.cameraOn ? (
                <span className={`meet-web-mockup-face is-${tile.tone}`}>
                  <span className="meet-web-mockup-face-head" />
                  <span className="meet-web-mockup-face-body" />
                </span>
              ) : (
                <span className={`meet-web-mockup-avatar is-${tile.tone}`}>{tile.initials}</span>
              )}
              <span className="meet-web-mockup-tile-label">
                {tile.micOn ? <Mic size={9} aria-hidden="true" /> : <MicOff size={9} className="is-muted" aria-hidden="true" />}
                {tile.name}
              </span>
              {tile.speaking && (
                <span className="meet-web-mockup-speaking-bars" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </span>
              )}
            </div>
          ))}
        </div>

        <div className="meet-web-mockup-controls">
          <span className="meet-web-mockup-control is-active">
            <Mic size={13} aria-hidden="true" />
          </span>
          <span className="meet-web-mockup-control is-active">
            <Video size={13} aria-hidden="true" />
          </span>
          <span className="meet-web-mockup-control">
            <ScreenShare size={13} aria-hidden="true" />
          </span>
          <span className="meet-web-mockup-control">
            <MessageSquare size={13} aria-hidden="true" />
          </span>
          <span className="meet-web-mockup-control">
            <Users size={13} aria-hidden="true" />
          </span>
          <span className="meet-web-mockup-control is-leave">
            <PhoneOff size={13} aria-hidden="true" />
          </span>
        </div>
      </div>

      <aside className="meet-web-mockup-side">
        <p className="meet-web-mockup-side-heading">Participants · 6</p>
        <div className="meet-web-mockup-side-list">
          {TILES.map((tile) => (
            <div className="meet-web-mockup-side-row" key={tile.name}>
              <span className={`meet-web-mockup-side-dot is-${tile.tone}`} aria-hidden="true" />
              <span className="meet-web-mockup-side-name">{tile.name}</span>
              {tile.micOn ? <Mic size={10} aria-hidden="true" /> : <MicOff size={10} className="is-muted" aria-hidden="true" />}
            </div>
          ))}
        </div>
      </aside>
    </div>
  );
}
