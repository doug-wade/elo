import { shallowMount } from '@vue/test-utils'
import EloFooter from '@/components/EloFooter.vue'

describe('EloFooter.vue', () => {
  it('renders props.msg when passed', () => {
    const wrapper = shallowMount(EloFooter)

    expect(wrapper.text()).toMatch('Doug Wade 2022')
  })
})
