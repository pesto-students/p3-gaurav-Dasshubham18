let contactInfo = {
    firstName: "Shubham",
    lastName: "Das",
    age: 25,
  };
  
  const printInfo = function (district, state, phoneNumber) {
    console.log(
      `Here is the personal information of the new student that joined - His name is ${this.firstName} ${this.lastName}. He is ${this.age} years old. He is from ${district}, ${state}. His contact number is ${phoneNumber}. `
    );
  };
  
  // Call Example
  printInfo.call(contactInfo, "Nagpur", "Maharashtra", 8999901763);
  
  //Apply Example
  printInfo.apply(contactInfo, ["Nagpur", "Maharashtra", 8999901763]);
  
  //Bind Example
  const giveContactInfo = printInfo.bind(
    contactInfo,
    "Nagpur", "Maharashtra", 8999901763
  );
  giveContactInfo();