export const getAuthEmail = (email) => ({
  type: "get.auth.email",
  payload: { email }
} )

export const doublecheckPassword = (firstPass, secPass) => ({
  type: "check.pass",
  payload: { firstPass, secPass }
})

export const getRegisterInfo = ( info ) => ({
  type: "get.register.info",
  payload: { info }
})

export const initializeState = () => ({
  type: "init.register.state",
})