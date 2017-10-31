function bouncerBlackList(name, age) {
  if (name === 'Joe') return 'Go home Joe!'
  if (age > 20) {
    return 'Welcome, ' + name + '!';
  } else {
    return 'Go home, ' + name + '.';
  }
}
