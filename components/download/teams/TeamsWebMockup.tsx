import { Hash, Users, Paperclip, Send } from 'lucide-react';
import { AVATARS } from '../avatarPaths';

type Tone = 'brand' | 'mint' | 'slate' | 'teal';

const CHANNELS: { name: string; unread?: number; active?: boolean }[] = [
  { name: 'general', unread: 3 },
  { name: 'design' },
  { name: 'product-launch', active: true },
  { name: 'engineering', unread: 5 },
];

const DMS: { name: string; initials: string; tone: Tone; online?: boolean }[] = [
  { name: 'Priya Nair', initials: 'PN', tone: 'mint', online: true },
  { name: 'Marcus Cole', initials: 'MC', tone: 'slate' },
];

interface Message {
  name: string;
  initials: string;
  tone: Tone;
  time: string;
  text?: string;
  reaction?: string;
  typing?: boolean;
  avatar: string;
}

const MESSAGES: Message[] = [
  {
    name: 'Priya Nair',
    initials: 'PN',
    tone: 'mint',
    time: '10:02 AM',
    text: 'Pushed the updated mockups to Work Drive — check the Sync channel folder!',
    reaction: '🎉 3',
    avatar: AVATARS.priyaNair,
  },
  {
    name: 'Marcus Cole',
    initials: 'MC',
    tone: 'slate',
    time: '10:04 AM',
    text: "Nice, I'll review this after lunch.",
    avatar: AVATARS.marcusCole,
  },
  {
    name: 'Elena Ruiz',
    initials: 'ER',
    tone: 'teal',
    time: '10:06 AM',
    typing: true,
    avatar: AVATARS.elenaRuiz,
  },
];

/** High-fidelity web-app mockup for the Teams Download hero's layered
 * visual — a real chat workspace (channel sidebar, populated message
 * thread with reactions and a typing indicator, message composer), built
 * to the same fidelity bar as MailWebMockup/MeetWebMockup/ContactsWebMockup
 * rather than a simplified follow-up. Kept as its own component so it can
 * be sized to sit behind the hero's phone mockup rather than spanning the
 * full page width. */
export function TeamsWebMockup() {
  return (
    <div className="teams-web-mockup" aria-hidden="true">
      <aside className="teams-web-mockup-sidebar">
        <p className="teams-web-mockup-logo">Snaarp</p>

        <div>
          <p className="teams-web-mockup-section-label">Channels</p>
          <div className="teams-web-mockup-channel-list">
            {CHANNELS.map((channel) => (
              <span
                className={`teams-web-mockup-channel-item${channel.active ? ' is-active' : ''}`}
                key={channel.name}
              >
                <Hash size={11} aria-hidden="true" />
                <span className="teams-web-mockup-channel-name">{channel.name}</span>
                {channel.unread !== undefined && <span className="teams-web-mockup-unread">{channel.unread}</span>}
              </span>
            ))}
          </div>
        </div>

        <div>
          <p className="teams-web-mockup-section-label">Direct messages</p>
          <div className="teams-web-mockup-channel-list">
            {DMS.map((dm) => (
              <span className="teams-web-mockup-dm-item" key={dm.name}>
                <span className={`teams-web-mockup-dm-dot${dm.online ? ' is-online' : ' is-offline'}`} />
                {dm.name}
              </span>
            ))}
          </div>
        </div>
      </aside>

      <div className="teams-web-mockup-main">
        <div className="teams-web-mockup-topbar">
          <span className="teams-web-mockup-topbar-title">
            <Hash size={13} aria-hidden="true" />
            product-launch
          </span>
          <span className="teams-web-mockup-topbar-meta">
            <Users size={11} aria-hidden="true" />
            8 members
          </span>
        </div>

        <div className="teams-web-mockup-thread">
          {MESSAGES.map((msg) => (
            <div className="teams-web-mockup-message" key={msg.name + msg.time}>
              <span className={`teams-web-mockup-message-avatar is-${msg.tone}`}>
                <img src={msg.avatar} alt="" />
              </span>
              <div className="teams-web-mockup-message-body">
                <div className="teams-web-mockup-message-head">
                  <span className="teams-web-mockup-message-name">{msg.name}</span>
                  <span className="teams-web-mockup-message-time">{msg.time}</span>
                </div>
                {msg.typing ? (
                  <>
                    <span className="teams-web-mockup-typing-bubble" aria-hidden="true">
                      <span />
                      <span />
                      <span />
                    </span>
                    <p className="teams-web-mockup-typing-label">is typing…</p>
                  </>
                ) : (
                  <>
                    <p className="teams-web-mockup-message-bubble">{msg.text}</p>
                    {msg.reaction && <span className="teams-web-mockup-message-reaction">{msg.reaction}</span>}
                  </>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="teams-web-mockup-composer">
          <Paperclip size={14} className="teams-web-mockup-composer-icon" aria-hidden="true" />
          <span className="teams-web-mockup-composer-input">Message #product-launch</span>
          <span className="teams-web-mockup-composer-send">
            <Send size={13} aria-hidden="true" />
          </span>
        </div>
      </div>
    </div>
  );
}
