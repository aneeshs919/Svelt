import { writable } from 'svelte/store'
const data = writable([])
const customStore = {
  subscribe: data.subscribe,
  addItem (newItem) {
    data.update(items => {
      return [...items, newItem]
    })
  },
  removeItem (newItem) {
    data.set(newItem)
  }
}

export default customStore
