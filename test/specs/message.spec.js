import { Message } from "lib/v-easy-components.common"
import { sleep } from '../utils'

describe('Message', () => {
  it('should message dom', async () => {
    Message({
      message: 'Link',
      duration: 500
    })
    const message = document.querySelector('.message p')
    expect(document.querySelector('.message')).to.exist
    expect(message.textContent).to.equal('Link')

    await sleep(1000)
    expect(document.querySelector('.message')).to.not.exist
  })

  it('manually close', async () => {
    Message({
      message: 'Link'
    })
    await sleep(500)
    document.querySelector('.easy_message_close').click()
    await sleep(500)
    expect(document.querySelector('.message')).to.not.exist
  })

  it('check message type', () => {
    let typeMap = {
      success: 'fa-check-circle',
      warning: 'fa-exclamation-circle',
      info: 'fa-info-circle',
      error: 'fa-times-circle'
    };
    ['success', 'error', 'info', 'warning'].forEach(item => {
      const instancc = Message({
        type: item,
        message: 'Link',
        duration: 100
      })
      expect(instancc.typeIcon).to.equal(typeMap[item])
    })
  })
})
