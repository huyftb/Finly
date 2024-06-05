/**
 * @typedef {Object} ExtendedUser
 * @property {('USER' | 'ADMIN')} role
 * @property {boolean} isTwoFactorEnabled
 * @property {boolean} isOAuth
 */

/**
 * @typedef {import('next-auth').DefaultSession & { user: ExtendedUser }} Session
 */

