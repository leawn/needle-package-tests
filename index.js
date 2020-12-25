const needle = require('needle');

const startingFunc = (req, res, next) => {
    needle(
        'get',
        '',
    )
        .then(res => {
        console.log(res);
    })
        .catch(err => {
            console.log(err);
        });
}

(async () => {
    try {
        await startingFunc();
    } catch (e) {
        console.error(e);
        process.exit(1);
    }
})();