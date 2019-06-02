import {
  Bridge,
}                             from 'matrix-appservice-bridge'

import {
  REGISTRATION_FILE,
}                             from '../config'

import { onEvent }     from './on-event'
import { onUserQuery } from './on-user-query'

const controller = {
  onEvent,
  onUserQuery,
}

let instance: Bridge

export function getBridge (): Bridge {
  if (!instance) {
    instance = createBridge()
  }

  return instance
}

function createBridge (): Bridge {
  const bridge = new Bridge({
    controller,
    domain: 'aka.cn',
    homeserverUrl: 'http://matrix.aka.cn:8008',
    registration: REGISTRATION_FILE,
  })

  return bridge
}
