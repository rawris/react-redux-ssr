module.exports = {
    staticFileGlobs: [
        './public/**/**.html',
        './public/images/**.*',
        './public/**',
        '/'
    ],
    dontCacheBustUrlsMatching: /\.\w{8}\./,
    swFilePath: './public/service-worker.js',
    navigateFallback: './200.html',
    navigateFallbackWhitelist: [/^(?!\/__).*/],
    staticFileGlobsIgnorePatterns: [/\.map$/, /asset-manifest\.json$/],
    stripPrefix: './public'
}