Page({
  data:{
   //addSize: 'mini',
   //substractSize: 'mini',
   array1:['a','b','c','d','e','f','g'],
   array2:['h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  },
  add: function(e){
     let newarray1 =this.data.array1;
     let newarray2 =this.data.array2;
     let c = newarray2.shift();
     newarray1.push(c);
     this.setData({
          array1: newarray1,
          array2: newarray2
     })
  },
  subtract: function(e){
     let newarray1 =this.data.array1;
     let newarray2 =this.data.array2;
     let c = newarray1.pop();
     newarray2.unshift(c);
     this.setData({
          array1: newarray1,
          array2: newarray2
     })
  }
})


