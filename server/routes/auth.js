import {Router} from 'express';
import {register, login, me} from "../controllers/auth.js";
import { checkAuth } from '../utils/checkAuth.js';

const router = new Router()

router.post('/register', register)

router.post('/login', login)

router.post('/profile', checkAuth, me)

export default router;
