import type { SocialMediaType } from "@/components/ChooseSocialMedia";
import { atom } from "recoil";

export const SocialMediaState = atom<SocialMediaType>({
    key: 'SocialMediaState', // unique ID (with respect to other atoms/selectors)
    default: 'twitter', // default value (aka initial value)
  });