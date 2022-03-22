import { shallowMount, mount } from '@vue/test-utils'
import { createVuetify } from 'vuetify'
import EloHeader from '@/components/EloHeader.vue'

const plugins = [Vuetify]

describe('EloHeader.vue', () => {
  it('renders', () => {
    const wrapper = shallowMount(EloHeader, { plugins })

    expect(wrapper.text()).toMatch('Menu')
  })

  it('emits when the button is clicked', async () => {
    const wrapper = mount(EloHeader, { plugins })

    const button = wrapper.find('button')
    await button.trigger('click')

    expect(wrapper.emitted('menu-btn-clicked')).toBeTruthy()
  })
})
