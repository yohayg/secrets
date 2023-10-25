const Secrets = require('./lib/secrets');

module.exports.Secrets = Secrets;

module.exports.config = function (options = {}) {

    const secrets = new Secrets(options);

    return secrets.config();
};

module.exports.configSync = function (options = {}) {

    const secrets = new Secrets(options);

    return secrets.configSync();
};

module.exports.secretSync = function (options) {

    const secrets = new Secrets({
        region: options.region
    });

    delete options.region;

    return secrets.getSecretSync(options);
};
