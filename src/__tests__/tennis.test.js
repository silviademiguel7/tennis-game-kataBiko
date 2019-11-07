import TennisGame from '../tennis'
let newGameTennis
describe('Tenis Game', () => {
  beforeEach(() => {
    newGameTennis = new TennisGame('Enrique', 'Claudia')
  })

  it('Cuando inicio un partido el marcador debe estar a cero y ser Love All', () => {
    expect(newGameTennis.getScore()).toEqual('Love All')
  })

  it('Cuando el marcador es 15-0 o 1-0', () => {
    newGameTennis.wonPoint('Enrique')
    expect(newGameTennis.getScore()).toEqual('Fifteen-Love')
  })

  it('Cuando el marcador es 0-15 o 0-1', () => {
    newGameTennis.wonPoint('Claudia')
    expect(newGameTennis.getScore()).toEqual('Love-Fifteen')
  })

  it('Cuando el marcador es 15-30 o 1-2', () => {
    newGameTennis.wonPoint('Enrique')
    newGameTennis.wonPoint('Claudia')
    newGameTennis.wonPoint('Claudia')
    expect(newGameTennis.getScore()).toEqual('Fifteen-Thirty')
  })

  it('Cuando el marcador es 30-30 o 2-2', () => {
    for (let i = 1; i < 3; i++) {
      newGameTennis.wonPoint('Enrique')
      newGameTennis.wonPoint('Claudia')
    }
    expect(newGameTennis.getScore()).toEqual('Thirty All')
  })

  it('Cuando el marcador es 15-40 o 1-3', () => {
    newGameTennis.wonPoint('Enrique')
    for (let i = 1; i < 4; i++) {
      newGameTennis.wonPoint('Claudia')
    }
    expect(newGameTennis.getScore()).toEqual('Fifteen-Forty')
  })

  it('Cuando el marcador es 30-40 o 2-3', () => {
    for (let i = 1; i < 3; i++) {
      newGameTennis.wonPoint('Enrique')
    }
    for (let i = 1; i < 4; i++) {
      newGameTennis.wonPoint('Claudia')
    }
    expect(newGameTennis.getScore()).toEqual('Thirty-Forty')
  })

  it('Cuando el marcador es 40-40 o 3-3', () => {
    for (let i = 1; i < 4; i++) {
      newGameTennis.wonPoint('Enrique')
      newGameTennis.wonPoint('Claudia')
    }
    expect(newGameTennis.getScore()).toEqual('Deuce')
  })

  it('Cuando el marcador es 0-40 o 0-3', () => {
    for (let i = 1; i < 4; i++) {
      newGameTennis.wonPoint('Claudia')
    }
    expect(newGameTennis.getScore()).toEqual('Love-Forty')
  })
  it('Cuando el marcador es 0-50 o 0-4', () => {
    for (let i = 1; i < 5; i++) {
      newGameTennis.wonPoint('Claudia')
    }
    expect(newGameTennis.getScore()).toEqual('Winner Claudia')
  })

  it('Cuando el marcador es 40-50 o 3-4', () => {
    for (let i = 1; i < 4; i++) {
      newGameTennis.wonPoint('Enrique')
    }
    for (let i = 1; i < 5; i++) {
      newGameTennis.wonPoint('Claudia')
    }
    expect(newGameTennis.getScore()).toEqual('Advantage Claudia')
  })
  it('Cuando el marcador es 40-60 o 3-5', () => {
    for (let i = 1; i < 4; i++) {
      newGameTennis.wonPoint('Enrique')
    }
    for (let i = 1; i < 6; i++) {
      newGameTennis.wonPoint('Claudia')
    }
    expect(newGameTennis.getScore()).toEqual('Winner Claudia')
  })
  it('Cuando el marcador es 60-50 o 5-4', () => {
    for (let i = 1; i < 6; i++) {
      newGameTennis.wonPoint('Enrique')
    }
    for (let i = 1; i < 5; i++) {
      newGameTennis.wonPoint('Claudia')
    }
    expect(newGameTennis.getScore()).toEqual('Advantage Enrique')
  })
  it('Cuando el marcador es 40-40 o 4-4', () => {
    for (let i = 1; i < 5; i++) {
      newGameTennis.wonPoint('Enrique')
      newGameTennis.wonPoint('Claudia')
    }
    expect(newGameTennis.getScore()).toEqual('Deuce')
  })
  it('Cuando el marcador es 50-50 o 4-6', () => {
    for (let i = 1; i < 5; i++) {
      newGameTennis.wonPoint('Enrique')
    }
    for (let i = 1; i < 7; i++) {
      newGameTennis.wonPoint('Claudia')
    }
    expect(newGameTennis.getScore()).toEqual('Winner Claudia')
  })
  it('Cuando el marcador es 60-60 o 5-5', () => {
    for (let i = 1; i < 6; i++) {
      newGameTennis.wonPoint('Enrique')
      newGameTennis.wonPoint('Claudia')
    }
    expect(newGameTennis.getScore()).toEqual('Deuce')
  })
  it('Cuando el marcador es 70-60 o 6-5', () => {
    for (let i = 1; i < 7; i++) {
      newGameTennis.wonPoint('Enrique')
    }
    for (let i = 1; i < 6; i++) {
      newGameTennis.wonPoint('Claudia')
    }
    expect(newGameTennis.getScore()).toEqual('Advantage Enrique')
  })
  it('Cuando el marcador es 80-60 o 7-5', () => {
    for (let i = 1; i < 8; i++) {
      newGameTennis.wonPoint('Enrique')
    }
    for (let i = 1; i < 6; i++) {
      newGameTennis.wonPoint('Claudia')
    }
    expect(newGameTennis.getScore()).toEqual('Winner Enrique')
  })
})
