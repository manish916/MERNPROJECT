import hackers from '../Schemas/schema'

export default (request, response) => {
    hackers.find({}, (err, result) => {
        try {
            if (err) {
                response.send({ error: true, message: "something went wrong" })
            } else {
                response.send({ error: false, message: "success", data: result })
            }
        } catch (error) {
            response.send({ error: true, message: "something went wrong" })
        }
    }).sort({name:1})


}