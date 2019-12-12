// import something here
import Store from '../store'

// "async" is optional
export default async ({ Vue }) => {
  const store = Store()
  console.log({ Store, store })
  Vue.use(store)
  Vue.prototype.$store = store
}
