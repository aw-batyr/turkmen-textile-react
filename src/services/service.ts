import { ContactsFormType } from "@/lib/get-contacts-form-details";
import { SponsorFormType } from "@/lib/get-sponsor-form-details";
import { StandFormType } from "@/lib/get-stend-form-details";
import axios from "axios";
import { ContactsPageType } from "./types/contacts.type";
import { LangState } from "@/store/lang";
import { StatsType } from "@/hooks/tanstack/use-stats";
import { HomeContactsType } from "./types/home-contacts.type";
import { StaticType } from "@/hooks/tanstack/use-static-words";
import { IndustriesType } from "@/hooks/tanstack/use-industries";
import { TimeType } from "@/hooks/tanstack/use-exhibition-time";
import { PartnersType } from "@/hooks/tanstack/use-partners";

const axios_url = axios.create({
  baseURL: "https://turkmentextile.turkmenexpo.com/app/api/v1/",
});

export const postStend = async (data: StandFormType): Promise<boolean> => {
  const res = axios_url.post(`book_stand_form`, data);

  return (await res).status === 201;
};

export const postB2b = async (data: FormData): Promise<boolean> => {
  const res = axios_url.post(`form`, data);

  return (await res).status === 201;
};

export const postSponsor = async (data: SponsorFormType): Promise<boolean> => {
  const res = axios_url.post(`become_sponsor_form`, data);

  return (await res).status === 201;
};

export const postContact = async (data: ContactsFormType): Promise<boolean> => {
  const res = axios_url.post(`contact_form`, data);

  return (await res).status === 201;
};

export const postSubscribe = async (data: { email: string }) => {
  const res = axios_url.post("subscribe_news_form", data);

  return (await res).status === 201;
};

export const getStaticWords = async (lang: LangState["lang"], id: string) => {
  const data = axios_url.get<StaticType>(`pages/${id}`, {
    headers: {
      "Accept-Language": lang,
    },
  });

  return data;
};

export const getPartners = async (lang: LangState["lang"]) => {
  const data = axios_url.get<PartnersType>("partners", {
    headers: {
      "Accept-Language": lang,
    },
  });

  return data;
};

export const getStats = async (lang: LangState["lang"]) => {
  const data = axios_url.get<StatsType>("stats", {
    headers: {
      "Accept-Language": lang,
    },
  });

  return data;
};

export const getContacts = async (lang: LangState["lang"]) => {
  const data = axios_url.get<ContactsPageType>("contact_info", {
    headers: {
      "Accept-Language": lang,
    },
  });

  return data;
};

export const getHomeContacts = async (lang: LangState["lang"]) => {
  const data = axios_url.get<HomeContactsType>("contact_data", {
    headers: {
      "Accept-Language": lang,
    },
  });

  return data;
};

export const getIndustries = async (lang: LangState["lang"]) => {
  const data = axios_url.get<IndustriesType>(`industries`, {
    headers: {
      "Accept-Language": lang,
    },
  });

  return data;
};

export const getExhibitionTime = async (lang: LangState["lang"]) => {
  const data = axios_url.get<TimeType>(`exhibition_time`, {
    headers: {
      "Accept-Language": lang,
    },
  });

  return data;
};
