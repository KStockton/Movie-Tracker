import { addTopTVShowsReducer } from '../addTopTVShowsReducer';
import * as actions from '../../Actions'

describe('addTopTVShowsReducer', () => {
  it('should return the initial state', ()=> {
    const expected = []
    const result = addTopTVShowsReducer(undefined, [])
    expect(result).toEqual(expected)
  })
  it('should return the state with an array of shows', () => {
    const mockTVSHows = [{
      title: 'Black Panther',
      id: 1
    }, {
      title: 'End Game',
      id: 2
    }]
    const expected = [{
      title: 'Black Panther',
      id: 1
    }, {
      title: 'End Game',
      id: 2
    }]
    const result = addTopTVShowsReducer(undefined, actions.addTopTVShows(mockTVSHows))
    expect(result).toEqual(expected)
  })
})