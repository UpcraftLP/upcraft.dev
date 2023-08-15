import Link from 'next/link'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const DEFAULT_SIZE = 24;

export const SocialIcon = ({ target, name, icon, size, iconStyle, children }) => {

    return (
        <Link href={target} passHref>
            <a className="relative mx-1 group h-min w-min" target="_blank" rel="noreferrer" title={name}>
                <div className="w-6 h-6 rounded-full">
                    {icon instanceof Array
                        ? <FontAwesomeIcon className={`text-2xl ${iconStyle || ""}`} icon={icon} />
                        : <Image src={icon} width={size ?? DEFAULT_SIZE} height={size ?? DEFAULT_SIZE} className={`rounded-full absolute ${iconStyle || ""}`} alt={props.name} />}
                    {children}
                </div>
            </a>
        </Link>
    )
}