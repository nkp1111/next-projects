import personalInfo from "@/data/personal_info.json";
import { PersonalInfoParams } from "@/types";

export default async function getMyProfile(): Promise<PersonalInfoParams> {
  return personalInfo as PersonalInfoParams;
}
