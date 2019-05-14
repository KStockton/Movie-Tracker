import {cleanTopMovies} from '../CleanTopMovies'
import * as MD from '../../MockData/MockData'

describe('CleanTopMovies', () => {
  it('should cleanTopMovies when it receives an unwanted key value pairs', () => {
    
    const result = cleanTopMovies(MD.uncleanMovies)
    expect(result).toEqual(MD.cleanMovies)
  })
})


