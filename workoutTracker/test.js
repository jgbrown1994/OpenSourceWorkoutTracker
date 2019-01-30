let a = {
  b: {
    c: {
      d: {
        e: 'f'
      }
    }
  }
}

let ans = 'b.c.d.e'

let fn = (obj, str) => {
  return obj[str];
}

console.log(a['b']['c']);
