import { NextFunction, Request, Response } from 'express'
import passport from '../libs/passport';
import jwt from 'jsonwebtoken';
import { IUser } from '../models/UserModel';
import tokenGenerator from '../utils/tokenGenerator';

const AuthController = {
  async signUp (req: Request, res: Response, next: NextFunction) {
    try {
      await passport.authenticate(
        'signUp',
        { session: false },
        async (err, user, info) => {
          if (err) throw err
          if (!user) {
            return res.status(400).json({ info })
          }
          res.json({
            message: 'successful registration'
            // token: _tokenGeneration(user)
          })
        }
      )(req, res, next)
    } catch (err: any) {
      return res.status(500).json({ error: 'server error', err })
    }
  },

  async signIn (req: Request, res: Response, next: NextFunction) {
    try {
      await passport.authenticate('signIn', async (err, user, info) => {
        if (err) throw err
        if (!user) {
          return res.status(400).json({ info })
        }
        req.login(user, { session: false }, async error => {
          if (error) return next(error)
          return res.json({
            message: 'successful authorization',
            token: _tokenGeneration(user)
          })
        })
      })(req, res, next)
    } catch (err: any) {
      return res.status(500).json({ error: 'server error', err })
    }
  },

  async checkJwt (req: Request, res: Response) {
    const token = req.headers.authorization?.split(' ')?.[1]

    if (!token) {
      return res.status(400).json({
        error: 'token not provided'
      })
    }
    const decodedToken = jwt.decode(token)

    jwt.verify(token, `${process.env.ACCESS_TOKEN_SECRET}`, (err, decoded) => {
      if (err != null) {
        if (err instanceof jwt.TokenExpiredError) {
          return res.status(400).json({
            error: 'token expired',
            err
          })
        } else if (err instanceof jwt.JsonWebTokenError) {
          return res.status(400).json({
            error: 'token malformed'
          })
        } else {
          return res.status(400).json({
            error: 'token invalid'
          })
        }
      }

      return res.status(200).json({
        message: 'token is valid'
      })
    })
  }
}

function _tokenGeneration (user: IUser) {
  const body = { _id: user._id, email: user.email }
  return tokenGenerator.accessToken(body)
}

export default AuthController
