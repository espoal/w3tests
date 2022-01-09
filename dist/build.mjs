import { buildHelper } from 'build/build.mjs'



const entryPoints = [
  '../pkgs/geth/index.ts',
]
const external = [
  'web3'
]

buildHelper({ entryPoints, external })
