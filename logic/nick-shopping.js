const items = [
  { game: 'GTA 5', shoes: 'Adidas', total: 145 },
  { game: 'GTA 5', shoes: 'Converse', total: 135 },
  { game: 'Minecraft', shoes: 'Adidas', total: 150 },
  { game: 'Minecraft', shoes: 'Converse', total: 140 },
  { game: 'Resident Evil 7', shoes: 'Converse', total: 150 },
]

const maxAffordable = items.filter(item => item.total <= 150)
const maxTotal = Math.max(...maxAffordable.map(i => i.total))
const result = maxAffordable.filter(i => i.total === maxTotal)

console.log("Nick can buy:", result);