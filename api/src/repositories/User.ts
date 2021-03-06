import { EntityRepository, Repository } from 'typeorm';
import User from '../entities/User';

@EntityRepository(User)
export default class UserRepository extends Repository<User> {
  findByName(firstName: string, lastName: string) {
    return this.createQueryBuilder('user')
      .where('user.firstName = :firstName', { firstName })
      .andWhere('user.lastName = :lastName', { lastName })
      .getMany();
  }

  getUserFromToken(token: string) {
    return this.createQueryBuilder('user')
      .where('user.token = :token', { token })
      .getOne();
  }

  hasRole(user: any, role: string) {
    return !!(user.role && user.role === role);
  }
}
