import {cleanTopMovies} from './CleanTopMovies'
import {cleanTopTVShows} from './CleanTopTVShows'
import * as MD from '../MockData/MockData'

describe('CleanTopMovies', () => {
  it('should cleanTopMovies when it receives an unwanted key value pairs', () => {
    
    const result = cleanTopMovies(MD.uncleanMovies)
    expect(result).toEqual(MD.cleanMovies)
  })
})

describe('CleanTopShows', () => {
  it('should cleanTopShows when it receives a unwanted key value pairs', () => {
    const result = cleanTopTVShows(MD.uncleanShows)
    expect(result).toEqual(MD.cleanShows)
  })
})


