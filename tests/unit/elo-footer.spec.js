import { shallowMount } from '@vue/test-utils'
import { createVuetify } from 'vuetify'
import EloFooter from '@/components/EloFooter.vue'

describe('EloFooter.vue', () => {
  it('renders authorship', () => {
    const wrapper = shallowMount(EloFooter)

    expect(wrapper.text()).toMatch('Doug Wade 2022')
  })
})
