const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  usermod: state => state.user.usermod,
  categorys: state => state.cms.categorys
}
export default getters
