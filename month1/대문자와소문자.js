var my_string = 'cccCCC';

function solution(my_string) {
  return my_string
    .split(',')
    .map((item) =>
      item === item.toLowerCase()
        ? console.log(item.toUpperCase())
        : consoleitem.toLowerCase()
    )
    .join(',');

  // return my_string
  //   .split('')
  //   .map((v, index) =>
  //     my_string.charCodeAt(index) < 97 ? v.toLowerCase() : v.toUpperCase()
  //   )
  //   .join('');
}

console.log(solution(my_string));
