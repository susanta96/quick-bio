import type { SocialMediaType } from "@/components/ChooseSocialMedia";
import { PromptType } from "@/components/QuoteOrStatus";
import { atom } from "recoil";

export const SocialMediaState = atom<SocialMediaType>({
    key: 'SocialMediaState', // unique ID (with respect to other atoms/selectors)
    default: 'twitter', // default value (aka initial value)
  });

export const QuoteOrStatusState = atom<PromptType>({
  key: 'QuoteOrStatusState', // unique ID (with respect to other atoms/selectors)
  default: 'quote', // default value (aka initial value)
});