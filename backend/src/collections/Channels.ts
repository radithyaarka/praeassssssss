import { CollectionConfig } from 'payload/types'

const Channels: CollectionConfig = {
  slug: 'channels',
  access: {
    create: () => true, 
    read: () => true,

  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true
    },
  ],
}

export default Channels
