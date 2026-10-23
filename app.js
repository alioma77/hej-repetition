// let age = 16 
// let hasTicket = false
// let withAdult = true 

// if (age >= 15 && hasTicket === true){
//     console.log("välkommen in i BIO")
// }

//     else {
//         console.log("gå köp ticket din åsna")
//     }



let age = 14 
let withAdult = false

if(age >= 15 || withAdult === true){
  console.log("Välkommen in gawad")

} else{
  console.log("gå hem med dig")
}


const isLoggedIn = true;
const userRole = "admin";

if (isLoggedIn === true) {
  // Hit kommer vi BARA om isLoggedIn är true!
  if (userRole === "admin") {
    console.log("Välkommen till Adminpanelen! 🛠️");
  } else {
    console.log("Välkommen vanlig användare! 👋");
  }
} else {
  console.log("Du måste logga in först!");
}