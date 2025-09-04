Object.defineProperty( Array.prototype, "containsAll", { value: function containsAll(a) {
  return a.every(item=>this.includes(item))? true:false ;
} } );