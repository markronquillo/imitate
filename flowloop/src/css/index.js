function requireAll (r) { r.keys().forEach(r) }
requireAll(require.context('./base/', true, /\.sass$/))
requireAll(require.context('./transitions/', true, /\.sass$/))
requireAll(require.context('./components/', true, /\.sass$/))