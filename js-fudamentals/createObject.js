// 1. Create a same object using an existing object. This 
let shakibInfo = {
    name: "Shakib",
    profession: "superstar",
    dob: "01/03/1993",
    nationality: "Indian",
    address: "AB",
    pincode: "431001",
    homePhone: "0240112233"
}
console.log(shakibInfo);

let shabInfo = Object.create(shakibInfo);
shabInfo.name = "Shabnam";
shabInfo.profession = "Developer";
shabInfo.dob = "12/06/1998";
console.log(shabInfo.homePhone);

// 2. Using function and then use that to create object
function PersonInfo(name, profession, dob) {
    this.name = name;
    this.profession = profession;
    this.dob = dob
}
const awezInfo = new PersonInfo("Awez", "Student", "01/01/2001")
console.log(awezInfo);