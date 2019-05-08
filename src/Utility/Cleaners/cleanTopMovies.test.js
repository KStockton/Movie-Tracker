import {cleanTopMovies} from './CleanTopMovies'
import * as MD from '../MockData/MockData'

describe('CleanTopMovies', () => {
  it('should cleanTopMovies when it recieves an unwanted key value pairs', () => {
    
    let result = cleanTopMovies(MD.uncleanMovies)
    console.log(result)
    expect(result).toEqual(MD.cleanMovie)
  })
})


