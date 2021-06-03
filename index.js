const mongoose = require('mongoose')
const {providerWrapper} = require("./DataProvider");
const {Aggregator} = require("./utils/Aggregator");

const Connector = (connectionString, fieldsConstants, common ) => {
    async function start() {
        try {
            await mongoose.connect(connectionString,
                {
                    useNewUrlParser: true,
                    useFindAndModify: false,
                    useUnifiedTopology: true,
                })

        } catch (e) {
            console.log(e)
        }
    }
    start()
        .then(r => console.log('Connected to bd'))
    const aggregateOptions = Aggregator(common)

    return providerWrapper(aggregateOptions, common, fieldsConstants)
}

exports.Connector = Connector