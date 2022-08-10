function deapCloning (source) {
  const target = Array.isArray(source) ? [] : {}
  for (const prop in source) {
    if (typeof source[prop] === 'object') {
      target[prop] = deapCloning(source[prop])
    } else {
      target[prop] = source[prop]
    }
  }
  return target
}

export {
  deapCloning
}
