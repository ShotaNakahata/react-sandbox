const Example = () => {
  type User = {
    name: string,
    age: number
  }

  const shota: User = {
    name: "shota",
    age: 23
  }

  console.log(shota)

  type UserName = string
  type UserAge = number
  type UserGender = "man"|"woman"|"other"

  type UserProfile = {
    name:UserName,
    age:UserAge,
    gender:UserGender
  }

  const usetProfile:UserProfile={
    name:"shota",
    age:15,
    gender:"man"
  }

  console.log(usetProfile)


};

export default Example;
