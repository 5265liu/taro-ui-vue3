import { mount } from '@vue/test-utils'
import AtFab from '../index'

const factory = (values = {}, slots = { default: ['按钮'] }) => {
  return mount(AtFab as any, {
    global: {
      components: {}
    },
    slots,
    props: { ...values },
  })
}

describe('AtFab Snap', () => {
  it('render AtFab -- default props', () => {
    const wrapper = factory()
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render AtFab -- props class', () => {
    const wrapper = factory({ class: 'button' })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render AtFab -- props size small', () => {
    const wrapper = factory({ size: 'small' })
    expect(wrapper.element).toMatchSnapshot()
  })
})

describe('AtFab Event', () => {
  it('AtFab onClick', () => {
    const onClick = jest.fn()
    const wrapper = factory({ onClick: onClick })

    wrapper.find('.at-fab').trigger('tap')
    expect(onClick).toBeCalled()
  })
})
