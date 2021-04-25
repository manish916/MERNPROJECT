import users from '../Schemas/userSchema'

export default (request, response) => {
        const { userId, password } = request.body
        if (userId && password) {
                users.findOne({ userId: userId }, (err, result) => {
                        if (err) {
                                response.send({ error: true, message: "something went wrong" })
                        } else {
                                try {
                                        if (result.password == password) {
                                                response.send({ error: false, message: "user not found" })
                                        } else {
                                                response.send({ error: true, message: "invalid credentials" })
                                        }
                                } catch (error) {
                                        response.send({ error: true, message: "user not found" })
                                }
                        }
                })
        } else {
                response.send({ error: true, message: "Please enter username and password" })
        }


}