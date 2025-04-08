const games = [
  { title: 'GTA 5', price: 15 },
  { title: 'Minecraft', price: 20 },
  { title: 'Spiderman', price: 50 },
  { title: 'Resident Evil 7', price: 30 }
]

const shoes = [
  { title: 'Adidas', price: 130 },
  { title: 'Nike', price: 140 },
  { title: 'Converse', price: 120 },
  { title: 'Reebok', price: 150 }
]

const budget = 150

// Find all possible game and shoe combinations
const combinations = games.flatMap(game =>
  shoes.map(shoe => ({
    game: game.title,
    shoe: shoe.title,
    total: game.price + shoe.price
  }))
)

// Budget-friendly filter combinations
const validOptions = combinations.filter(c => c.total <= budget)

// Find the combination with the highest total
const maxTotal = validOptions.reduce((max, option) => {
  return option.total > max ? option.total : max
}, 0)

const bestOptions = validOptions.filter(opt => opt.total === maxTotal)

console.log("Best combinations:")
bestOptions.forEach(opt => {
  console.log(`- ${opt.game} and ${opt.shoe} total $${opt.total}`)
})
