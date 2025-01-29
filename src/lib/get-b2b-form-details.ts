import { z } from "zod";

export const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2 МБ

export const formSchema = z.object({
  type: z.string(),
  company_name: z
    .string()
    .min(3, { message: "Название компании должно быть не менее 3 символов" }),
  representative_name: z
    .string()
    .min(3, { message: "Имя представителя должно быть не менее 3 символов" }),
  job_title: z
    .string()
    .min(3, { message: "Должность должна быть не менее 3 символов" }),
  participants_number: z
    .string()
    .min(1, { message: "Укажите количество участников" }),
  country: z
    .string()
    .min(3, { message: "Название страны должно быть не менее 3 символов" }),
  email_address: z.string().email({ message: "Укажите корректный email" }),
  phone_number: z
    .string()
    .min(8, { message: "Номер телефона должен быть не менее 8 символов" }),
  website: z.string().optional(),

  meeting_objective: z.string().min(3, { message: "Укажите цель встречи" }),
  proposal_description: z.string().optional(),
  government_agency: z.string().optional(),
  sector_industry: z.string().optional(),
  key_services: z.string().optional(),
  government_experience: z.string().optional(),

  preferred_meeting_datetime: z.string().optional(),
  meeting_mode: z.string().optional(),
  language_preference: z.string().optional(),
  technical_requirements: z.string().optional(),
  company_profile: z
    .custom<File>((value) => value instanceof File, {
      message: "Выберите корректный файл",
    })
    .refine(
      (file) =>
        file &&
        ["image/jpeg", "image/png", "application/pdf"].includes(file.type),
      {
        message: "Допускаются только файлы JPG, PNG и PDF",
      }
    )
    .optional(),
  proposal_presentation: z
    .custom<File>((value) => value instanceof File, {
      message: "Выберите корректный файл",
    })
    .refine(
      (file) =>
        file &&
        ["image/jpeg", "image/png", "application/pdf"].includes(file.type),
      {
        message: "Допускаются только файлы JPG, PNG и PDF",
      }
    )
    .optional(),
  relevant_certification: z
    .custom<File>((value) => value instanceof File, {
      message: "Выберите корректный файл",
    })
    .refine(
      (file) =>
        file &&
        ["image/jpeg", "image/png", "application/pdf"].includes(file.type),
      {
        message: "Допускаются только файлы JPG, PNG и PDF",
      }
    )
    .optional(),
});

// Тип для формы
export type FormType = z.infer<typeof formSchema>;

// Значения по умолчанию
export const defaultValuesOfB2b = {
  type: "B2B",
  company_name: "",
  representative_name: "",
  job_title: "",
  participants_number: "",
  country: "",
  email_address: "",
  phone_number: "",
  website: "",
  meeting_objective: "",
  proposal_description: "",
  government_agency: "",
  sector_industry: "",
  key_services: "",
  government_experience: "",
  preferred_meeting_datetime: "",
  meeting_mode: "",
  language_preference: "",
  technical_requirements: "",
};
