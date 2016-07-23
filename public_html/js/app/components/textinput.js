define([], function(){
  return {
    init: function(){
      this.number=0;
    },
    inc: function(field){
      this.number++;
      console.log(field);
      console.log(this.number);
    }
  };
});
