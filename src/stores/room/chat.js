import { observable, action, computed } from 'mobx';
import { wsAPI } from 'utils/wsapi';

export class RoomChatStore {
  @observable messages;

  constructor() {
    this.reset();

    wsAPI.on('chatMessage', data => {
			const [messageId, userData, text] = data;
      const [site, room] = userData;

      const message = {
        id: messageId,
        user: {
          site: {
            id: site[0],
            name: site[1],
            role: site[2],
            avatar: site[3]
          },
          room: {
            role: room[0]
          }
        },
        text
      };

      setImmediate(() => this.addMessage(message));
    });
    wsAPI.on('removeMessage', this.removeMessage);
    wsAPI.on('removeUserMessages', this.removeUserMessages);
    wsAPI.on('clearChat', this.removeAllMessages);
  }

  reset() {
    this.messages = [];
  }

  addMessage = (message) => {
    this.messages.replace([...this.messages, message].slice(-100));
  }

  removeMessage = (messageId) => {
    this.messages = this.messages.filter(message => message.id != messageId);
  }

  removeUserMessages = (userId) => {
    this.messages = this.messages.filter(({ user }) => user.site.id != userId);
  }

  removeAllMessages = () => {
    this.reset();
  }
}

export const roomChatStore = new RoomChatStore();