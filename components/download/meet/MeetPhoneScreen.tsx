import { Mic, MicOff, Video, PhoneOff } from 'lucide-react';

type Tone = 'brand' | 'mint' | 'amber' | 'slate';

interface Tile {
  name: string;
  initials: string;
  tone: Tone;
  cameraOn: boolean;
  micOn: boolean;
}

const MAIN_TILE: Tile = { name: 'Priya Nair', initials: 'PN', tone: 'mint', cameraOn: true, micOn: true };
const THUMB_TILES: Tile[] = [
  { name: 'Marcus Cole', initials: 'MC', tone: 'slate', cameraOn: false, micOn: false },
  { name: 'You', initials: 'JS', tone: 'brand', cameraOn: true, micOn: true },
];

/** Meet-specific phone-screen content, dropped into <DownloadPhoneFrame>.
 * Kept as a separate component (rather than inlined in the hero) so the
 * exact same screen can be reused at both hero scale and the smaller
 * "Mobile apps" card scale without duplicating the tile markup. */
export function MeetPhoneScreen() {
  return (
    <div className="meet-phone-screen">
      <div className="meet-phone-topbar">
        <span className="meet-phone-rec">
          <span className="meet-phone-rec-dot" />
          12:04
        </span>
        <span className="meet-phone-title">Weekly Sync</span>
      </div>

      <div className="meet-phone-stage">
        <div className="meet-phone-tile meet-phone-tile--main is-speaking">
          <span className={`meet-phone-face is-${MAIN_TILE.tone}`}>
            <span className="meet-phone-face-head" />
            <span className="meet-phone-face-body" />
          </span>
          <span className="meet-phone-tile-label">
            <Mic size={9} aria-hidden="true" />
            {MAIN_TILE.name}
          </span>
          <span className="meet-phone-speaking-bars" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </div>

        <div className="meet-phone-thumb-row">
          {THUMB_TILES.map((tile) => (
            <div className="meet-phone-tile meet-phone-tile--thumb" key={tile.name}>
              {tile.cameraOn ? (
                <span className={`meet-phone-face is-${tile.tone}`}>
                  <span className="meet-phone-face-head" />
                  <span className="meet-phone-face-body" />
                </span>
              ) : (
                <span className={`meet-phone-avatar is-${tile.tone}`}>{tile.initials}</span>
              )}
              <span className="meet-phone-tile-label">
                {tile.micOn ? <Mic size={8} aria-hidden="true" /> : <MicOff size={8} className="is-muted" aria-hidden="true" />}
                {tile.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="meet-phone-controls">
        <button type="button" className="meet-phone-control is-active" aria-label="Mute">
          <Mic size={16} aria-hidden="true" />
        </button>
        <button type="button" className="meet-phone-control is-active" aria-label="Camera">
          <Video size={16} aria-hidden="true" />
        </button>
        <button type="button" className="meet-phone-control is-leave" aria-label="Leave call">
          <PhoneOff size={16} aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
