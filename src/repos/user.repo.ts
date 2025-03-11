import { User } from "../models/user.model";
import { AppDataSource } from "../config";
import bcryptjs from "bcryptjs";
import { CreateUsertype } from "../validations/user.validation";
import { DeepPartial, FindOptionsWhere } from "typeorm";

const userRepo = AppDataSource.getRepository(User);

export const createUser = async (data: CreateUsertype) => {
  const { name, email, password } = data;
  const hash = await generateHash(password);
  const user = userRepo.create({ name, emailAddress: email, password: hash });
  await userRepo.save(user);
  return user;
};

export const getUserByEmail = async (
  emailAdress: string
): Promise<User | null> => {
  return userRepo.findOneBy({ emailAddress: emailAdress });
};

export const getUsers = async (data: {
  per_page: number;
  page: number;
}): Promise<{
  users: User[];
  pagination: {
    per_page: number;
    page: number;
    total: number;
    total_page: number;
  };
}> => {
  const currentPage = data.page ? data.page : 1;
  const perPage = data.per_page ? data.per_page : 2;

  const skip = (currentPage - 1) * perPage;

  const [users, userCount] = await userRepo.findAndCount({
    skip: skip,
    take: perPage,
  });

  const pagination = {
    per_page: perPage,
    page: currentPage,
    total: userCount,
    total_page: Math.ceil(userCount / perPage),
  };

  return { users, pagination };
};

export const getUserBy = async (where: FindOptionsWhere<User>) => {
  return userRepo.findOne({ where: where });
};

export const getUserById = async (id: number) => {
  const user = await userRepo.findOne({
    where: { id },
    select: {
      profile: {
        id: true,
        phone: true,
        address: true,
      },
    },
    relations: { profile: true },
  });
  if (!user) throw new Error("User Not Found");
  return user;
};

export const updateUser = async (id: number, data: DeepPartial<User>) => {
  try {
    const user: User = await getUserById(id);
    const updatedData = Object.assign(user, data);
    const updatedUser = await userRepo.save(updatedData);
    return updatedUser;
  } catch (err) {
    throw err;
  }
};

const generateHash = async (plainTxt: string): Promise<string> => {
  const salt = 10;
  const hash = await bcryptjs.hashSync(plainTxt, salt);
  return hash;
};

export const deleteUser = async (id: number) => {
  return userRepo.delete({ id });
};
