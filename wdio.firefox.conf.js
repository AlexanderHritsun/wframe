const {config} = require('./wdio.local.conf')

const browserConfig = {
    ...config,
    capabilities: [
        {
            browserName: 'firefox',
            port: 5555,
            'moz:firefoxOptions': {
                args: [
                    ...process.argv.includes('--headless') ? ['-headless'] : []
                ]
            }
        }
    ]
}

exports.config = browserConfig

