import { mount } from '@vue/test-utils'

import CreateRoom from './CreateRoom.vue'

test('mounts correctly', async () => {
  const wrapper = mount(CreateRoom, {
    shallow: true,
  })

  expect(wrapper.find('button').text()).toBe('Create room')
})
