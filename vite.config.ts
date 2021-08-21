import graphqlPlugin from '@rollup/plugin-graphql'
import reactRefresh from '@vitejs/plugin-react-refresh'
import path from 'path'
import { defineConfig } from 'vite'
import macrosPlugin from 'vite-plugin-babel-macros'
import notifier from 'vite-plugin-notifier'
import reactJsx from 'vite-react-jsx'
const projectRootDir = path.resolve(__dirname)
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [macrosPlugin(), reactJsx(), reactRefresh(), graphqlPlugin(), notifier()],
  resolve: {
    alias: [{ find: 'src', replacement: path.resolve(projectRootDir, 'src') }],
  },
})
