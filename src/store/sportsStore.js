import { writable } from 'svelte/store'
const newsdata = [
  {
      icon: "assets/image/arsenal.svg",
      title: "Arsenal football club",
      note: "Our Champions League opener kicks off at 8pm UK time at the Groupama Stadium",
      count: { win: 23, lose: 34, draw: 23 },
  },
  {
      icon: "assets/image/man.png",
      title: "Manchester United F.C.",
      note: "Our Champions League opener kicks off at 8pm UK time at the Groupama Stadium",
      count: { win: 23, lose: 34, draw: 23 },
  },
  {
      icon: "assets/image/totten.png",
      title: "Tottenham Hotspur F.C.",
      note: "Our Champions League opener kicks off at 8pm UK time at the Groupama Stadium",
      count: { win: 23, lose: 34, draw: 23 },
  },
];
const data = writable([])
export const newsData = writable(newsdata)
export const customStore = {
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
