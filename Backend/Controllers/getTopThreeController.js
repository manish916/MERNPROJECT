import hackers from '../Schemas/schema'
export default (request, response) => {
    try {
        hackers.find({}, (err, result) => {
            if (err) {
                response.send({ error: true, message: "something went wrong" })
            } else {
                response.send({ error: false, message: "success", result: result.slice(0, 3) })
            }
        }).sort({ overAllRank: 1 })
    } catch (error) {
        response.send({ error: true, message: "something went wrong" })
    }
}