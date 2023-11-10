"use client"

import { useState, useEffect } from 'react'
import Form from '@/components/FormGroup'
import Modal from '@/components/Modal'
import Image from 'next/image'
import Logo from '@/assets/images/oo/logo-new.png'
import imageUninstall_1 from '@/assets/images/image-uninstall.png'
import ButtonReinstall from './ButtonReinstall'

const LeftContent = () => {
    return (
        <div className='mt-[20px] md:mt-[30px]'>
            <Image alt={`uninstall`} src={imageUninstall_1} width={163} height={163} loading="eager" priority className=' unistall-img mx-auto mb-5' />
            <p className='text-center md:text-left'>oOhcoupons is a totally free browser extension which automatically finds, tests, and applies the best available coupon codes at checkout.</p>
            <ButtonReinstall />
        </div>
    )
}

const UninstallExtensionBody = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    useEffect(() => {
        handleOtherCheckbox()
    })

    const handleOtherCheckbox = () => {
        if (typeof document !== 'undefined') {
            const checkboxes = document.querySelectorAll('.form-group')
            const button = document.getElementById('submit_btn')

            checkboxes.forEach((checkbox) => {
                const input = checkbox.querySelector('input[type="checkbox"]')
                if (input && input instanceof HTMLInputElement) {
                    input.addEventListener('change', () => {
                        if (input.checked) {
                            checkbox.classList.add('salmon')
                        } else {
                            checkbox.classList.remove('salmon')
                        }

                        // Check if any .form-group has the 'salmon' class and add the 'active' class to the button if it exists
                        const anySalmon = Array.from(checkboxes).some((chk) => chk.classList.contains('salmon'))
                        if (button) {
                            if (anySalmon) {
                                button.classList.add('active')
                            } else {
                                button.classList.remove('active')
                            }
                        }
                    })
                }
            })
        }
    }

    const openModal = () => {
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
        window.location.href = '/' // redirect to Home page
    }

    return (
        <div className='page-uninstall-extension'>
            <Image alt={`Logo`} src={Logo} width={200} height={200} loading="eager" priority className='mx-auto' />
            <div className='help-us text-center'>
                <h4 className="title">Help us improve</h4>
                <div className="desc">Why did you uninstall Tenere? Check all that apply.</div>
                <div className='grid grid-cols-1 md:grid-cols-2 md:gap-4'>
                    <LeftContent />
                    <Form openModal={openModal} />
                </div>
            </div>
            {isModalOpen && <Modal closeModal={closeModal} />}
        </div>
    )
}

export default UninstallExtensionBody