const cb1 = () => {
  console.log('callback function 1');
};

function cb2() {
  console.log('callback function 2');
}

function foo(cb1, cb2, cb3) {
  cb1();
  cb2();
  cb3();
}

foo(cb1, cb2, () => console.log('callback function 3'));
