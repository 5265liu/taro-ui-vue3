import { mount } from '@vue/test-utils'
import AtForm from '../index'

const factory = (values = {}, slots = { default: [] }) => {
  return mount(AtForm as any, {
    slots,
    props: { ...values },
  })
}

describe('AtForm Snap', () => {
  it('should render initial AtForm', () => {
    const wrapper = factory()
    expect(wrapper.element).toMatchSnapshot()
  })

  it('should render initial AtForm', () => {
    const wrapper = factory({ reportSubmit: true })
    expect(wrapper.element).toMatchSnapshot()
  })
})

describe('AtForm Event', () => {
  it('AtForm onSubmit', () => {
    const onSubmit = jest.fn()
    const wrapper = factory({ onSubmit: onSubmit })
    wrapper.find('.at-form').trigger('submit')
    expect(onSubmit).toBeCalled()
  })

  it('AtForm onReset', () => {
    const onReset = jest.fn()
    const wrapper = factory({ onReset: onReset })
    wrapper.find('.at-form').trigger('reset')
    expect(onReset).toBeCalled()
  })
})
