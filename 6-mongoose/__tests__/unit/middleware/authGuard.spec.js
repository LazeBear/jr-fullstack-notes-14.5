const authGuard = require('../../../src/middleware/authGuard');
const { validateToken } = require('../../../src/utils/jwt');
jest.mock('../../../src/utils/jwt');

describe('auth guard middleware', () => {
  it('should return 401 if authorization header is missing', () => {
    const req = {
      header: jest.fn(),
    };
    const res = {
      sendStatus: jest.fn(),
    };
    const next = jest.fn();
    authGuard(req, res, next);

    expect(req.header).toHaveBeenCalledWith('Authorization');
    expect(res.sendStatus).toHaveBeenCalledWith(401);
  });

  it('should call next when token is valid', () => {
    const token = 'xxxxx';
    const req = {
      // Bearer xxxxxxxx
      header: jest.fn().mockReturnValue(`Bearer ${token}`),
    };
    const res = {
      sendStatus: jest.fn(),
    };
    const next = jest.fn();
    validateToken.mockImplementation((token) => ({
      token,
    }));

    authGuard(req, res, next);
    expect(validateToken).toHaveBeenCalledWith(token);
    expect(next).toHaveBeenCalled();
  });
});
