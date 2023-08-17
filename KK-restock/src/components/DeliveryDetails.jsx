import React from "react";

function DeliveryDetails(props) {
  return (
    <div className="">
      <div className="flex  ">
        <h1 className="text-[14px] font-medium ml-[550px] ">
          Delivery Details{" "}
        </h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="27"
          className="ml-3 "
          viewBox="0 0 30 27"
          fill="none"
        >
          <path
            d="M27.4272 9.68357L25.4892 3.86957C25.208 3.02309 24.6673 2.28673 23.9437 1.76513C23.2202 1.24352 22.3507 0.963198 21.4587 0.963991H8.54158C7.64963 0.963198 6.78012 1.24352 6.05658 1.76513C5.33305 2.28673 4.7923 3.02309 4.51116 3.86957L2.57316 9.68357C2.05781 9.89921 1.61771 10.2624 1.30817 10.7274C0.998641 11.1925 0.833495 11.7387 0.833496 12.2973V19.3807C0.833496 20.4262 1.40583 21.33 2.25016 21.8216V25.0473C2.25016 25.423 2.39942 25.7834 2.66509 26.0491C2.93077 26.3147 3.29111 26.464 3.66683 26.464H5.0835C5.45922 26.464 5.81955 26.3147 6.08523 26.0491C6.35091 25.7834 6.50016 25.423 6.50016 25.0473V22.214H23.5002V25.0473C23.5002 25.423 23.6494 25.7834 23.9151 26.0491C24.1808 26.3147 24.5411 26.464 24.9168 26.464H26.3335C26.7092 26.464 27.0696 26.3147 27.3352 26.0491C27.6009 25.7834 27.7502 25.423 27.7502 25.0473V21.8216C28.18 21.5751 28.5372 21.2197 28.7859 20.7912C29.0346 20.3626 29.166 19.8761 29.1668 19.3807V12.2973C29.1668 11.7387 29.0017 11.1925 28.6922 10.7274C28.3826 10.2624 27.9425 9.89921 27.4272 9.68357ZM8.54158 3.79732H21.4573C22.0679 3.79732 22.6091 4.18549 22.8017 4.76632L24.3686 9.46399H5.63175L7.19716 4.76632C7.29116 4.48412 7.4716 4.23865 7.7129 4.06473C7.9542 3.89081 8.24413 3.79725 8.54158 3.79732ZM5.79183 17.964C5.51268 17.9639 5.23628 17.9088 4.97841 17.8019C4.72054 17.695 4.48626 17.5383 4.28893 17.3409C4.09161 17.1434 3.93511 16.909 3.82837 16.6511C3.72163 16.3932 3.66674 16.1167 3.66683 15.8376C3.66692 15.5584 3.722 15.282 3.82891 15.0242C3.93582 14.7663 4.09248 14.532 4.28994 14.3347C4.48739 14.1374 4.72178 13.9809 4.97972 13.8741C5.23766 13.7674 5.51409 13.7125 5.79325 13.7126C6.35702 13.7128 6.89763 13.9369 7.29614 14.3357C7.69466 14.7345 7.91843 15.2752 7.91825 15.839C7.91806 16.4028 7.69392 16.9434 7.29514 17.3419C6.89636 17.7404 6.3556 17.9642 5.79183 17.964ZM24.2085 17.964C23.9293 17.9639 23.6529 17.9088 23.3951 17.8019C23.1372 17.695 22.9029 17.5383 22.7056 17.3409C22.5083 17.1434 22.3518 16.909 22.245 16.6511C22.1383 16.3932 22.0834 16.1167 22.0835 15.8376C22.0836 15.5584 22.1387 15.282 22.2456 15.0242C22.3525 14.7663 22.5091 14.532 22.7066 14.3347C22.9041 14.1374 23.1384 13.9809 23.3964 13.8741C23.6543 13.7674 23.9308 13.7125 24.2099 13.7126C24.7737 13.7128 25.3143 13.9369 25.7128 14.3357C26.1113 14.7345 26.3351 15.2752 26.3349 15.839C26.3347 16.4028 26.1106 16.9434 25.7118 17.3419C25.313 17.7404 24.7723 17.9642 24.2085 17.964Z"
            fill="black"
          />
        </svg>
      </div>
      <div className=" ml-[550px] text-[11px] mb-8  ">
        <p className="  pt-2 ">
          All Transactions are completed after Delivery is <br /> coffirmed and
          it will be done within a day after <br /> the order is confirmed. A
          certain percetage of <br /> payment (refundable) is taken to confirm
          the <br /> order according to our T&Cs.
          <br />
          Please read our
          <span className="text-orange-500 text-[11px] font-normal">
            Terms and Conditions
          </span>
        </p>
      </div>

      <div className=" flex items-center justify-center ml-[200px] text-center text-black text-[11px] font-normal mb-8 ">
        Remember to submit ur review by giving the stars. on your order. It goes
        a long in providing the best Customer service
        <svg
          viewBox="0 0 64 64"
          fill="currentColor"
          height="1em"
          width="1em"
          color="kk"
          {...props}
        >
          <path
            fill="orange"
            stroke="currentColor"
            strokeMiterlimit={10}
            strokeWidth={2}
            d="M32 47L12 62l8-24L2 24h22l8-23 8 23h22L44 38l8 24z"
          />
        </svg>
        <svg
          viewBox="0 0 64 64"
          fill="currentColor"
          height="1em"
          width="1em"
          color="kk"
          {...props}
        >
          <path
            fill="orange"
            stroke="currentColor"
            strokeMiterlimit={10}
            strokeWidth={2}
            d="M32 47L12 62l8-24L2 24h22l8-23 8 23h22L44 38l8 24z"
          />
        </svg>
        <svg
          viewBox="0 0 64 64"
          fill="currentColor"
          height="1em"
          width="1em"
          color="kk"
          {...props}
        >
          <path
            fill="orange"
            stroke="currentColor"
            strokeMiterlimit={10}
            strokeWidth={2}
            d="M32 47L12 62l8-24L2 24h22l8-23 8 23h22L44 38l8 24z"
          />
        </svg>
        <svg
          viewBox="0 0 64 64"
          fill="currentColor"
          height="1em"
          width="1em"
          color="kk"
          {...props}
        >
          <path
            fill="orange"
            stroke="currentColor"
            strokeMiterlimit={10}
            strokeWidth={2}
            d="M32 47L12 62l8-24L2 24h22l8-23 8 23h22L44 38l8 24z"
          />
        </svg>
        <svg
          viewBox="0 0 64 64"
          fill="currentColor"
          height="1em"
          width="1em"
          color="kk"
          {...props}
        >
          <path
            fill="orange"
            stroke="currentColor"
            strokeMiterlimit={10}
            strokeWidth={2}
            d="M32 47L12 62l8-24L2 24h22l8-23 8 23h22L44 38l8 24z"
          />
        </svg>
      </div>
    </div>
  );
}
export default DeliveryDetails;
