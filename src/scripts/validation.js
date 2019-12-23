// registerVerification()
// checkPassword(str)

// pwd1 = document.getElementById("#exampleInputPassword1")
// pwd2 = document.getElementById("#exampleInputPassword2")

// export function registerVerification(){
//     //If password1 is not empty and if the password1 value matches password2 value
//     if(pwd1.value != "" && pwd1.value == pwd2.value) {
//       if(pwd1.value.length < 8) {
//         alert("Error: Password must contain at least 8 characters!");
//         pwd1.focus();
//         return false;
//       }
//       if(pwd1.value == username.value) {
//         alert("Error: Password must be different from Username!");
//         pwd1.focus();
//         return false;
//       }
//       re = /[0-9]/;
//       if(!re.test(pwd1.value)) {
//         alert("Error: Password must contain at least one number (0-9)!");
//         pwd1.focus();
//         return false;
//       }
//       re = /[a-z]/;
//       if(!re.test(pwd1.value)) {
//         alert("Error: Password must contain at least one lowercase letter (a-z)!");
//         pwd1.focus();
//         return false;
//       }
//       re = /[A-Z]/;
//       if(!re.test(pwd1.value)) {
//         alert("Error: Password must contain at least one uppercase letter (A-Z)!");
//         pwd1.focus();
//         return false;
//       }
//   }
//   else if (pwd1.value == "" || pwd2.value == "") {
//      alert("Error: Please fill both Password fields and make sure their value is the same!");
//   }
//   else if (pwd1.value !== pwd2.value) {
//      alert("Error: Passwords do not match! Make sure they have the same value!");
//   }
//   else {
//     alert("Error: Please check that you've entered and confirmed your password!");
//     pwd1.focus();
//     return false;
//   }
// }

// export function checkPassword(string)
// {
//   // Have at least one number, one lowercase and one uppercase letter
//   // Have at least 8 characters
//   var re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
//   return re.test(string);
// }
