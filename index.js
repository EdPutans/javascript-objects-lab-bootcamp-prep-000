var recipes = new Object

function updateObjectWithKeyAndValue(object,key,value){
  var obj2 = Object.assign({},object,{[key]:value})
  return obj2
  }
  
function destructivelyUpdateObjectWithKeyAndValue(object,key,value){
  object[key]=value
  return object
}

function deleteFromObjectByKey(object,key){
 var dobj3 = delete object.key
  return obj3
}

function destrucivelyDeleteFromObjectByKey(object,key){
  delete object.key
  return object
}

