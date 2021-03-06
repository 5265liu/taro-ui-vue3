import { mount } from '@vue/test-utils'
import AtSlider from '../index'

const factory = (values = {}, slots = { default: [] }) => {
  return mount(AtSlider as any, {
    slots,
    props: { ...values },
  })
}

describe('AtSlider Snap', () => {
  it('should render initial AtSlider', () => {
    const wrapper = factory()
    expect(wrapper.element).toMatchSnapshot()
  })

  it('should render AtSlider -- props value', () => {
    const wrapper = factory({ value: 50 })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('should render AtSlider -- props step', () => {
    const wrapper = factory({ step: 1 })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('should render AtSlider -- props min', () => {
    const wrapper = factory({ min: 50 })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('should render AtSlider -- props max', () => {
    const wrapper = factory({ max: 200 })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('should render AtSlider -- props disabled', () => {
    const wrapper = factory({ disabled: true })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('should render AtSlider -- props activeColor', () => {
    const wrapper = factory({ activeColor: 'red' })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('should render AtSlider -- props backgroundColor', () => {
    const wrapper = factory({ backgroundColor: 'red' })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('should render AtSlider -- props blockColor', () => {
    const wrapper = factory({ blockColor: 'red' })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('should render AtSlider -- props blockSize', () => {
    const wrapper = factory({ blockSize: 24 })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('should render AtSlider -- props showValue', () => {
    const wrapper = factory({ showValue: true })
    expect(wrapper.element).toMatchSnapshot()
  })
})

describe('AtSlider Event', () => {
  it('AtSlider onChange', () => {
    const onChange = jest.fn()
    const wrapper = factory({ onChange: onChange })
    wrapper.find('.at-slider slider').trigger('change', { detail: { value: 50 } })
    expect(onChange).toBeCalled()
  })

  it('AtSlider onChanging', () => {
    const onChanging = jest.fn()
    const wrapper = factory({ onChanging: onChanging })
    wrapper.find('.at-slider slider').trigger('changing', { detail: { value: 50 } })
    expect(onChanging).toBeCalled()
  })
})
