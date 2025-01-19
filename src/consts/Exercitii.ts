// const carti = [
//     {
//         title: 'The Great Gatsby',
//         author: 'F. Scott Fitzgerald',
//         rating: 4.7,
//         genres: ['Classics', 'Fiction', 'Comedy'],
//         publishedYear: 1925,
//         pages: 218,
//     },
//     {
//         title: '1984',
//         author: 'George Orwell',
//         rating: 4.8,
//         genres: ['Classics', 'Dystopian'],
//         publishedYear: 1949,
//         pages: 328,
//     },
//     {
//         title: 'To Kill a Mockingbird',
//         author: 'Harper Lee',
//         rating: 4.3,
//         genres: ['Classics', 'Historical', 'Drama'],
//         publishedYear: 1960,
//         pages: 281,
//     },
//     {
//         title: 'The Catcher in the Rye',
//         author: 'J.D. Salinger',
//         rating: 4.1,
//         genres: ['Classics', 'Fiction'],
//         publishedYear: 1951,
//         pages: 277,
//     },
//     {
//         title: 'Brave New World',
//         author: 'Aldous Huxley',
//         rating: 4.6,
//         genres: ['Classics', 'Dystopian'],
//         publishedYear: 1932,
//         pages: 288,
//     },
//     {
//         title: 'Moby Dick',
//         author: 'Herman Melville',
//         rating: 3.9,
//         genres: ['Classics', 'Adventure'],
//         publishedYear: 1851,
//         pages: 585,
//     },
//     {
//         title: 'The Road',
//         author: 'Cormac McCarthy',
//         rating: 4.2,
//         genres: ['Dystopian', 'Fiction'],
//         publishedYear: 2006,
//         pages: 241,
//     },
//     {
//         title: 'Frankenstein',
//         author: 'Mary Shelley',
//         rating: 4.4,
//         genres: ['Classics', 'Horror'],
//         publishedYear: 1818,
//         pages: 280,
//     },
// ];


// const moviesGenre = (books) => {

//     const genreCounts = {};


//     books.forEach(book => {
//         book.genres.forEach(genre => {
//             if (genreCounts[genre]) {
//                 genreCounts[genre] = genreCounts[genre] + 1;
//             } else {
//                 genreCounts[genre] = 1;
//             }
//         });
//     });

//     return genreCounts;
// };


// //   METODA CU MAP

// const moviesGenreMap = (carti) => {
//     const genreCountMap = {}
//     const genres = carti.map(carte => carte.genres).flat()

//     genres.forEach(genre => {
//         if (genreCountMap[genre]) {
//             genreCountMap[genre] = genreCountMap[genre] + 1;
//         } else {
//             genreCountMap[genre] = 1;
//         }
//     });
//     return genreCountMap
// }




// // 1. Write some code, to get all the users from the API 

// const getUsers = async () => {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users")
//     const users = response.json()
//     return users
// }

// ---------------------------------------------------------------------------------------

// // 4. Write a function to return an array of objects, which contain the name of the user, and all the albums that the user has.

// const getUserAlbums = async () => {
//     const usersResponse = await fetch("https://jsonplaceholder.typicode.com/users")
//     const users = await usersResponse.json()
//     console.log("users", users)
//     const albumsResponse = await fetch("https://jsonplaceholder.typicode.com/albums")
//     const albums = await albumsResponse.json()
//     console.log("albums", albums)
//     const userAlbums = users.map((user) => {
//         return {
//             name: user.name,
//             albums: albums.filter((album) => {
//                 return user.id === album.userId
//             }).map((album) => {
//                 return album.title
//             })
//         }

//     })
//     console.log("userAlbums", userAlbums)
//     return userAlbums

// }

// --------------------------------------------------------------------------------------------------

// // Exercitiul 2. A \\

// const enabledPackages = ["$rc_monthly", "$rc_annual"];
// const availablePackages = [
//     {
//         "packageType": "MONTHLY",
//         "presentedOfferingContext": {
//             "offeringIdentifier": "default",
//             "targetingContext": null,
//             "placementIdentifier": null
//         },
//         "identifier": "$rc_monthly",
//         "product": {
//             "currencyCode": "USD",
//             "introPrice": {
//                 "periodUnit": "WEEK",
//                 "price": 0,
//                 "period": "P1W",
//                 "priceString": "$0.00",
//                 "periodNumberOfUnits": 1,
//                 "cycles": 1
//             },
//             "identifier": "monthly_default",
//             "priceString": "$7.99",
//             "description": "Full Access to the app content",
//             "productType": "NON_CONSUMABLE",
//             "discounts": [],
//             "productCategory": "SUBSCRIPTION",
//             "price": 7.99,
//             "subscriptionPeriod": "P1M",
//             "title": "Monthly Subscription"
//         },
//         "offeringIdentifier": "default"
//     },
//     {
//         "identifier": "$rc_three_month",
//         "presentedOfferingContext": {
//             "placementIdentifier": null,
//             "targetingContext": null,
//             "offeringIdentifier": "default"
//         },
//         "packageType": "THREE_MONTH",
//         "product": {
//             "title": "Quarterly Subscription",
//             "currencyCode": "USD",
//             "description": "Full access to the app content",
//             "discounts": [],
//             "productType": "NON_CONSUMABLE",
//             "subscriptionPeriod": "P3M",
//             "price": 19.990000000000002,
//             "productCategory": "SUBSCRIPTION",
//             "priceString": "$19.99",
//             "identifier": "quarterly_default",
//             "introPrice": {
//                 "cycles": 1,
//                 "price": 0,
//                 "period": "P1W",
//                 "priceString": "$0.00",
//                 "periodNumberOfUnits": 1,
//                 "periodUnit": "WEEK"
//             }
//         },
//         "offeringIdentifier": "default"
//     },
//     {
//         "product": {
//             "introPrice": {
//                 "cycles": 1,
//                 "price": 0,
//                 "priceString": "$0.00",
//                 "period": "P1W",
//                 "periodNumberOfUnits": 1,
//                 "periodUnit": "WEEK"
//             },
//             "title": "Half Yearly Subscription",
//             "identifier": "half_yearly_default",
//             "priceString": "$34.99",
//             "productType": "NON_CONSUMABLE",
//             "description": "Full Access to the app content",
//             "discounts": [],
//             "subscriptionPeriod": "P6M",
//             "productCategory": "SUBSCRIPTION",
//             "price": 34.989999999999995,
//             "currencyCode": "USD"
//         },
//         "offeringIdentifier": "default",
//         "identifier": "$rc_six_month",
//         "presentedOfferingContext": {
//             "placementIdentifier": null,
//             "targetingContext": null,
//             "offeringIdentifier": "default"
//         },
//         "packageType": "SIX_MONTH"
//     },
//     {
//         "identifier": "$rc_annual",
//         "presentedOfferingContext": {
//             "targetingContext": null,
//             "offeringIdentifier": "default",
//             "placementIdentifier": null
//         },
//         "product": {
//             "currencyCode": "USD",
//             "priceString": "$59.99",
//             "identifier": "yearly_default",
//             "price": 59.989999999999995,
//             "subscriptionPeriod": "P1Y",
//             "productCategory": "SUBSCRIPTION",
//             "introPrice": {
//                 "cycles": 1,
//                 "price": 0,
//                 "priceString": "$0.00",
//                 "periodNumberOfUnits": 1,
//                 "period": "P1W",
//                 "periodUnit": "WEEK"
//             },
//             "title": "Yearly Subscription",
//             "discounts": [],
//             "productType": "NON_CONSUMABLE",
//             "description": "Full Access to the app content"
//         },
//         "packageType": "ANNUAL",
//         "offeringIdentifier": "default"
//     }
// ]


// const getPaywallConfig = async () => {
//     const response = await fetch("https://littlebitofuniverse-56c42218f787.herokuapp.com/get-paywall-config")
//     const data = await response.json()
//     return data
// };

// const generateDescription = async (offering) => {
//     let title = offering.product.title
//     let price = offering.product.priceString
//     let subscriptionPeriod = offering.product.subscriptionPeriod
//     let billed = ""
//     let description = offering.product.description

//     if (subscriptionPeriod[2] === "Y") {
//         if (subscriptionPeriod[1] === 1) {
//             billed = `${subscriptionPeriod[1]} year`
//         } else {
//             billed = `${subscriptionPeriod[1]} years`
//         }
//     }
//     if (subscriptionPeriod[2] === "M") {
//         if (subscriptionPeriod[1] === 1) {
//             billed = `${subscriptionPeriod[1]} month`
//         } else {
//             billed = `${subscriptionPeriod[1]} months`
//         }
//     }

//     const paywallConfig = await getPaywallConfig()
//     let features = paywallConfig.data.features.join(", ")
//     let termsLink = paywallConfig.data.termsAndCondUrl
//     let privacyLink = paywallConfig.data.privacyPolicyUrl



//     const fullDescription =
//         `This package is a "${title}" and it costs ${price}.
//       The subscription offers ${description}, and is billed every ${billed}.
//       The app features ${features}.
//       Before purchasing please read our Terms and conditions and Privacy Policy from these links:
//       ${termsLink}, ${privacyLink}`


//     return fullDescription
// };
// generateDescription(availablePackages[3])

// //   --------------------------------------------------------------------------------------------------

// // Exercitiul 2. B \\

// const findNumber = (tomatoBasket, tomato) => {
//   let punga;
//   tomatoBasket.forEach(element => {
//     if (element === tomato) {
//       console.log(`L-am gasit pe ${tomato}`);
//       punga = element;
//     }
//   });
//   return punga;
// };

// findNumber([12, 19, 20, 25, 30], 25);
// findNumber([12, 19, 20, 25, 30], 99);

// const includesNumber = (tomatoBasket, tomato) => {
//   let punga = false;
//   tomatoBasket.forEach(element => {
//     if (element === tomato) {
//       console.log(`L-am gasit pe ${tomato}`);
//       punga = true;
//     }
//   });
//   return punga;
// };

// includesNumber([12, 19, 20, 25, 30], 25);
// includesNumber([12, 19, 20, 25, 30], 99);

// console.log('andrei');

// const deepIncludes = (tomatoBasket, tomato) => {
//   let found = false;
//   tomatoBasket.forEach(box => {
//     box.forEach(element => {
//       if (element === tomato) {
//         found = true;
//       }
//     });
//   });
//   return found;
//   console.log();
// };

// console.log('marty');

// deepIncludes(
//   [
//     [1, 2, 3, 4],
//     [6, 7, 8, 9],
//     [45, 77, 99, 25, 65],
//   ],
//   25,
// );

// console.log('ramona');

// const sumNumbers = numbers => {
//   let total = 0;
//   numbers.forEach(element => {
//     total += element;
//   });
//   return total;
// };

// sumNumbers([5, 10, 15]);

// const sumOddNumbers = numbers => {
//   let total = 0;
//   numbers.forEach(element => {
//     if (element % 2 !== 0) {
//       total = total + element;
//     }
//   });
//   return total;
// };

// sumOddNumbers([5, 10, 15, 22, 24, 33, 34]);

// const sumTargetLargerNumbers = (numbers, target) => {
//   let total = 0;
//   numbers.forEach(element => {
//     if (element > target) {
//       total = total + element;
//     }
//   });
//   return total;
// };

// sumTargetLargerNumbers([5, 10, 15, 22, 24, 33, 34], 25);

// const sumTargetSmallerNumbers = (numbers, target) => {
//   let total = 0;
//   numbers.forEach(element => {
//     if (element < target) {
//       total = total + element;
//     }
//   });
//   return total;
// };

// sumTargetSmallerNumbers([5, 10, 15, 22, 24, 33, 34], 25);

// // const sumTargetNumbers = (numbers, target, direction) => {
// //   let total = 0;

// //   numbers.forEach(element => {
// //     if (direction === 'numere mai mari' && element > target) {
// //       total = total + element;
// //     } else if (direction === 'numere mai mici' && element < target) {
// //       total = total + element;
// //     }
// //   });

// //   return total;
// // };

// // sumTargetNumbers([2, 4, 6, 8, 10, 20, 30], 10, 'numere mai mari');
// // sumTargetNumbers([2, 4, 6, 8, 10, 20, 30], 10, 'numere mai mici');

// const sumTargetNumbers2 = (numbers, target, direction) => {
//   if (direction === 'numere mai mari') {
//     return sumTargetLargerNumbers(numbers, target);
//   } else if (direction === 'numere mai mici') {
//     return sumTargetSmallerNumbers(numbers, target);
//   }
// };

// sumTargetNumbers2([2, 4, 6, 8, 10, 20, 30], 10, 'numere mai mari');
// sumTargetNumbers2([2, 4, 6, 8, 10, 20, 30], 10, 'numere mai mici');

// // const plusNumbers = (numere, plus)=>{
// //   let total = 0
// //   numere.forEach(element => {
// //     total = total + element
// // })
// // }

// // plusNumbers = ([2,4,6],"+")

// // const sumNumbers = numbers => {
// //   let total = 0;
// //   numbers.forEach(element => {
// //     total = total + element;
// //   });
// //   return total;
// // };

// // const calculate = (numbers, target, sign)
// // let result = 0

// // sumNumbers.forEach(element => {
// // if (sign === "+") {
// //   total = numbers + element
// // } else if (sign === "-") {
// //   total = numbers - element
// // } else if (sign === "*") {
// //   total = numbers * element
// // } else if (sign === "/") {
// //   total = numbers / element
// // } else (sign === "**") {
// //   total =
// // }
// // })

// // calculate([33, 22], "+")
// // calculate([33, 22], "-")
// // calculate([33, 22], "*")
// // calculate([33, 22], "/")
// // calculate([33, 22], "**")

// const calculate = (numberA, numberB, sign) => {
//   if (
//     typeof numberA !== 'number' ||
//     typeof numberB !== 'number' ||
//     typeof sign !== 'string'
//   ) {
//     console.log('Input data type is wrong');
//     return null;
//   }
//   if (sign === 'impartire' && numberB === 0) {
//     console.log('Impartirea la 0 nu se poate');
//     return null;
//   }
//   let result = 0;

//   if (sign === 'adunare') {
//     result = numberA + numberB;
//   } else if (sign === 'scadere') {
//     result = numberA - numberB;
//   } else if (sign === 'inmultire') {
//     result = numberA * numberB;
//   } else if (sign === 'impartire') {
//     result = numberA / numberB;
//   } else if (sign === 'putere') {
//     result = numberA ** numberB;
//   } else {
//     console.log('Wrong sign');
//     return null;
//   }
//   return result;
// };

// calculate(33, 0, 'adunare');
// calculate(33, 22, 'scadere');
// calculate(33, 22, 'inmultire');
// calculate(33, 22, 'impartire');
// calculate(33, 2, 'putere'); // la puterea
// calculate(33, 3, 'blaBla');

// const checkUser = (userID, isLoggedIn, isOnBoarded, subscription) => {
//   if (!userID) {
//     console.log('Get user data');
//     return;
//   }
//   if (isLoggedIn) {
//     console.log('Is logged in');
//     if (isOnBoarded) {
//       console.log('On boarded, show home screen');
//       if (subscription === 'monthly') {
//         console.log('You have one month subscription');
//       } else if (subscription === '3 months') {
//         console.log('You have three months subscription');
//       } else if (subscription === '12 months') {
//         console.log('You have twelve months subscription');
//       } else {
//         console.error('Something went wrong. Please contact support');
//       }
//     } else {
//       console.log('Show on boarding screen');
//     }
//   } else {
//     console.log('Please Log in');
//   }
// };

// const inStock = true;
// const cardValid = true;

// console.log('Order');
// console.log('Receive order');
// console.log('Check order');
// if (inStock === true) {
//   console.log('Check credit card');
//   if (cardValid === true) {
//     console.log('Process credit card');
//     console.log('Deliver');
//     console.log('Receive');
//   } else {
//     console.log('Cancel order');
//   }
// } else {
//   console.log('Cancel order');
// }

// const getLargestNumberFromArray = numbers => {
//   if (Array.isArray(numbers) === false) {
//     return;
//   }
//   let max = numbers[0];

//   numbers.forEach(element => {
//     if (element > max) {
//       max = element;
//     }
//   });
//   return max;
// };

// getLargestNumberFromArray([2, 43, 21, 33, 45, 99, 98]);

// const getLargestNumberFromArray2 = numbers => {
//   return Math.max(...numbers);
// };

// getLargestNumberFromArray2([5, 8, 9, 78, 445]);
// getLargestNumberFromArray2([5, -30, -2, 0]);

// const start = true;
// const registered = false;
// const products = true;

// console.log('Start');
// console.log('Registered?');
// if (registered === false) {
//   console.log('New user');
//   console.log('Registration');
//   console.log('Product catalog');
//   console.log('Customer places order');
//   console.log('Order request system confirms the receipt of order');
//   console.log('Product available');
//   if (products === true) {
//     console.log('Confirm order');
//     console.log('Send e-Mail confirmation');
//     console.log('Dispatch the order');
//   } else {
//     console.log('Login');
//   }
// }

// const myNewProject = false;

// const startProject = (hasAccount, correctPassword, hasUsedSimilarApps) => {
//   console.log('Start Project');
//   console.log('Do you have an account');
//   if (hasAccount === true) {
//     console.log('Please Log In');
//     console.log('Is password correct?');
//     while (!correctPassword) {
//       console.log('Incorrect password. Try again!');
//     }
//     console.log('Welcome to my first page');
//     console.log('Have you ever use a similar app until now?');
//     if (hasUsedSimilarApps === true) {
//       console.log('Please select which plan is better for you...');
//     } else {
//       console.log('Make a tour...');
//       console.log('Are you ready to upgrade your skills?');
//     }
//   } else {
//     console.log("You can't see the content. Please create an account");
//   }
// };

// // ---------------------------------------------------------------------------

// const getShortWords = words => {
//   return words.filter(word => word.length <= 4);
// };

// const shortWords = getShortWords([
//   'louie',
//   'tomy',
//   'petec',
//   'piper',
//   'anderson',
//   'andy',
//   'glenglen',
//   'red',
//   'blue',
// ]);

// console.log(shortWords);

// // ---------------------------------------------------------------------------

// // const getNumberOfVowels = item => {
// //   const vowels = 'aeiouAEIOU';
// //   let count = 0;

// //   getNumberOfVowels.forEach(item => {
// //     console.log(vowels);
// //   });
// // };

// // const getNumberOfVowels()

// const getNumberOfVowels = sentence => { };

// getNumberOfVowels('mama are mere');
// getNumberOfVowels('pterodactil');
// getNumberOfVowels('Marty e cel mai flocos pisoi');

// // ---------------------------------------------------------------------------

// const registration = false;

// const startRegistration = (isRegistered, isProductAvailable) => {
//   console.log('Start Project');
//   console.log('Registered?');
//   if (isRegistered === true) {
//     console.log('Login');
//   } else {
//     console.log('New user');
//     console.log('Registration');
//   }
//   while (!isProductAvailable) {
//     console.log('Product catalog');
//     console.log('Customer places order');
//     console.log('Order request system confirms the receipt of order');
//   }
//   console.log('Confirm order');
//   console.log('Send e-mail confirmation');
//   console.log('Dispatch the order');
//   console.log('End');
// };

// // ----------------------------------------------------------------------------
// const getShortWords2 = words => {
//   const result = [];
//   for (let i = 0; i < words.length; i = i + 1) {
//     if (words[i].length <= 4) {
//       result.push(words[i]);
//     }
//   }
//   return result;
// };

// const shortWords2 = getShortWords2([
//   'louie',
//   'tomy',
//   'petec',
//   'piper',
//   'anderson',
//   'andy',
//   'glenglen',
//   'red',
//   'blue',
// ]);

// console.log(shortWords2);

// const getUpperCaseColors = colors => {
//   let i = 0;
//   while (i < colors.length) {
//     colors[i].toUpperCase();
//   }
// };

// getUpperCaseColors(['GREEN', 'black', 'red', 'yellow']);

// // -----------Varianta "while"-------------

// // const getShortWords3 = (words2) => {
// //   let i = 0
// //   while (i < getShortWords3.length) {
// //     console.log(getShortWords3[i])
// //     i = i + 1
// //   }

// //   getShortWords3.forEach(element) => {
// //     console.log(element)
// //   }
// //   }

// //   getShortWords3("red", "green")
// // ----------------------------------------------------------------------------

// const getUpperCaseData = upperCaseWords => {
//   if (Array.isArray(upperCaseWords)) {
//     return upperCaseWords
//       .filter(item => typeof item === 'string')
//       .map(item => item.toUpperCase());
//   } else {
//     console.error('Nu ai respectat pasii');
//     return [];
//   }
// };

// getUpperCaseData([
//   'andrei',
//   'laura',
//   'bula',
//   'strula',
//   'michale jackson',
//   'BLABLA',
//   'manele',
//   'ceee???',
// ]);
// // ----------------------------------------------------------------------------
// // getUpperCaseData("abcd", "23")
// // // should return an empty array and console.error something.

// const books = [
//   {
//     title: 'The Great Gatsby',
//     author: 'F. Scott Fitzgerald',
//     rating: 4.7,
//     genres: ['Classics', 'Fiction', 'Comedy'],
//     publishedYear: 1925,
//     pages: 218,
//   },
//   {
//     title: '1984',
//     author: 'George Orwell',
//     rating: 4.8,
//     genres: ['Classics', 'Dystopian'],
//     publishedYear: 1949,
//     pages: 328,
//   },
//   {
//     title: 'To Kill a Mockingbird',
//     author: 'Harper Lee',
//     rating: 4.3,
//     genres: ['Classics', 'Historical', 'Drama'],
//     publishedYear: 1960,
//     pages: 281,
//   },
//   {
//     title: 'The Catcher in the Rye',
//     author: 'J.D. Salinger',
//     rating: 4.1,
//     genres: ['Classics', 'Fiction'],
//     publishedYear: 1951,
//     pages: 277,
//   },
//   {
//     title: 'Brave New World',
//     author: 'Aldous Huxley',
//     rating: 4.6,
//     genres: ['Classics', 'Dystopian'],
//     publishedYear: 1932,
//     pages: 288,
//   },
//   {
//     title: 'Moby Dick',
//     author: 'Herman Melville',
//     rating: 3.9,
//     genres: ['Classics', 'Adventure'],
//     publishedYear: 1851,
//     pages: 585,
//   },
//   {
//     title: 'The Road',
//     author: 'Cormac McCarthy',
//     rating: 4.2,
//     genres: ['Dystopian', 'Fiction'],
//     publishedYear: 2006,
//     pages: 241,
//   },
//   {
//     title: 'Frankenstein',
//     author: 'Mary Shelley',
//     rating: 4.4,
//     genres: ['Classics', 'Horror'],
//     publishedYear: 1818,
//     pages: 280,
//   },
// ];

// const books2 = [
//   {
//     title: 'Pride and Prejudice',
//     author: 'Jane Austen',
//     rating: 4.6,
//     genres: ['Classics', 'Romance'],
//     publishedYear: 1813,
//     pages: 279,
//   },
//   {
//     title: 'The Hobbit',
//     author: 'J.R.R. Tolkien',
//     rating: 4.7,
//     genres: ['Classics', 'Fantasy'],
//     publishedYear: 1937,
//     pages: 310,
//   },
//   {
//     title: 'Jane Eyre',
//     author: 'Charlotte Brontë',
//     rating: 4.5,
//     genres: ['Classics', 'Drama'],
//     publishedYear: 1847,
//     pages: 507,
//   },
//   {
//     title: 'Animal Farm',
//     author: 'George Orwell',
//     rating: 4.4,
//     genres: ['Classics', 'Satire'],
//     publishedYear: 1945,
//     pages: 112,
//   },
//   {
//     title: 'Dracula',
//     author: 'Bram Stoker',
//     rating: 4.2,
//     genres: ['Classics', 'Horror'],
//     publishedYear: 1897,
//     pages: 418,
//   },
//   {
//     title: 'The Odyssey',
//     author: 'Homer',
//     rating: 4.3,
//     genres: ['Classics', 'Epic'],
//     publishedYear: -800,
//     pages: 541,
//   },
//   {
//     title: 'The Alchemist',
//     author: 'Paulo Coelho',
//     rating: 4.2,
//     genres: ['Philosophy', 'Fiction'],
//     publishedYear: 1988,
//     pages: 197,
//   },
//   {
//     title: 'Wuthering Heights',
//     author: 'Emily Brontë',
//     rating: 4.0,
//     genres: ['Classics', 'Gothic'],
//     publishedYear: 1847,
//     pages: 416,
//   },
// ];

// const getGoodBooks = (booksData, rating) => {
//   const result = [];

//   for (let i = 0; i < booksData.length; i++) {
//     if (booksData[i].rating >= rating) {
//       result.push(booksData[i].title);
//     }
//   }
//   return result;
// };

// getGoodBooks(books);

// const a = 1;
// const b = 2;

// const sumNumbers2 = (num1, num2) => {
//   return num1 + num2;
// };

// sumNumbers2(2, 10);
// sumNumbers2(a, b);

// // ------------------------------------------------------------------------
// // ------------------------------------------------------------------------

// const getGoodBooks3 = (booksData, rating) => {
//   return booksData
//     .filter(book => book.rating >= rating)
//     .map(book => book.title);
// };

// // ------------------------------------------------------------------------
// // ------------------------------------------------------------------------

// const things = ["apple", "pear", "red", "bear", "user", "apple", "pear", "apple", "apple", "bear", "kiwi"];

// const getNumberOfStuff = (stuff) => {
//   const result = {};

//   stuff.forEach(item => {
//     if (result[item]) {
//       result[item] = result[item] + 1;
//     } else {
//       result[item] = 1;
//     }
//   });

//   return result;
// };

// getNumberOfStuff(things);
