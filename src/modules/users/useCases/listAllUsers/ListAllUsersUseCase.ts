import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const user = this.usersRepository.findById(user_id);

    if (!user || !user.admin) {
      throw new Error("Bad request, have sure you are admin");
    }

    const all = this.usersRepository.list();
    return all;
  }
}

export { ListAllUsersUseCase };
