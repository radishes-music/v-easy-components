import InputIp from '@packages/input-ip/index'
import { reactive, toRefs, ref } from 'vue'
import InputSubnet from '@packages/input-subnet/index'
import { createElm, toString } from '../utils'
import { expect } from 'chai'

describe('InputIp', () => {
  it('inputIp usage method', () => {
    const ip = createElm(InputIp, {
      modelValue: [1, 2]
    })
    expect(ip).to.not.be.null
    expect(toString(ip.result)).to.equal(toString([1, 2]))
  })
  it('inputIp model string', () => {
    const ip = createElm(InputIp, {
      modelValue: '1.2'
    })
    expect(ip).to.not.be.null
    expect(toString(ip.result)).to.equal(toString([1, 2]))
  })

  it('inputIp options', () => {
    const ip = createElm(InputIp, {
      modelValue: [1, 2],
      maxWidth: 220,
      width: 230
    })
    const { maxWidth, width } = ip.$el.style
    expect(maxWidth).to.equal('220px')
    expect(width).to.equal('230px')
  })

  it('inputIp options disable', () => {
    const ip = createElm(InputIp, {
      modelValue: [1, 2],
      disabled: true
    })
    const ulBox = ip.$el.querySelector('.disabled')
    expect(ulBox).to.not.be.null
  })
})

describe('InputSubnet', () => {
  it('inputSubnet usage method', () => {
    createElm(InputSubnet, {
      modelValue: [255, 255, 0, 0]
    })
  })
  it('inputSubnet v-model', () => {})
})
