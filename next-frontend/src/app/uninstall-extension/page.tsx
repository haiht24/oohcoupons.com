"use client"
import { useState, useEffect } from 'react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Image from 'next/image'
import Logo from '@/assets/images/oo/logo-new.png'
import imageUninstall_1 from '@/assets/images/image-uninstall.png'
import CheckmarkSVG from '@/assets/images/check_checkmark.svg';
import '@/assets/css/uninstall-extension.scss'



const UninstallExt = () => {

    const handleOtherCheckbox = () => {
        if (typeof document !== 'undefined') {
            const checkboxes = document.querySelectorAll('.form-group');
            const button = document.getElementById('submit_btn');

            checkboxes.forEach((checkbox) => {
                const input = checkbox.querySelector('input[type="checkbox"]');
                if (input && input instanceof HTMLInputElement) {
                    input.addEventListener('change', () => {
                        if (input.checked) {
                            checkbox.classList.add('salmon');
                        } else {
                            checkbox.classList.remove('salmon');
                        }

                        // Check if any .form-group has the 'salmon' class and add the 'active' class to the button if it exists
                        const anySalmon = Array.from(checkboxes).some((chk) => chk.classList.contains('salmon'));
                        if (button) {
                            if (anySalmon) {
                                button.classList.add('active');
                            } else {
                                button.classList.remove('active');
                            }
                        }
                    });
                }
            });
        }
    };

    const handleModal = () => {
        let modal = document.getElementById('myModal');
        let body = document.getElementsByTagName('body')[0];
        let closebtn = document.getElementsByClassName("close")[0];

        // Get the modal
        modal?.classList.add('showModal')
        // Remove the modal
        closebtn.addEventListener('click', function () {
            modal?.classList.remove('showModal')
            console.log(closebtn)
        })

        body.addEventListener('click', function (e) {
            if (e.target == modal) {
                modal?.classList.remove('showModal')
            }

        })
    }

    useEffect(() => {
        handleOtherCheckbox();
    });
    return (
        <>
            <Nav />
            <div className='page-uninstall-extension'>
                <Image alt={` Logo`} src={Logo} width={200} height={200} loading="eager" priority className='mx-auto' />
                <div className='help-us text-center'>
                    <h4 className="title">Help us improve</h4>
                    <div className="desc">Why did you uninstall Tenere? Check all that apply.</div>
                    <div className='grid grid-cols-1 md:grid-cols-2 md:gap-4'>
                        <div className='mt-[20px] md:mt-[30px]'>
                            <Image alt={`uninstall`} src={imageUninstall_1} width={163} height={163} loading="eager" priority className=' unistall-img mx-auto mb-5' />
                            <p className='text-center md:text-left'>oOhcoupons is a totally free browser extension which automatically finds, tests, and applies the best available coupon codes at checkout.</p>
                            <button type="button" className="btn btn-submit mt-[15px] md:mt-5">Reinstall Extension - it's free </button>
                        </div>

                        <form action="" id="uninstall_form" method="POST" className="help-us-form" onSubmit={(e) => { e.preventDefault() }}> {/* Prevent Action Submit  */}
                            <input
                                type="hidden"
                                name="_token"
                                defaultValue="FlcDYnGRfCX1QEvlL2ZMUJ917TebVi37k4UauPlC"
                            />
                            <div className="form-group">
                                <input
                                    type="checkbox"
                                    name="reason[]"
                                    id="reason1"
                                    data-reason="#data-reason1"
                                    defaultValue="It slows down my computer"
                                />
                                <label htmlFor="reason1">
                                    <span className="checkmark" />
                                    It slows down my computer
                                </label>
                            </div>
                            <div className="form-group">
                                <input
                                    type="checkbox"
                                    name="reason[]"
                                    id="reason2"
                                    data-reason="#data-reason2"
                                    defaultValue="The oOhcoupons window shows too often"
                                />
                                <label htmlFor="reason2">
                                    <span className="checkmark" />The oOhcoupons window shows too often
                                </label>
                            </div>
                            <div className="form-group">
                                <input
                                    type="checkbox"
                                    name="reason[]"
                                    id="reason3"
                                    data-reason="#data-reason3"
                                    defaultValue="Privacy concerns"
                                />
                                <label htmlFor="reason3">
                                    <span className="checkmark" />
                                    Privacy concerns
                                </label>
                            </div>
                            <div className="form-group">
                                <input
                                    type="checkbox"
                                    name="reason[]"
                                    id="reason4"
                                    data-reason="#data-reason4"
                                    defaultValue="Not enough international stores"
                                />
                                <label htmlFor="reason4">
                                    <span className="checkmark" />
                                    Not enough international stores
                                </label>
                            </div>
                            <div className="form-group">
                                <input
                                    type="checkbox"
                                    name="reason[]"
                                    id="reason5"
                                    data-reason="#data-reason5"
                                    defaultValue="I am using another browser extension or discount provider"
                                />
                                <label htmlFor="reason5">
                                    <span className="checkmark" />
                                    I am using another browser extension or discount provider
                                </label>
                            </div>
                            <div className="form-group">
                                <input
                                    type="checkbox"
                                    name="reason[]"
                                    id="reason6"
                                    data-reason="#data-reason6"
                                    defaultValue="Coupons didn't work"
                                />
                                <label htmlFor="reason6">
                                    <span className="checkmark" />
                                    Coupons didn't work
                                </label>
                            </div>
                            <div className="form-group">
                                <input
                                    type="checkbox"
                                    name="reason[]"
                                    id="reason7"
                                    data-reason="#data-reason7"
                                    defaultValue="I found it to be buggy"
                                />
                                <label htmlFor="reason7">
                                    <span className="checkmark" />
                                    I found it to be buggy
                                </label>
                            </div>
                            <div className="form-group">
                                <input
                                    type="checkbox"
                                    name="reason[]"
                                    id="reason8"
                                    data-reason="#data-reason8"
                                    defaultValue="Other, please explain:"

                                />
                                <label htmlFor="reason8">
                                    <span className="checkmark" />
                                    Other, please explain:
                                </label>
                            </div>
                            <textarea
                                name="content"
                                id="content"
                                rows={4}
                                placeholder="How else can we improve oOhcoupons?"
                                className="form-control"
                                defaultValue={""}
                            />
                            <button id="submit_btn" type="submit" className={`btn btn-submit btn-primary`} onClick={handleModal}>
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <div id='myModal' className='modal'>
                <div className='modal-content flex items-center justify-center flex-col'>
                    <span className='close self-end'></span>

                    <Image src={CheckmarkSVG} alt='checkmark'/>
                    <h2>Thanks!!</h2>
                    <p>You feedback has been submit successfully</p>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default UninstallExt;