const app = "I don't do much."

function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
}

function destructivelyAppendKitten(name) {
  kittens.unshift(name);
  return kittens;
}
