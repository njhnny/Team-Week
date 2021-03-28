export default function Example(property1, property2, property3) {
  this.property1 = property1;
  this.property2 = property2;
  this.property3 = property3;
}

Example.prototype.exampleMethod = function() {
  return "I'm an example";
};
