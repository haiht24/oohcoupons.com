import Image from 'next/image'
import CheckmarkSVG from '@/assets/images/check_checkmark.svg';
const Modal = ({closeModal}:any) => {
    const handleContentClick = (e: React.MouseEvent) => {
        // Prevent the click event from reaching the parent container and triggering closeModal
        e.stopPropagation();
      };
    return (
        <div id='myModal' className='modal' onClick={closeModal}>
            <div className='modal-content flex items-center justify-center flex-col w-3/4 md:w-2/4 lg:w-2/5' onClick={handleContentClick}>
                <span className='close self-end' onClick={closeModal}></span>
                <Image src={CheckmarkSVG} alt='checkmark' className='max-w-[85px] md:max-w-[150px] mt-5 mb-2 '/>
                <h2>Thanks!!</h2>
                <p className='text-center'>You feedback has been submit successfully</p>
            </div>
        </div>
    )
}

export default Modal