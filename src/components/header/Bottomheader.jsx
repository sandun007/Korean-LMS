import React from 'react'

function Bottomheader() {
    return (
        <div>
            <div className="flex py-6 px-8 justify-between items-center bg-[#FFF] shadow-[0-1px_0_0_#E9EAF0_inset]">
                <div className="flex justify-center items-center gap-[50px]">
                    <div className="flex items-start gap-2">
                        <div className="flex justify-center items-center w-10 h-10">
                            <div className="shrink-0 w-10 h-10 relative">
                                <svg width="41" height="23" viewBox="0 0 41 23" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[38px] h-5 absolute left-px top-[5px]">
                                    <path d="M1.5 11.5L20.25 1.5L39 11.5L20.25 21.5L1.5 11.5Z" stroke="#FF6636" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                <svg width="13" height="26" viewBox="0 0 13 26" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[9px] h-[23px] absolute left-5 top-[15px]">
                                    <path d="M10.8753 24.0003V6.5003L1.5003 1.5003" stroke="#FF6636" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                <svg width="32" height="19" viewBox="0 0 32 19" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[29px] h-4 absolute left-1.5 top-[17px]">
                                    <path d="M30.25 1.5V10.0189C30.2505 10.2885 30.1634 10.551 30.0016 10.7668C28.949 12.1675 24.5083 17.2917 15.875 17.2917C7.24174 17.2917 2.80097 12.1675 1.74836 10.7668C1.58665 10.551 1.49949 10.2885 1.5 10.0189V1.5" stroke="#FF6636" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                        </div>
                        <p className="text-[#1D2026] font-inter text-[32px] font-semibold leading-tight tracking-[-0.03em]">Simple Korean</p>
                    </div>
                    <div className="flex items-start gap-4">
                        <button className="cursor-pointer text-nowrap flex py-3 px-[18px] justify-center items-center gap-[91px] border border-[#E9EAF0] bg-[#FFF] w-[200px] h-12">
                            <p className="text-[#4E5566] font-inter text-base leading-6">Browse</p>
                            <div className="flex justify-center items-center shrink-0 w-4 h-4">
                                <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-2.5 h-[5px]">
                                    <path d="M10.75 0.75L5.75 5.75L0.75 0.75" stroke="#4E5566" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                        </button>
                        <div className="flex pt-3 pr-[177px] pr-[18px] items-center border border-[#E9EAF0] bg-[#FFF] w-[424px] h-12 overflow-hidden">
                            <div className="flex items-center gap-3">
                                <div className="flex justify-center items-center w-6 h-6">
                                    <div className="shrink-0 w-6 h-6 relative">
                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 absolute left-[3px] top-[3px]">
                                            <path d="M8.625 16.5C12.9742 16.5 16.5 12.9742 16.5 8.625C16.5 4.27576 12.9742 0.75 8.625 0.75C4.27576 0.75 0.75 4.27576 0.75 8.625C0.75 12.9742 4.27576 16.5 8.625 16.5Z" stroke="#1D2026" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                        <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[5px] h-[5px] absolute left-4 top-4">
                                            <path d="M0.75 0.75L5.3063 5.3063" stroke="#1D2026" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </div>
                                </div>
                                <p className="text-[#8C94A3] font-inter text-base leading-6">What do you want to learn...</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-6">
                    <div className="flex justify-center items-center w-6 h-6">
                        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-[15px]">
                            <path d="M2.1748 7.49994C2.17356 6.61045 2.34838 5.72951 2.68919 4.9079C3.03 4.08628 3.53006 3.34025 4.16054 2.7128C4.79101 2.08535 5.53945 1.58889 6.36269 1.25204C7.18593 0.915188 8.0677 0.744607 8.95718 0.75013C12.6687 0.777722 15.6375 3.86275 15.6375 7.58468V8.24994C15.6375 11.6077 16.34 13.5561 16.9587 14.621C17.0253 14.7348 17.0608 14.8642 17.0615 14.996C17.0622 15.1279 17.0281 15.2576 16.9627 15.3721C16.8973 15.4866 16.8028 15.5818 16.6888 15.6482C16.5749 15.7145 16.4454 15.7496 16.3135 15.7499H1.49798C1.3661 15.7496 1.23663 15.7145 1.12265 15.6481C1.00867 15.5818 0.914198 15.4866 0.848774 15.372C0.783349 15.2575 0.749283 15.1278 0.750011 14.9959C0.75074 15.864 0.786238 14.7346 0.852923 14.6209C1.47198 13.5559 2.1748 11.6075 2.1748 8.24994L2.1748 7.49994Z" stroke="#1D2026" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-1.5 h-1 absolute left-[9px] top-[18px]">
                            <path d="M0.75 0.75V1.5C0.75 2.29565 1.06607 3.05871 1.62868 3.62132C2.19129 4.18393 2.95435 4.5 3.75 4.5C4.54565 4.5 5.30871 4.18393 5.87132 3.62132C6.43393 3.05871 6.75 2.29565 6.75 1.5V0.75" stroke="#1D2026" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                    <div className="flex justify-center items-center w-6 h-6">
                        <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[19px] h-[17px]">
                            <path d="M10.125 17.25C10.125 17.25 0.75 12 0.75 5.62501C0.750191 4.49826 1.14061 3.40635 1.85489 2.53493C2.56916 1.66351 3.5632 1.06636 4.66799 0.845015C5.77278 0.623669 6.92014 0.791788 7.91499 1.32079C8.90984 1.84979 9.69077 2.70702 10.125 3.74673L10.125 3.74673C10.5592 2.70702 11.3402 1.84979 12.335 1.32079C13.3299 0.79179 14.4772 0.62367 15.582 0.845015C16.6868 1.06636 17.6808 1.66351 18.3951 2.53493C19.1094 3.40635 19.4998 4.49826 19.5 5.62501C19.5 12 10.125 17.25 10.125 17.25Z" stroke="#1D2026" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                    <div className="flex justify-center items-center w-6 h-6">
                        <svg width="3" height="3" viewBox="0 0 3 3" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[3px] h-[3px] absolute left-1.5 top-[19px]">
                            <path d="M1.5 0.75C1.91421 0.75 2.25 1.08579 2.25 1.5C2.25 1.91421 1.91421 2.25 1.5 2.25C1.08579 2.25 0.75 1.91421 0.75 1.5C0.75 1.08579 1.08579 0.75 1.5 0.75Z" fill="#1D2026" stroke="#1D2026" strokeWidth="1.5"/>
                        </svg>
                        <svg width="3" height="3" viewBox="0 0 3 3" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[3px] h-[3px] absolute left-4 top-[19px]">
                            <path d="M1.5 3C2.32843 3 3 2.32843 3 1.5C3 0.671573 2.32843 0 1.5 0C0.671573 0 0 0.671573 0 1.5C0 2.32843 0.671573 3 1.5 3Z" fill="#1D2026"/>
                        </svg>
                        <svg width="22" height="15" viewBox="0 0 22 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-3.5 absolute left-px top-[3px]">
                            <path d="M3.96429 4.5H20.7857L18.3108 13.1621C18.2213 13.4755 18.0321 13.7512 17.7718 13.9475C17.5116 14.1438 17.1945 14.25 16.8685 14.25H7.88145C7.55549 14.25 7.23839 14.1438 6.97816 13.9475C6.71792 13.7512 6.52872 13.4755 6.43917 13.1621L3.04827 1.29396C3.0035 1.13725 2.90889 0.999386 2.77878 0.901239C2.64866 0.803091 2.49011 0.75 2.32713 0.75H0.75" stroke="#1D2026" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                    <div className="flex items-start gap-3">
                        <button className="cursor-pointer text-nowrap flex py-0 px-6 justify-center items-center gap-3 bg-[#FFEEE8] w-fit">
                            <p className="text-[#FF6636] font-inter text-base font-semibold leading-[48px] tracking-[-0.008em]">Create Account</p>
                        </button>
                        <button className="cursor-pointer text-nowrap flex py-0 px-6 justify-center items-center gap-3 bg-[#FF6636] w-fit">
                            <p className="text-[#FFF] font-inter text-base font-semibold leading-[48px] tracking-[-0.008em]">Sign In</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bottomheader;


