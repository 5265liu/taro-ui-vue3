import { mount } from '@vue/test-utils'
import AtImagePicker from '../index'

const factory = (values = {}, slots = { default: [] }) => {
  return mount(AtImagePicker as any, {
    slots,
    props: { ...values },
  })
}

describe('AtImagePicker Snap', () => {
  const files = [
    {
      url: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg',
      id: '2121',
    },
    {
      url: 'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg',
      id: '2122',
    },
    {
      url: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg',
      id: '2121',
    },
    {
      url: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg',
      id: '2121',
    },
    {
      url: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg',
      id: '2121',
    },
  ]

  it('render initial AtImagePicker', () => {
    const wrapper = factory()
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render AtImagePicker -- props class', () => {
    const wrapper = factory({ class: 'test' })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render AtImagePicker -- props style', () => {
    const wrapper = factory({ style: 'color:red;' })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render AtImagePicker -- props files', () => {
    const wrapper = factory({ files: files })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render AtImagePicker -- props length', () => {
    const wrapper = factory({ files: files, length: 5 })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render AtImagePicker -- props mode', () => {
    const wrapper = factory({ files: files, mode: 'top' })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render AtImagePicker -- props showAddBtn', () => {
    const wrapper = factory({ files: files, showAddBtn: false })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('render AtImagePicker -- props multiple', () => {
    const wrapper = factory({ files: files, multiple: true })
    expect(wrapper.element).toMatchSnapshot()
  })
})
