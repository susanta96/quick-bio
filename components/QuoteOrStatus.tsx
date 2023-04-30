import { QuoteOrStatusState } from "@/utils/Atoms";
import FB from "./icons/FacebookIcon";
import Twitter from "./icons/TwiierIcon";
import Insta from "./icons/instaIcon";
import { useRecoilState } from 'recoil'

export type PromptType = 'quote' | 'status';

export default function QuoteOrStatus() {
    const [prompt, setPrompt] = useRecoilState<PromptType>(QuoteOrStatusState);
  return (
    <div className="flex justify-center items-center space-x-10 text-center">
        <button className={`social-btn ${prompt === 'quote' ? 'active' : ''}`} onClick={() => setPrompt('quote')}>
            <Twitter />
        </button>
        <button className={`social-btn ${prompt === 'status' ? 'active' : ''}`} onClick={() => setPrompt('status')}>
            <FB />
        </button>
    </div>
  )
}
