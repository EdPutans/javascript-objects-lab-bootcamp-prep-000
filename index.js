var recipes = new Object

function updateObjectWithKeyAndValue(object,key,value){
  obj2=object.assign({},object,{[key]:value})
  return obj2
  }