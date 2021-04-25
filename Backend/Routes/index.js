import loginController from '../Controllers/loginController'
import allHackersController from '../Controllers/allHackersController'
import hackerController from  '../Controllers/hackerController'
import getTopThreeController from '../Controllers/getTopThreeController'

export default (app)=> {
    app.post('/login', loginController)
    app.get('/getAllHackers', allHackersController)
    app.post('/getHackerById', hackerController)
    app.get('/getTopThree', getTopThreeController)  
    return app
}