import { Builder } from "builder-pattern";
import User from "./users";
import UserResponse from "./userResponse";

class UserBuilder {
  static build(user: UserResponse): User {
    return Builder<User>()
    .id(user.id)
    .name(user.name)
    .job(user.job)
    .build();
  }
}

export { UserBuilder }