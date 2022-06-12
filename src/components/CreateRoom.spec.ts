import { mount } from '@vue/test-utils'

import Api from '../services/Api'
import CreateRoom from './CreateRoom.vue'

jest.mock('../services/Api', () => ({
  createRoom: jest.fn(),
}))

test('mounts correctly', async () => {
  const wrapper = mount(CreateRoom, {
    shallow: true,
  })

  expect(wrapper.find('button').text()).toBe('Create room')
})

test('makes a post request to the api to create a room when clicking the create room button', async () => {
  const wrapper = mount(CreateRoom, {
    shallow: true,
  })

  await wrapper.find(`#create-room`).trigger('click')

  expect(Api.createRoom).toHaveBeenCalled()
})

test('calls the store action to create a room when clicking the create room button', async () => {
  const wrapper = mount(CreateRoom, {
    shallow: true,
  })

  await wrapper.find(`#create-room`).trigger('click')

  expect(actions.createRoom).toHaveBeenCalled()
})
