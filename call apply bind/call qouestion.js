const phones = [
    {
      company: "apple",
      name: "iPhone",
    },
    {
      company: "samsung",
      name: "galaxy",
    },
  ];
  
  function printPhones(i) {
      // what is the value of this keyword inside 'printPhones'
      // this keyword here is 'z'
    this.print = function () {
      // here this keyword of print fn will be same as printPhone fn
      console.log('# ' + i + " " + this.company + ": " + this.name);
    };
    this.print(); // the this keyword inside print fn will be 'z'
  }
  
  printPhones.call(phones[0],0);
  printPhones.call(phones[1],1);
  