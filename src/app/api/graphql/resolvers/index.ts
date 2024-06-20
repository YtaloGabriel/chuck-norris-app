import axios from 'axios'

export const resolvers = {
  Query: {
    getRandomFact: async () => {
      const { data } = await axios.get(
        'https://api.chucknorris.io/jokes/random'
      )

      console.log(data)

      return {
        id: data.id,
        icon_url: data.icon_url,
        url: data.url,
        value: data.value
      }
    }
  }
}
