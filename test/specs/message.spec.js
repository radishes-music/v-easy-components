import { Message } from "lib/v-easy-components.common"

describe('Message', () => {
  it('should message dom', (done) => {
    Message({
      message: 'Link',
      duration: 500
    })
    const message = document.querySelector('.message p')
    expect(document.querySelector('.message')).to.exist
    expect(message.textContent).to.equal('Link')

    setTimeout(() => {
      expect(document.querySelector('.message')).to.not.exist
      done()
    }, 1000)
  })
})
