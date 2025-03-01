let me = {
  name: 'andiseheh',
  lname: 'abbasian',
  age: 30,
}

console.log(Object.keys(me))
console.log(Object.entries(me))

for ([key, value] of Object.entries(me)) {
  console.log(key, value)
}
