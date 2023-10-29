"use client"
import { useState } from 'react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Image from 'next/image'
import Logo from '@/assets/images/oo/logo-new.png'
import imageUninstall from '@/assets/images/image-uninstall.png'
import '@/assets/css/uninstall-extension.scss'

const UninstallExt = () => {
    const [check, setCheck] = useState(false)

    const handleOtherCheckbox = () => {
        setCheck(!check);
    };

    return (
        <>
            <Nav />
            <div className='page-uninstall-extension'>
                <Image alt={` Logo`} src={Logo} width={200} height={200} loading="eager" priority className='mx-auto' />
                <div className='help-us text-center'>
                    <h4 className="title">Help us improve</h4>
                    <div className="desc">Why did you uninstall Tenere? Check all that apply.</div>
                    <div className='grid grid-cols-2 gap-4'>
                        <div className='mt-[30px]'>
                            <Image alt={`uninstall`} src={imageUninstall} width={163} height={163} loading="eager" priority className='mx-auto mb-5' />
                            <p> 
 	
oOhcoupons is a totally free browser extension which automatically finds, tests, and applies the best available coupon codes at checkout.</p>
                            <button type="button" className="btn btn-submit mt-5">Reinstall Extension - it's free</button>
                        </div>

                        <form action="" id="uninstall_form" method="POST" className="help-us-form">
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
                                    <span className="checkmark" onClick={handleOtherCheckbox} />
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
                            <button id="submit_btn" type="submit" className={`btn btn-submit ${check ? 'active' : ''}`}>
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default UninstallExt;