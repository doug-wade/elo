import { shallowMount, mount } from '@vue/test-utils'
import EloHeader from '@/components/EloHeader.vue'

describe('EloHeader.vue', () => {
  it('renders', () => {
    const wrapper = shallowMount(EloHeader)

    expect(wrapper.text()).toMatch('Menu')
  })``

  it('emits when the button is clicked', async () => {
    const wrapper = mount(EloHeader)

    const button = wrapper.find('button')
    await button.trigger('click')

    expect(wrapper.emitted('menu-btn-clicked')).toBeTruthy()
  })
})
