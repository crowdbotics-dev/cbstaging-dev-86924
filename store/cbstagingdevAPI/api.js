import axios from "axios"
const cbstagingdevAPI = axios.create({
  baseURL: "https://cbstaging-dev-86924.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return cbstagingdevAPI.get(`/api-docs/schema/`, {
    params: { lang: payload.lang }
  })
}
function api_v1_login_create(payload) {
  return cbstagingdevAPI.post(`/api/v1/login/`, payload.data)
}
function api_v1_signup_create(payload) {
  return cbstagingdevAPI.post(`/api/v1/signup/`, payload.data)
}
function api_v1_tiwari_list(payload) {
  return cbstagingdevAPI.get(`/api/v1/tiwari/`)
}
function api_v1_tiwari_create(payload) {
  return cbstagingdevAPI.post(`/api/v1/tiwari/`, payload.data)
}
function api_v1_tiwari_retrieve(payload) {
  return cbstagingdevAPI.get(`/api/v1/tiwari/${payload.id}/`)
}
function api_v1_tiwari_update(payload) {
  return cbstagingdevAPI.put(`/api/v1/tiwari/${payload.id}/`, payload.data)
}
function api_v1_tiwari_partial_update(payload) {
  return cbstagingdevAPI.patch(`/api/v1/tiwari/${payload.id}/`, payload.data)
}
function api_v1_tiwari_destroy(payload) {
  return cbstagingdevAPI.delete(`/api/v1/tiwari/${payload.id}/`)
}
function rest_auth_login_create(payload) {
  return cbstagingdevAPI.post(`/rest-auth/login/`, payload.data)
}
function rest_auth_logout_retrieve(payload) {
  return cbstagingdevAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(payload) {
  return cbstagingdevAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return cbstagingdevAPI.post(`/rest-auth/password/change/`, payload.data)
}
function rest_auth_password_reset_create(payload) {
  return cbstagingdevAPI.post(`/rest-auth/password/reset/`, payload.data)
}
function rest_auth_password_reset_confirm_create(payload) {
  return cbstagingdevAPI.post(
    `/rest-auth/password/reset/confirm/`,
    payload.data
  )
}
function rest_auth_registration_create(payload) {
  return cbstagingdevAPI.post(`/rest-auth/registration/`, payload.data)
}
function rest_auth_registration_verify_email_create(payload) {
  return cbstagingdevAPI.post(
    `/rest-auth/registration/verify-email/`,
    payload.data
  )
}
function rest_auth_user_retrieve(payload) {
  return cbstagingdevAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return cbstagingdevAPI.put(`/rest-auth/user/`, payload.data)
}
function rest_auth_user_partial_update(payload) {
  return cbstagingdevAPI.patch(`/rest-auth/user/`, payload.data)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_login_create,
  api_v1_signup_create,
  api_v1_tiwari_list,
  api_v1_tiwari_create,
  api_v1_tiwari_retrieve,
  api_v1_tiwari_update,
  api_v1_tiwari_partial_update,
  api_v1_tiwari_destroy,
  rest_auth_login_create,
  rest_auth_logout_retrieve,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
