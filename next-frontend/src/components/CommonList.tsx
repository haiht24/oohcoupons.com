import Image from 'next/image'
import star from '@/assets/images/star.png'
import '@/assets/css/commonlist.scss'
const CommonList = ({nameExt}:any) => {
    return (
        <div className="common_list">
            <h1>Here's What Users Are Saying About oOh</h1>
            <ul className="stareview_item">
                <li>
                    <h2>{`Donna Koch`}</h2>
                    <Image src={star} alt={`star`} />
                    <p>
                        {`"This extension is a lifesaver. It's so convenient to have discounts applied automatically, and I've saved a ton of money."`}
                    </p>
                </li>
                <li>
                    <h2>{`William Lees`}</h2>
                    <Image src={star} alt={`star`} />
                    <p>
                        {`"It has saved me money effortlessly. It finds discounts I didn't even know existed, making online shopping a breeze!"`}
                    </p>
                </li>
                <li>
                    <h2>{`Melvin Bramblett`}</h2>
                    <Image src={star} alt={`star`} />
                    <p>
                        {`"I don't know how I shopped online before discovering this tool. It takes the hassle out of finding and applying discounts effortlessly."`}
                    </p>
                </li>
            </ul>
        </div>
    )
}

export default CommonList