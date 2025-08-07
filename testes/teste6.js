import fakeCache from '../storage/fakeCache.js';
import { randomUUID } from 'crypto';

export function authMiddleware(req, res, next) {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res
            .status(401)
            .send({ error: 'Faltando header de autorização' });
    }

    const [scheme, token] = authHeader.split(' ');

    if (scheme !== 'Bearer' || !token) {
        return res.status(401).json({ error: 'Token mal formatado' });
    } else if (!(token in fakeCache.tokens)) {
        return res.status(401).send({ error: 'Token inválido' });
    }

    req.permissions = fakeCache.tokens[token];

    next();
}

export function login(req, res) {
    const editPermission = Boolean(req.body.canEdit);
    const deletePermission = Boolean(req.body.canDelete);

    const permissions = {
        canEdit: editPermission,
        canDelete: deletePermission,
    };

    const token = randomUUID();

    fakeCache.tokens[token] = permissions;

    return res.send({ authToken: token });
}
