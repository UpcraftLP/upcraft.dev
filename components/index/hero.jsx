import { SocialIcon } from '../social'
import { GithubIcon } from '../social/gh-icon'

export const Hero = () => (
    <div className="m-auto relative bg-hero-bg bg-cover bg-center w-11/12 h-hero rounded-xl flex flex-col items-center justify-center text-gray-50">
        <div className="text-center font-gisha">
            <img src="/profile_picture.webp" width="128" height="128" className="m-auto rounded-xl" alt="Profile Picture" />
            <div className="m-auto text-center font-medium text-xl">
                <h2 className=" tracking-wide">Indie game developer</h2>
                <h1 className="text-5xl italic">Up</h1>
                <h2 className="tracking-tight">Java, C#, Web, C++</h2>
            </div>
        </div>
        <div className="flex flex-row justify-end items-end text-base bottom-2 absolute">
            <GithubIcon name="GitHub" target="https://github.com/upcraftlp" />
            <SocialIcon name="Twitter" target="https://twitter.com/upcraftlp" icon={['fab', 'twitter']} iconStyle="group-hover:text-blue-400" />

            {/* <SocialIcon name="YouTube" target="https://youtube.com/user/theupcraftlp" icon={['fab', 'youtube']} iconStyle="group-hover:text-red-600">
                <div className="rounded-full group-hover:bg-white w-2.5 h-2 absolute top-1/4 left-1/3 -z-10" />
            </SocialIcon> */}
            {/* <SocialIcon name="PayPal" target="https://paypal.me/upcraftlp" icon={['fab', 'paypal']}/> */}
        </div>
    </div>
)