import { SponsorFormType } from "@/lib/get-sponsor-form-details";
import axios from "axios";

const URL = "https://itse.turkmenexpo.com/app/api/v1";

// export const postStend = async (data: StandFormType): Promise<boolean> => {
//   const res = axios.post(`${URL}/become_delegate`, data);

//   return (await res).status === 201;
// };

export const postB2b = async (data: FormData): Promise<boolean> => {
  const res = axios.post(`${URL}/form`, data);

  return (await res).status === 201;
};

export const postSponsor = async (data: SponsorFormType): Promise<boolean> => {
  const res = axios.post(`${URL}/become_sponsor`, data);

  return (await res).status === 201;
};

// export const postContact = async (data: ContactsFormType): Promise<boolean> => {
//   const res = axios.post(`${URL}/contact_form`, data);

//   return (await res).status === 201;
// };
