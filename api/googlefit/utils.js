// utils.js - shared helpers for OAuth PKCE and deep-link encoding

import crypto from 'crypto';

export function randomString(length) {
  return crypto.randomBytes(length).toString('base64url').slice(0, length);
}

export function pkceChallenge(verifier) {
  return crypto.createHash('sha256').update(verifier).digest('base64url');
}

export function signState(payload, secret) {
  const data = Buffer.from(JSON.stringify(payload)).toString('base64url');
  const sig = crypto.createHmac('sha256', secret).update(data).digest('base64url');
  return data + '.' + sig;
}

export function verifyState(state, secret) {
  const [data, sig] = state.split('.');
  const check = crypto.createHmac('sha256', secret).update(data).digest('base64url');
  if (check !== sig) throw new Error('Invalid state signature');
  return JSON.parse(Buffer.from(data, 'base64url').toString());
}

export function encodeForDeepLink(obj) {
  const json = JSON.stringify(obj);
  return Buffer.from(json).toString('base64url');
}
