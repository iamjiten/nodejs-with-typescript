import { AppDataSource } from "../config";
import { Profile } from "../models/profile.model";

const profileRepo = AppDataSource.getRepository(Profile);

export const createUserProfile = async (data: {
  userId: number;
  phone: string;
  address?: string;
}) => {
  const profile = profileRepo.create(data);
  await profileRepo.save(profile);
  return profile;
};
