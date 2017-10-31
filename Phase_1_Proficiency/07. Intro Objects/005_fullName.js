function fullName(person) {
  return person.name.first + ' ' + (person.name.middle ?
      person.name.middle + ' ' + person.name.last : person.name.last);
}
