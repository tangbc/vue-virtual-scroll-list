// gen a simple unique id.
export default (prefix) => {
  return `${prefix}$${Math.random().toString(16).substr(9)}`
}
