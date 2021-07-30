import { wrapFunctional } from './utils'

export { default as Footer } from '../..\\components\\footer.vue'
export { default as Header } from '../..\\components\\header.vue'
export { default as Logo } from '../..\\components\\Logo.vue'

export const LazyFooter = import('../..\\components\\footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c))
export const LazyHeader = import('../..\\components\\header.vue' /* webpackChunkName: "components/header" */).then(c => wrapFunctional(c.default || c))
export const LazyLogo = import('../..\\components\\Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c))
