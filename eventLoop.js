// 環境によって実行時間が変わるため、非推奨。setImmediateを使うべき
setTimeout(() => {
  console.log('setTimeout 0ms');
}, 0);

setTimeout(() => {
    console.log('setTimeout 100ms');
  }, 100);

setImmediate(() => {
  console.log('setImmediate');
});



Promise.resolve().then(() => {
  console.log('promise');
});


process.nextTick(() => {
    console.log('nextTick');
});   
  
  