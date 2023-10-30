import React from 'react';
import {
  MDBCol,
  MDBRow,
} from 'mdb-react-ui-kit';
import Navigation from '../Components/Navbar';

export default function App() {
  return (
    <div>
        <Navigation color="black"/>
        <div>
            <h1 className='text-4xl text-black text-center font-sans font-serif mt-20'> Fall / Winter 2023 Lookbook </h1>
            <p className='text-black text-center font-thin font-sans font-serif mt-10 mb-20'> Montreal, Quebec, Canada</p>
        </div>
        <MDBRow>
        <MDBCol lg={4} md={12} className='mb-4 mb-lg-0'>
            <img
            src='https://lh3.googleusercontent.com/pw/ADCreHcJ1o3VZgV4a82MhDCIzcGHEbOXbO1rn71O07AvyxRQ7K-kCBjmIhz_f5Y1R-Z4f4HDMMCzHUIXn01Wk92l1-OFR-C3EYTL2LxhOm0Hhew8GKtc-lDZPSNW_TsU3l0SL-Yae6I1sLdiOrlmr9O6TNcBTA=w596-h893-s-no-gm?authuser=0'
            className='w-100 shadow-1-strong rounded mb-4'
            alt='Boat on Calm Water'
            />

            <img
            src='https://lh3.googleusercontent.com/pw/ADCreHf9rX0XaxP0Ot8SQXJ3cOJiOJXU0WKT3MRO60xOBTOI39lmTdGjjiLpgmF2W-UvaYCtyQOFZEkfoP2Sswi2sLlrHUC8XXUhzPahkELkX9S8AurVmAZxjz-0-TRWZtZt7suE-36MsP18zvDUY_2WJXPEbA=w596-h893-s-no-gm?authuser=0'
            className='w-100 shadow-1-strong rounded mb-4'
            alt='Wintry Mountain Landscape'
            />
        </MDBCol>

        <MDBCol lg={4} className='mb-4 mb-lg-0'>
            <img
            src='https://lh3.googleusercontent.com/pw/ADCreHdncsnNb4yiCqnqqjPXska52X5cHHhU146by7SQSc-GXpw1lMMhL9MbdFToD5CpB59T372ICgQYAfgzRe1Lg51JFmrSOZAucm2eBmrFhn_PDhHgOoMNW9hoegIewqsXqydiBD7iKIfhihKjUKpz3j89Ew=w596-h893-s-no-gm?authuser=0'
            className='w-100 shadow-1-strong rounded mb-4'
            alt='Mountains in the Clouds'
            />

            <img
            src='https://lh3.googleusercontent.com/pw/ADCreHd5z8yFsb-vw-OSWyHiIsJykbd6jO8m3OHfDdiXuPTnksaLQbYip-KMH8aW8Iq3TGdNTnNZGoUSQILUCb1aJo1iwc0Kry8vthee5LEj9WCjjdjLTuSp4LhU3VjD071udCrikNS51x5qOJ78I4wY_sPgkg=w596-h893-s-no-gm?authuser=0'
            className='w-100 shadow-1-strong rounded mb-4'
            alt='Boat on Calm Water'
            />
        </MDBCol>

        <MDBCol lg={4} className='mb-4 mb-lg-0'>
            <img
            src='https://lh3.googleusercontent.com/pw/ADCreHcKG13WQ0x7iEItO9MnGajBulbYnQ1TjMMR2E3jOd-j8PpAlgnzWMfuAY_q2GBZhHJ2mToWDCwR-Dhb2PLrWOkU00kxh29nUdQJgwWRBvaKDdbnwJrbLWT2W0JvUNJ0nh5hR4HOvzag81HfD-gFj-5LJQ=w596-h893-s-no-gm?authuser=0'
            className='w-100 shadow-1-strong rounded mb-4'
            alt='Waves at Sea'
            />

            <img
            src='https://lh3.googleusercontent.com/pw/ADCreHdkKX1_hjSolgE0M9S-P5DHPVQS8QHvmQ57cQKCUgFaPci0Qyyi9XQk9wClTDwDOaFsHUh-8GI86lUnIButwm8fG7DuIFXujnOG4YpQ0yNdFC9PISvAvNto-hUXGAEX-3L51aTqhuLVQLJM0WxgqQSkRw=w596-h893-s-no-gm?authuser=0'
            className='w-100 shadow-1-strong rounded mb-4'
            alt='Yosemite National Park'
            />
        </MDBCol>
        
        <MDBCol lg={4} className='mb-4 mb-lg-0'>
            <img
            src='https://lh3.googleusercontent.com/pw/ADCreHe1dXVh4Cy7smMPOgdhlDFo-YeSrEIfgE1Z86n6UA6RQSfrNTe3AkrI9bBfht189pK9FuyQoXXGmXpVIbX29QrIfe8TnkZY0rSoWKXyn3naNwUSVldi9Hbut2NcHHxm1V2lbdtKepCgSP-_9dqsc6CNSw=w596-h893-s-no-gm?authuser=0'
            className='w-100 shadow-1-strong rounded mb-4'
            alt='Waves at Sea'
            />

            <img
            src='https://lh3.googleusercontent.com/pw/ADCreHej6Ti4U5Sj8eZUR-2ixEUn0pKhSg_gFnPqb9PIRCTekYXKO_3Il7RA3Rd24pBFUdg-Ch0r4wZsbTZ3g77f2XHSg2ddU74HVVoDQDWmY1wBIklfC67kbnaRqnoZF7vOe-K02VVHp7l5cViVC2vq3aZi1w=w596-h893-s-no-gm?authuser=0'
            className='w-100 shadow-1-strong rounded mb-4'
            alt='Yosemite National Park'
            />
        </MDBCol>

        <MDBCol lg={4} className='mb-4 mb-lg-0'>
            <img
            src='https://lh3.googleusercontent.com/pw/ADCreHewgzr4ONbVAX4sYiNYnSNlL9B58E20-Z1o-xpcjIB8pZEr6wXHlyyAYvWnPQBZ8ZDu6gCLa5qC0NLNV35YKG8OXiDh_7yL6ck5q-pD-Ugr17pbYWGW8HYHJEJOwe1Imuyw3aR9zdeF6u6muJcHATZnsw=w596-h893-s-no-gm?authuser=0'
            className='w-100 shadow-1-strong rounded mb-4'
            alt='Waves at Sea'
            />

            <img
            src='https://lh3.googleusercontent.com/pw/ADCreHc9ISfGnlV58gF_gKAVmh6UYzvtU9SXovf0VCU8aXu4ZkjAn8Iuu88Nmqo_hjpj33Ji3CkNV33btYcBOjDt9MDfui1A4YTuyMfH3BNk3ltloge3-wd7r99jZHkRquyjwXbipGm91uHAeQbFO-3w2aUjNg=w596-h893-s-no-gm?authuser=0'
            className='w-100 shadow-1-strong rounded mb-4'
            alt='Yosemite National Park'
            />
        </MDBCol>

        <MDBCol lg={4} className='mb-4 mb-lg-0'>
            <img
            src='https://lh3.googleusercontent.com/pw/ADCreHe8hxLxpfHLiKl9j9fYrlYTeQZQKUvbPkohMsyNcBWu81BYuJfAofmJ79LgyHHDlF7uaxu-XbRjqsdZmDPoukaRlOS1ngx8kZ4sMuAQhGL_DEvQSiizxdKU2SpKto1YTjCsS8oMEv7awvfINSDvQDc6cA=w596-h893-s-no-gm?authuser=0'
            className='w-100 shadow-1-strong rounded mb-4'
            alt='Waves at Sea'
            />

            <img
            src='https://lh3.googleusercontent.com/pw/ADCreHdSNShQsnqK3wILYK5gpXc1rnJTdD4KZSP82Q4zv2MpY1MFhiM_u39j9WI1QIsvfz9h8jEavkPD2kl001pVnZborbOyjM7Pdui_z2cOQbDY6MpJE5hwWDTu6n9aixkf8eqh17gEGru7kudR-V5Q38v-5w=w596-h893-s-no-gm?authuser=0'
            className='w-100 shadow-1-strong rounded mb-4'
            alt='Yosemite National Park'
            />
        </MDBCol>

        <MDBCol lg={4} className='mb-4 mb-lg-0'>
            <img
            src='https://lh3.googleusercontent.com/pw/ADCreHe2cNOBa65jR-Fs3rkeVtLyafS6m9nDN2KcFWSLLqmzl3NYiiYJ9i0Xu5tIKT9m_49DD91iKC-v8YRwH-zctpXjjUrqgg1uFi_7L3c60n8tPNqTUbL0oyWgtPSRy7OW3Li3W3gNyvuAIMa9x-lASMmmQw=w596-h893-s-no-gm?authuser=0'
            className='w-100 shadow-1-strong rounded mb-4'
            alt='Waves at Sea'
            />

            <img
            src='https://lh3.googleusercontent.com/pw/ADCreHex_iRf35V73QHsjx680BaECTl1aZrEaeiMh8vcYwdxsCACYg25JcOkcAwuu2qQ5BqKUUTVBeC3anWLoorJKSL_ZrVSy8_Sw5sD91-9h2mVIbCgzsUZ4X1KGFhx-hopVPc3Q3NuMZhXBoF3vdMHrnckyg=w596-h893-s-no-gm?authuser=0'
            className='w-100 shadow-1-strong rounded mb-4'
            alt='Yosemite National Park'
            />
        </MDBCol>

        <MDBCol lg={4} className='mb-4 mb-lg-0'>
            <img
            src='https://lh3.googleusercontent.com/pw/ADCreHckM0bqIqsCoqB6U2zLLV8E45mt61cBsfrfWXXeKCRNisNqZxeTuaTfUMAfHA4uhIZCP1SjVh1I6u_l2Y4_oTyBHgb9mxNQKwXWhHATIKoOjc4L_5jP4MQNFXBNqJ8ne_RuoBPgQApIjPpeP9RGIoiE0A=w596-h893-s-no-gm?authuser=0'
            className='w-100 shadow-1-strong rounded mb-4'
            alt='Waves at Sea'
            />

            <img
            src='https://lh3.googleusercontent.com/pw/ADCreHfNkskZqbBint-S0m6n3vcHOy2jMW2yxRR2YGvrsRvGQW0ihSkJ3Asdpyym_-6w3zXRsuZW_pruCILq1Yv24xwfZScBjfduzRc7uduRyWzlIjnm70zRPQZtRd4E3_RVyLYLSmMYmwwoGctlRLYm9VBbtQ=w596-h893-s-no-gm?authuser=0'
            className='w-100 shadow-1-strong rounded mb-4'
            alt='Yosemite National Park'
            />
        </MDBCol>
        <MDBCol lg={4} className='mb-4 mb-lg-0'>
            <img
            src='https://lh3.googleusercontent.com/pw/ADCreHfDKNVuP-P2MUBL2WUWCHQwotJtZMH3YwLK7qTpnHDBEWhQFxHQL9SaLSjaUNq98O0WfNmFSNvgyf29uBDkyVUxj0KG1V1RodAy4_C8ixWSJf6e6BCqAG6A523bDkWp_SATtZxRP72-TQCEKVQYxTISUA=w596-h893-s-no-gm?authuser=0'
            className='w-100 shadow-1-strong rounded mb-4'
            alt='Waves at Sea'
            />

            <img
            src='https://lh3.googleusercontent.com/pw/ADCreHePnP5YUH0qgy4owg6YIhpmdObL81Bd5OhHmzcO_2nPintTVs78fMILaXR4kAAEDIOcr13IcEDIScWZVHwZfgn8jC9qjI55fpe4sd5gGIZe0Q2dyUTYMB0Y-FIztEugSv5Z2uNL6UPoarnDfem6S3T2KQ=w596-h893-s-no-gm?authuser=0'
            className='w-100 shadow-1-strong rounded mb-4'
            alt='Yosemite National Park'
            />
        </MDBCol>
        </MDBRow>
    </div>
  );
}


