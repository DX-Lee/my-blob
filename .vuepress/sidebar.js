const { createSideBarConfig } = require('./util')

const JAVASCRIPT_PATH = '/blogs/javascript/'
const BROWSER_PATH = '/blogs/browser/'
const CSS_PATH = '/blogs/css/'
const HTML_PATH = '/blogs/html/'
const NET_PATH = '/blogs/net/'
const ALGORITHM_PATH = '/blogs/alogrithm/'
const PERFORMANCE_PATH = '/blogs/performance/'

module.exports = {
  [JAVASCRIPT_PATH]: [
    createSideBarConfig('JS-基础', JAVASCRIPT_PATH + 'js-base'),
    createSideBarConfig('JS-DOM', JAVASCRIPT_PATH + 'js-dom'),
    createSideBarConfig('JS-BOM', JAVASCRIPT_PATH + 'js-bom')
  ],
  [CSS_PATH]: [
    createSideBarConfig('CSS-基础', CSS_PATH + 'css-base')
  ]
}