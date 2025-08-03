// 🔥 Stop Using `==` in JavaScript — Here's Why!

// 0 == '0'      // true 😱
// false == 'false'  // false 😮
// [] == false       // true 🤯
 
// 0 == '0'    // true ❌
// 0 === '0'   // false ✅


// // ❌ Bad Practice: Using == (loose equality)
// 0 == false            // true 🤯
// "" == 0               // true
// null == undefined     // true
// "5" == 5              // true
// [] == false           // true
// [] == ![]             // true


// // ✅ Good Practice: Use === (strict equality)
// 0 === false           // false ✅
// "" === 0              // false
// null === undefined    // false
// "5" === 5             // false
// [] === false          // false
// [] === ![]            // false



// ❌ Bad Practice: Using == (loose equality)
console.log("❌ Bad Practice: Using ==")
console.log("0 == false        =>", 0 == false);            // true 🤯
console.log('"" == 0           =>', "" == 0);                // true
console.log("null == undefined =>", null == undefined);      // true
console.log('"5" == 5          =>', "5" == 5);               // true
console.log("[] == false       =>", [] == false);            // true
console.log("[] == ![]         =>", [] == ![]);              // true


// ✅ Good Practice: Using === (strict equality)
console.log("\n✅ Good Practice: Using === ")
console.log("0 === false       =>", 0 === false);            // false ✅
console.log('"" === 0          =>', "" === 0);               // false
console.log("null === undefined=>", null === undefined);     // false
console.log('"5" === 5         =>', "5" === 5);              // false
console.log("[] === false      =>", [] === false);           // false
console.log("[] === ![]        =>", [] === ![]);             // false

// more details see script.md file