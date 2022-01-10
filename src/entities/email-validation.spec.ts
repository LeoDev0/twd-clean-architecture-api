import { Email } from './email'

describe('Email validation', () => {
  test('should not accept null strings', () => {
    const email = null
    expect(Email.validate(email)).toBeFalsy()
  })

  test('should not accept empty strings', () => {
    const email: string = ''
    expect(Email.validate(email)).toBeFalsy()
  })

  test('should accept valid email', () => {
    const email: string = 'otaviolemos@gmail.com'
    expect(Email.validate(email)).toBeTruthy()
  })

  test('should not accept local part larget than 64 characters', () => {
    const email = 'l'.repeat(65) + '@email.com'
    expect(Email.validate(email)).toBeFalsy()
  })
})
