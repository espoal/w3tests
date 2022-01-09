import esbuild from 'esbuild'
import {pnpPlugin} from '@yarnpkg/esbuild-plugin-pnp'

export const devOptions = {
  entryPoints: [],
  plugins: [pnpPlugin()],
  tsconfig: 'tsconfig.json',
  bundle: true,
  splitting: false,
  format: "esm",
  outdir: "build",
  platform: "node",
  target: "esnext",
  minify: false,
  external: [],
  outExtension: { '.js': '.mjs' }
}

export const watchOptions = {
  ...devOptions,
  watch: true,
}


export { esbuild }

export const buildHelper = ({entryPoints, external, options = devOptions}) => {

  if (entryPoints === undefined) {
    throw new Error("entryPoints are required")
  }

  options.entryPoints = entryPoints

  options.external = external || []

  const myArgs = process.argv.slice(2)
  const watchFlag = myArgs.find(arg => arg === '--watch')
  if ( watchFlag ) options.watch = true

  esbuild.build(options)
    .catch(()=> process.exit(1))
}
