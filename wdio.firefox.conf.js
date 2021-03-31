const {config} = require('./wdio.base.conf')

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

