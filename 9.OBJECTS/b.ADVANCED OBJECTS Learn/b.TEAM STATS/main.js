const team = {
  _players: [
    {firstName: 'Sam', lastName: 'STURT', position: 'FORWARD'}, 
    {firstName: 'Sean', lastName: 'DARCY', position: 'RUCK'}, 
    {firstName: 'Nat', lastName: 'FYFE', position: 'MIDFIELDER'}, 
    {firstName: 'Michael', lastName: 'WALTERS', position: 'FORWARD'}, 
    {firstName: 'Luke', lastName: 'RYAN', position: 'DEFENDER'}, 
    {firstName: 'Jaeger', lastName: 'O\'MEARA', position: 'MIDFIELDER'}, 
    {firstName: 'Heath', lastName: 'CHAPMAN', position: 'DEFENDER'}, 
    {firstName: 'Andrew', lastName: 'BRAYSHAW', position: 'MIDFIELDER'}, 
    {firstName: 'James', lastName: 'AISH', position: 'DEFENDER'}, 
    {firstName: 'Jeremy', lastName: 'SHARP', position: 'MIDFIELDER'}, 
    {firstName: 'Caleb', lastName: 'SERONG', position: 'MIDFIELDER'}, 
    {firstName: 'Jordan', lastName: 'CLARK', position: 'DEFENDER'}, 
    {firstName: 'Luke', lastName: 'JACKSON', position: 'RUCK'}, 
    {firstName: 'Hugh', lastName: 'DAVIES', position: 'KEY DEFENDER'}, 
    {firstName: 'Ethan', lastName: 'HUGHES', position: 'DEFENDER'}
],
  _rounds: [
    {opponent: 'Brisbane', teamPoints: 93, opponentPoints: 70},
    {opponent: 'North Melbourne', teamPoints: 102, opponentPoints: 76},
    {opponent: 'Adelaide', teamPoints: 69, opponentPoints: 34},
    {opponent: 'Carlton', teamPoints: 63, opponentPoints: 73},
    {opponent: 'Port Adelaide', teamPoints: 63, opponentPoints: 66},
    {opponent: 'West Coast', teamPoints: 68, opponentPoints: 105},
    {opponent: 'Bulldogs', teamPoints: 95, opponentPoints: 71},
    {opponent: 'Richmond', teamPoints: 103, opponentPoints: 49},
    {opponent: 'Sydney', teamPoints: 39, opponentPoints: 87},
    {opponent: 'St Kilda', teamPoints: 72, opponentPoints: 55},
    {opponent: 'Collingwood', teamPoints: 75, opponentPoints: 75},
    {opponent: 'Melbourne', teamPoints: 141, opponentPoints: 49},
    {opponent: 'bye', teamPoints: 0, opponentPoints: 0},
    {opponent: 'Bulldogs', teamPoints: 82, opponentPoints: 149},
    {opponent: 'Gold Coast', teamPoints: 85, opponentPoints: 65},
    {opponent: 'Sydney', teamPoints: 99, opponentPoints: 98},
    {opponent: 'Richmond', teamPoints: 105, opponentPoints: 54},
    {opponent: 'Hawthorn', teamPoints: 74, opponentPoints: 87},
    {opponent: 'Melbourne', teamPoints: 116, opponentPoints: 66},
    {opponent: 'West Coast', teamPoints: 110, opponentPoints: 75},
    {opponent: 'Essendon', teamPoints: 89, opponentPoints: 90}
],
  get players() {
    return this._players;
  }, 
  get rounds() {
    return this._rounds;
  }, 
  addPlayer(newFirstName, newLastName, newPosition) {
    const newPlayer = {
      firstName: newFirstName, 
      lastName: newLastName, 
      position: newPosition
};
    this._players.push(newPlayer);
  }
};

team.addPlayer('Jim', 'Kidd', 'RUCK'); 
console.log(team._players);


