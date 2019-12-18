import { Message } from "lib/v-easy-components.common"

describe('Message', () => {
  it('should message dom', () => {
    Message({
      message: 'Link'
    })
    const message = document.querySelector('.message p')
    expect(document.querySelector('.message')).to.exist;
    expect(message.textContent).to.equal('Link')
  })
})
