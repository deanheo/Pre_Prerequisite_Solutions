function fullName(person) {
  if (person.name.middle) {
    return person.name.first + ' ' + person.name.middle + ' ' + person.name.last;
  } else {
    return person.name.first + ' ' + person.name.last;
  }
}

function getFullNames(people) {
  var result = [];
  for (var i = 0; i < people.length; i++)
    result.push(fullName(people[i]))
  return result;
}

function averageAge(people) {
  var sum = 0;
  for (var i = 0; i < people.length; i++)
    sum += Number(people[i].age);
  return sum / people.length;
}

function filterMinimumAge(people, age) {
  var result = [];
  for (var i = 0; i < people.length; i++)
    if (age < people[i].age)
      result.push(people[i]);
  return result;
}
