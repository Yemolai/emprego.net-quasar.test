/*
export function someGetter (state) {
}
*/
export function profile (state) {
  const {
    avatarURL = 'statics/images/avatar-fallback.png',
    username = 'Username',
    name = 'User Full Name'
  } = state

  return {
    avatarURL,
    username,
    name
  }
}
