class NotFoundError extends Error{
    constructor(){
        super()
        this.statusCode = 404
        this.message = 'Not Found'
    }
}

class AuthenticationError extends Error{
    constructor(){
        super()
        this.statusCode = 401
        this.message = 'Not Authenticated'
    }
}

class BadRequestError extends Error{
    constructor(){
        super()
        this.statusCode = 400
        this.message = 'Bad Request'
    }
}

class TeamFullError extends Error{
    constructor(){
        super()
        this.statusCode = 400
        this.message = 'Team is Full'
    }
}

module.exports = {
    NotFoundError,
    AuthenticationError,
    BadRequestError,
    TeamFullError
}