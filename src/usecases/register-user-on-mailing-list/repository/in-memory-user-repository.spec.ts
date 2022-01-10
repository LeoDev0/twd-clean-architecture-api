import { UserData } from '../user-data'
import { InMemoryUserRepository } from './in-memory-user-repository'

describe('In memory User repository', () => {
  test('should return null if user is not found', async () => {
    // given
    const users: UserData[] = []
    const sut = new InMemoryUserRepository(users)

    // when
    const user = await sut.findUserByEmail('any@email.com')

    // then
    expect(user).toBeNull()
  })

  test('should return user if it is found in the repository', async () => {
    // given
    const users: UserData[] = []
    const name = 'any_name'
    const email = 'any@email.com'
    const sut = new InMemoryUserRepository(users)

    // when
    await sut.add({ name, email })
    const user = await sut.findUserByEmail(email)

    // then
    expect(user.name).toBe(name)
  })

  test('should return all users in the repository', async () => {
    // given
    const users: UserData[] = [
      { name: 'any_name', email: 'any@email.com' },
      { name: 'second_name', email: 'second@email.com' }
    ]
    const sut = new InMemoryUserRepository(users)

    // when
    const returnedUsers = await sut.findAllUsers()

    // then
    expect(returnedUsers.length).toBe(2)
  })
})
