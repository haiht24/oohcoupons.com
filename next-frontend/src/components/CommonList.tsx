import Image from 'next/image'
import star from '@/assets/images/star.png'
import '@/assets/css/commonlist.scss'
const CommonList = () => {
    return (
        <div className="common_list">
            <h1>Over 100,000 Five-Star Reviews</h1>
            <ul className="stareview_item">
                <li>
                    <h2>Talon O'Brian</h2>
                    <Image src={star} alt={`star`} />
                    <p>
                        "Moolah is incredible, it is extremely helpful at finding the best
                        coupon codes. I would recommend a lot!!"
                    </p>
                </li>
                <li>
                    <h2>Meggie Jackson</h2>
                    <Image src={star} alt={`star`} />
                    <p>
                        "The best choice for shoppers everl!! it will automatically find coupon
                        codes and apply the best one to my cart."
                    </p>
                </li>
                <li>
                    <h2>Anthony Smith</h2>
                    <Image src={star} alt={`star`} />
                    <p>
                        "The greatest coupon extension of all time. I don’t purchase anything
                        without letting Moolah do its magic first..."
                    </p>
                </li>
            </ul>
        </div>
    )
}

export default CommonList