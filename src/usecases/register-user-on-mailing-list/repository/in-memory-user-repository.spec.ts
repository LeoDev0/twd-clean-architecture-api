import { UserData } from '../user-data'
import { InMemoryUserRepository } from './in-memory-user-repository'

describe('In memory User repository', () => {
  test('should return null if user is not found', async () => {
    // given
    const users: UserData[] = []
    const userRepo = new InMemoryUserRepository(users)

    // when
    const user = await userRepo.findUserByEmail('any@email.com')

    // then
    expect(user).toBeNull()
  })
})
