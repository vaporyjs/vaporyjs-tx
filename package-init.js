// Browser environment
if (typeof window !== 'undefined') {
  VapTx = (typeof window.VapTx !== 'undefined') ? window.VapTx : require('vaporyjs-tx')
}

// Node environment
if (typeof global !== 'undefined') {
  VapTx = (typeof global.VapTx !== 'undefined') ? global.VapTx : require('vaporyjs-tx')
}
