import { SocialMediaState } from "@/utils/Atoms";
import FB from "./icons/FacebookIcon";
import Twitter from "./icons/TwiierIcon";
import Insta from "./icons/instaIcon";
import { useRecoilState } from 'recoil'

export type SocialMediaType = 'twitter' | 'facebook' | 'instagram';

export default function ChooseSocialMedia() {
    const [social, setSocial] = useRecoilState<SocialMediaType>(SocialMediaState);
  return (
    <div className="flex justify-center items-center space-x-10 text-center">
        <button className={`social-btn ${social === 'twitter' ? 'active' : ''}`} onClick={() => setSocial('twitter')}>
            <Twitter />
        </button>
        <button className={`social-btn ${social === 'facebook' ? 'active' : ''}`} onClick={() => setSocial('facebook')}>
            <FB />
        </button>
        <button className={`social-btn ${social === 'instagram' ? 'active' : ''}`} onClick={() => setSocial('instagram')}>
            <Insta />
        </button>
    </div>
  )
}
