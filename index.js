function myArray(){
    Object.defineProperty(this,"size",{
        enumerable:false,
        writable:true
    });
    for(var i =0 ; i < arguments.length;i++){
        this[i]=arguments[i];
    }
    this.size=arguments.length;
}

myArray.prototype.push=function(ele){
    this[this.size]=ele;
    this.size++;
    return this.size;
}

myArray.prototype.pop=function(){
    let poppedElement=this[this.size-1];
    delete this[this.size-1];
    this.size--;
    return poppedElement;

}
myArray.prototype.top=function(){
    return this[this.size-1];
}
myArray.prototype.print=function(){
    var result=[];
    for(var i = 0 ; i < this.size ; i++){
        result.push(this[i]);
    }
    console.log(result);
}
myArray.prototype.printReverse=function(){
    var result=[];
    for(var i = this.size-1 ; i >=0 ; i--){
        result.push(this[i]);
    }
    console.log(result);
}
myArray.prototype.length=function(){
    return this.size;
}

var arr= new myArray(2,2,6,5,89,623,1212,43,0,545);

console.log(arr);

arr.pop();
console.log(arr);
arr.push(999);
console.log(arr);
console.log(arr.top());
arr.print();
arr.printReverse();

console.log(arr.length());
console.log(arr);