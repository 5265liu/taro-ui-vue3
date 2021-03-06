import { mount } from '@vue/test-utils'
import AtActionSheet from '../index'
import AtActionSheetItem from '../body/item'
import AtActionSheetHeader from '../header'
import AtActionSheetFooter from '../footer'

const factory = (
  values = {},
  slots = {
    default: [
      '<AtActionSheetItem>按钮一</AtActionSheetItem>',
      '<AtActionSheetItem>按钮二</AtActionSheetItem>',
    ],
  }
) => {
  return mount(AtActionSheet as any, {
    slots,
    global: {
      components: {
        AtActionSheetItem,
        AtActionSheetHeader,
        AtActionSheetFooter,
      }
    },
    props: { ...values },
  })
}

describe('ActionSheet Snap', () => {
  it('should render initial ActionSheet', () => {
    const wrapper = factory()
    expect(wrapper.element).toMatchSnapshot()
  })

  it('should render opened ActionSheet', () => {
    const wrapper = factory({
      isOpened: true,
    })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('should render opened ActionSheet -- props cancelText', () => {
    const wrapper = factory({
      isOpened: true,
      cancelText: '取消',
    })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('should render opened ActionSheet -- props title', () => {
    const wrapper = factory({
      isOpened: true,
      title: '清除位置信息后， 别人将不能查看到你\r\n可以通过转义字符换行',
    })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('should render opened ActionSheet -- props completed', () => {
    const wrapper = factory({
      isOpened: true,
      cancelText: '取消',
      title: '清除位置信息后， 别人将不能查看到你\r\n可以通过转义字符换行',
    })
    expect(wrapper.element).toMatchSnapshot()
  })
})

describe('ActionSheet events', () => {
  beforeEach(() => { })
  it('should trigger onCancel & onClose events', async () => {
    const onCancel = jest.fn()
    const onClose = jest.fn()

    const wrapper = factory(
      {
        isOpened: true,
        cancelText: '取消',
        title: '清除位置信息后， 别人将不能查看到你\r\n可以通过转义字符换行',
        onCancel: onCancel,
        onClose: onClose,
      },
      {
        default: ['<AtActionSheetItem>按钮一</AtActionSheetItem>'],
      }
    )

    wrapper.find('.at-action-sheet__footer').trigger('tap')
    wrapper.find('.at-action-sheet__overlay').trigger('tap')
    expect(onCancel).toBeCalled()
    expect(onClose).toBeCalled()
  })

  it('should trigger onClick event on AtActionSheetItem', async () => {
    const onClick = jest.fn()

    const wrapper = mount({
      components: {
        AtActionSheet,
        AtActionSheetItem,
        AtActionSheetHeader,
        AtActionSheetFooter,
      },
      methods: {
        onClick: onClick,
      },
      template: `
      <AtActionSheet
        :isOpened="true"
        cancelText="取消"
        title="清除位置信息后， 别人将不能查看到你\r\n可以通过转义字符换行"
      >
        
        <AtActionSheetItem @click="onClick">按钮一</AtActionSheetItem>
      </AtActionSheet>
      `,
    })

    wrapper.find('.at-action-sheet__item').trigger('tap')
    expect(onClick).toBeCalled()
  })
})
