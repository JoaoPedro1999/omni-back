'use strict'

const Mail = use('Mail')

class InvitationEmail {
  static get concurrency () {
    return 1
  }

  static get key () {
    return 'InvitationEmail-job'
  }

  async handle ({ user, team, email }) {
    console.log('InvitationEmail-job started')
    await Mail.send(
      ['emails.invitation'],
      { team: team.title, user: user.name },
      message => {
        message
          .to(email)
          .from('joaopedro@omnistack.com', 'João Pedro | Omnistack')
          .subject(`Convite para o time ${team.title}`)
      }
    )
  }
}

module.exports = InvitationEmail
