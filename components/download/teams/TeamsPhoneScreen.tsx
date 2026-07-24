import { Hash, Plus } from 'lucide-react';
import { AVATARS } from '../avatarPaths';

type Tone = 'brand' | 'mint' | 'slate' | 'teal';

const CHANNELS: { name: string; preview: string; unread?: number; active?: boolean }[] = [
  { name: 'general', preview: 'Priya: sounds good 👍', unread: 2 },
  { name: 'design', preview: 'Marcus: updated the file' },
  { name: 'product-launch', preview: 'You: reviewing now', active: true },
  { name: 'engineering', preview: 'Elena: build passed ✅', unread: 5 },
];

const DMS: { name: string; initials: string; tone: Tone; online?: boolean; avatar: string }[] = [
  { name: 'Priya Nair', initials: 'PN', tone: 'mint', online: true, avatar: AVATARS.priyaNair },
  { name: 'Marcus Cole', initials: 'MC', tone: 'slate', avatar: AVATARS.marcusCole },
];

/** Teams-specific phone screen content, dropped into <DownloadPhoneFrame>.
 * Shows the channel-list home view — a different angle than
 * TeamsWebMockup's open-thread view, same pattern as Contacts' list-vs-
 * detail split — so the two mockups read as one product shown from two
 * natural surfaces rather than duplicating identical content. Kept as a
 * separate component so the exact same screen can be reused at both hero
 * scale and the smaller "Mobile apps" card scale. */
export function TeamsPhoneScreen() {
  return (
    <div className="teams-phone-screen">
      <div className="teams-phone-topbar">
        <span className="teams-phone-title">Teams</span>
        <span className="teams-phone-avatar">
          <img src={AVATARS.jacob} alt="" />
        </span>
      </div>

      <p className="teams-phone-section-label">Channels</p>
      <div className="teams-phone-list">
        {CHANNELS.map((channel) => (
          <div className={`teams-phone-channel-row${channel.active ? ' is-active' : ''}`} key={channel.name}>
            <span className="teams-phone-channel-icon">
              <Hash size={13} aria-hidden="true" />
            </span>
            <span className="teams-phone-channel-text">
              <span className="teams-phone-channel-name">{channel.name}</span>
              <span className="teams-phone-channel-preview">{channel.preview}</span>
            </span>
            {channel.unread !== undefined && <span className="teams-phone-unread">{channel.unread}</span>}
          </div>
        ))}
      </div>

      <p className="teams-phone-section-label">Direct messages</p>
      <div className="teams-phone-list">
        {DMS.map((dm) => (
          <div className="teams-phone-dm-row" key={dm.name}>
            <span className={`teams-phone-dm-avatar is-${dm.tone}`}>
              <img src={dm.avatar} alt="" />
              <span className={`teams-phone-dm-presence${dm.online ? ' is-online' : ' is-offline'}`} />
            </span>
            <span className="teams-phone-channel-name">{dm.name}</span>
          </div>
        ))}
      </div>

      <button type="button" className="teams-phone-add" aria-label="New channel">
        <Plus size={18} aria-hidden="true" />
      </button>
    </div>
  );
}
