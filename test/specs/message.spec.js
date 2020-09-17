import Message from '@packages/message/index'
import { sleep } from '../utils'

describe('Message', () => {
  it('message basic duration', async () => {
    Message({
      message: 'Link',
      duration: 500,
    })
    const message = document.querySelector('.message p')
    expect(document.querySelector('.message')).to.not.be.null
    expect(message.textContent).to.equal('Link')

    await sleep(1000)
    expect(document.querySelector('.message')).to.be.null
  })

  it('message manually close', async () => {
    Message({
      message: 'Link',
    })
    await sleep(500)
    document.querySelector('.easy_message_close').click()
    await sleep(500)
    expect(document.querySelector('.message')).to.be.null

    const m = Message()
    await sleep(500)
    expect(document.querySelector('.message')).to.not.be.null
    m.close()
    await sleep(500)
    expect(document.querySelector('.message')).to.be.null
  })

  it('message options type', () => {
    let typeMap = {
      success: 'fa-check-circle',
      warning: 'fa-exclamation-circle',
      info: 'fa-info-circle',
      error: 'fa-times-circle',
    }
    ;['success', 'error', 'info', 'warning'].forEach((item) => {
      const instancc = Message({
        type: item,
        message: 'Link',
        duration: 100,
      })
      expect(instancc.typeIcon).to.equal(typeMap[item])
    })
  })

  it('message options showClose', () => {
    const instance = Message({
      showClose: false,
    })
    expect(instance.showClose).to.equal(false)
  })

  it('message option html', () => {
    const instance = Message({
      html: true,
      message: '<h1>Link</h1>',
    })
    const el = instance.$el.querySelector('h1')
    expect(el.textContent).to.equal('Link')
  })
})
