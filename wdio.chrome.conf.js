const {config} = require('./wdio.base.conf')
const browserConfig = {
    ...config,
    capabilities: [
        {
            browserName: 'chrome',
            port: 5555,
            'goog:chromeOptions': {
                args: [
                    ...process.argv.includes('--headless') ? ['--headless', '--no-sandbox', '--disable-gpu'] : []
                ],
            }
        }
    ]
}

exports.config = browserConfig

