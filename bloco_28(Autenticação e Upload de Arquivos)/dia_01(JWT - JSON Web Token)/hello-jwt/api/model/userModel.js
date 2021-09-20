const getUser = (nameSearched) => {
  const users = [
    {username: 'dennis', password: '123456', admin:true},
    {username: 'Elizabth', password: '654321', admin:false}
  ];

  const findedUser = users.find((user) => user.username === nameSearched)
  return findedUser
}
  

module.exports = {
  getUser
}