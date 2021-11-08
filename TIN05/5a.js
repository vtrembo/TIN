const cow = {
    name: "Milka",
    age: 3,
    gender: "male",
    eatGrass : function () {
      return "Cow is feeded with grass";
    },
    moo: function () {
      return "moo-moo";
    },
  };
  
  function getObjectProperties(cow){
      let result = '';
      for (let prop in cow){
          result+= `${prop} - ${typeof cow[prop]}; `;
      }
      return result;
  }
   console.log(getObjectProperties(cow));
   console.log(cow.eatGrass());
   console.log(cow.moo());