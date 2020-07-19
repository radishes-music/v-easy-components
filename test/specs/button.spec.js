import Button from '@packages/button/index'
import { createElm } from '../utils'

describe('Button', () => {
  it('button attributes button style type', () => {
    const instance = createElm(Button, {
      type: 'primary'
    })
    expect(instance.$el.classList.contains('easy-button-primary')).to.equal(true)
  })

  it('button attributes plain', () => {

  })

  it('button attributes circle', () => {

  })

  it('button attributes rotate', () => {

  })

  it('button attributes native type', () => {
    const instance = createElm(Button, {
      nativeType: 'submit'
    })
    expect(instance.$el.getAttribute('type')).to.equal('submit')
  })

  it('button attributes disabled', () => {

  })

  it('button attributes mask-type', () => {

  })

  it('button attributes loading', () => {

  })
})
