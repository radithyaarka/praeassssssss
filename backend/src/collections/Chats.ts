// Chats.ts
import { CollectionConfig } from 'payload/types';

const Chats: CollectionConfig = {
  slug: 'chats',
  fields: [
    {
      name: 'senderID',
      type: 'relationship',
      relationTo: 'accounts',
      required: true,
      defaultValue: ({ user }) => user.id,
      hasMany: false, // Assuming each chat has only one sender
    },
    {
      name: 'channelID',
      type: 'relationship',
      relationTo: 'channels',
      required: true,
      hasMany: false, // Assuming each chat is associated with one channel
    },
    {
      name: 'content',
      type: 'textarea',
      required: true,
    },
  ],
};

export default Chats;
