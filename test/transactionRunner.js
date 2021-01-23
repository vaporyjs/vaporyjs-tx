const Tx = require('../index.js')
const tape = require('tape')
const vapUtil = require('vaporyjs-util')
const argv = require('minimist')(process.argv.slice(2))
const testing = require('vaporyjs-testing')
const common = require('vapory-common')

var txTests = testing.getTests('transaction', argv)

const bufferToHex = vapUtil.bufferToHex
const addHexPrefix = vapUtil.addHexPrefix
const stripHexPrefix = vapUtil.stripHexPrefix
const setLength = vapUtil.setLength

function addPad (v) {
  if (v.length % 2 === 1) {
    v = '0' + v
  }
  return v
}

function normalizeZero (v) {
  if (!v || v === '0x') {
    return '0x00'
  } else {
    return v
  }
}

testing.runTests(function (testData, sst, cb) {
  var tTx = testData.transaction

  try {
    var tx = new Tx(new Buffer(testData.rlp.slice(2), 'hex'))
    if (testData.blocknumber !== String(common.homeSteadForkNumber.v)) {
      tx._homestead = false
    }
  } catch (e) {
    sst.equal(undefined, tTx, 'should not have any fields ')
    cb()
    return
  }

  if (tx.validate()) {
    try {
      sst.equal(bufferToHex(tx.data), addHexPrefix(addPad(stripHexPrefix(tTx.data))), 'data')
      sst.equal(normalizeZero(bufferToHex(tx.gasLimit)), tTx.gasLimit, 'gasLimit')
      sst.equal(normalizeZero(bufferToHex(tx.gasPrice)), tTx.gasPrice, 'gasPrice')
      sst.equal(normalizeZero(bufferToHex(tx.nonce)), tTx.nonce, 'nonce')
      sst.equal(normalizeZero(bufferToHex(setLength(tx.r, 32))), normalizeZero(bufferToHex(setLength(tTx.r, 32))), 'r')
      sst.equal(normalizeZero(bufferToHex(tx.s)), normalizeZero(bufferToHex(tTx.s)), 's')
      sst.equal(normalizeZero(bufferToHex(tx.v)), normalizeZero(bufferToHex(tTx.v)), 'v')
      sst.equal(bufferToHex(tx.to), addHexPrefix(tTx.to), 'to')
      sst.equal(normalizeZero(bufferToHex(tx.value)), tTx.value, 'value')
      sst.equal(normalizeZero(bufferToHex(tx.getSenderAddress())), addHexPrefix(testData.sender), "sender's address")
    } catch (e) {
      sst.fail(e)
    }
  } else {
    sst.equal(undefined, tTx, 'should have fields ')
  }
  cb()
}, txTests, tape)
