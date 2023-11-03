import React from 'react';
import {
  MDBCol,
  MDBRow,
} from 'mdb-react-ui-kit';
import Navigation from '../Components/Navbar';
import { Margin } from '@mui/icons-material';

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
            alt='photo_1'
            />

            <img
            src='https://lh3.googleusercontent.com/pw/ADCreHdYVU0bmltN34_sePyogtU_DQ15IE16zp4QETxLbBdz3w3MUNTzfdIrEb81bA-0x2ZIYvnkyhOoQM34Pz4Nz3kQE1QhPIAwv-_XZMX4f-P3Lr8FYOr6CXvJhtmjBS5Rw3LkiELeIjuzzfvrglkvws2e=w988-h1482-s-no?authuser=0'
            className='w-100 shadow-1-strong rounded mb-4'
            alt='photo_2'
            />
        </MDBCol>

        <MDBCol lg={4} className='mb-4 mb-lg-0'>
            <img
            src='https://lh3.googleusercontent.com/pw/ADCreHdncsnNb4yiCqnqqjPXska52X5cHHhU146by7SQSc-GXpw1lMMhL9MbdFToD5CpB59T372ICgQYAfgzRe1Lg51JFmrSOZAucm2eBmrFhn_PDhHgOoMNW9hoegIewqsXqydiBD7iKIfhihKjUKpz3j89Ew=w596-h893-s-no-gm?authuser=0'
            className='w-100 shadow-1-strong rounded mb-4'
            alt='photo_3'
            />

            <img
            src='https://lh3.googleusercontent.com/pw/ADCreHfNQzPwf_6_YPCv4wK3RukcjNFK5hcBZRP1Hf5vdnKW6V9CTtzYdXJMiLsMow8taAru-g2ROuobFZTWHQPTdmOJywT_1DffS-g062Muss3DSlrTKhvEAOMEQBY40KsbRNeBTR9tt_CejwIVrzoiGmPd=w988-h1482-s-no?authuser=0'
            className='w-100 shadow-1-strong rounded mb-4'
            alt='photo_4'
            
            />
        </MDBCol>

        <MDBCol lg={4} className='mb-4 mb-lg-0'>
            <img
            src='https://lh3.googleusercontent.com/pw/ADCreHfiAAw6QhcsSXVWXsCuMJxm3g5gfISdX1cdGnWhzndcvx6virCaJvlaYpSVbZGxj9HXlDVlkXaRjGD6TJQUJoIJF0Lx4XqlSoKRYkb_d7L2_M2NflUzppifZU0e2txX8vo_BkZGKC380SQa9OdGUAnz=w988-h1482-s-no?authuser=0'
            className='w-100 shadow-1-strong rounded mb-4'
            alt='photo_5'
            />

            <img
            src='https://lh3.googleusercontent.com/pw/ADCreHcJWdOtFyPXPBeRRj4PVDjIbVyKi7xuyYbCL4_ZKxehmXDoYvkIgPkL-_RHFTPczAIGARaN-of-r8G7bZJvUDoAYBJukRoCTJD6_zwiCCpPc_EsgmU2n1oOS6K7LygAupKjvGE0E3WZ5vikHH--DX8M=w988-h1482-s-no?authuser=0'
            className='w-100 shadow-1-strong rounded mb-4'
            alt='photo_6'
            />
        </MDBCol>
        
        <MDBCol lg={4} className='mb-4 mb-lg-0'>
            <img
            src='https://lh3.googleusercontent.com/pw/ADCreHeslPo45W9O8arBaoCmJoNvR2aw4kJLlz24nq68-g9svrUfUmsoNJlyqD4bzy-z4mWr_T3MhioNEUE-6b9mDQTQ1lSQ03x6F7hnS8-ymGEMF7IKUMwf4jRibAMDBk5hKwUbNo7FN2kuCiOrsgoVyxY_=w990-h1486-s-no?authuser=0'
            className='w-100 shadow-1-strong rounded mb-4'
            alt='photo_7'
            />

            <img
            src='https://lh3.googleusercontent.com/pw/ADCreHciW7lwGXzROPXgg_J7qqPj_rdVodH74qUixDLicajpYRxX3gJjUwMwudDkPgvkmqWXo801YtGYxsWBMAKNgRTXRM2Q7OJfGR-Hx2TPMDW6Mbu0BzwPoeQYYEfJy2qnrJzazWVkFOUAdYyBhBVEcYvG=w988-h1482-s-no?authuser=0'
            className='w-100 shadow-1-strong rounded mb-4'
            alt='photo_8'
            />
        </MDBCol>

        <MDBCol lg={4} className='mb-4 mb-lg-0'>
            <img
            src='https://lh3.googleusercontent.com/pw/ADCreHewgzr4ONbVAX4sYiNYnSNlL9B58E20-Z1o-xpcjIB8pZEr6wXHlyyAYvWnPQBZ8ZDu6gCLa5qC0NLNV35YKG8OXiDh_7yL6ck5q-pD-Ugr17pbYWGW8HYHJEJOwe1Imuyw3aR9zdeF6u6muJcHATZnsw=w596-h893-s-no-gm?authuser=0'
            className='w-100 shadow-1-strong rounded mb-4'
            alt='photo_9'
            />

            <img
            src='https://lh3.googleusercontent.com/pw/ADCreHcKG13WQ0x7iEItO9MnGajBulbYnQ1TjMMR2E3jOd-j8PpAlgnzWMfuAY_q2GBZhHJ2mToWDCwR-Dhb2PLrWOkU00kxh29nUdQJgwWRBvaKDdbnwJrbLWT2W0JvUNJ0nh5hR4HOvzag81HfD-gFj-5LJQ=w596-h893-s-no-gm?authuser=0'
            className='w-100 shadow-1-strong rounded mb-4'
            alt='photo_10'
            />
        </MDBCol>

        <MDBCol lg={4} className='mb-4 mb-lg-0'>
            <img
            src='https://lh3.googleusercontent.com/pw/ADCreHe8hxLxpfHLiKl9j9fYrlYTeQZQKUvbPkohMsyNcBWu81BYuJfAofmJ79LgyHHDlF7uaxu-XbRjqsdZmDPoukaRlOS1ngx8kZ4sMuAQhGL_DEvQSiizxdKU2SpKto1YTjCsS8oMEv7awvfINSDvQDc6cA=w596-h893-s-no-gm?authuser=0'
            className='w-100 shadow-1-strong rounded mb-4'
            alt='photo_11'
            />

            <img
            src='https://lh3.googleusercontent.com/pw/ADCreHdSNShQsnqK3wILYK5gpXc1rnJTdD4KZSP82Q4zv2MpY1MFhiM_u39j9WI1QIsvfz9h8jEavkPD2kl001pVnZborbOyjM7Pdui_z2cOQbDY6MpJE5hwWDTu6n9aixkf8eqh17gEGru7kudR-V5Q38v-5w=w596-h893-s-no-gm?authuser=0'
            className='w-100 shadow-1-strong rounded mb-4'
            alt='photo_12'
            />
        </MDBCol>

        <MDBCol lg={4} className='mb-4 mb-lg-0'>
            <img
            src='https://lh3.googleusercontent.com/pw/ADCreHe2cNOBa65jR-Fs3rkeVtLyafS6m9nDN2KcFWSLLqmzl3NYiiYJ9i0Xu5tIKT9m_49DD91iKC-v8YRwH-zctpXjjUrqgg1uFi_7L3c60n8tPNqTUbL0oyWgtPSRy7OW3Li3W3gNyvuAIMa9x-lASMmmQw=w596-h893-s-no-gm?authuser=0'
            className='w-100 shadow-1-strong rounded mb-4'
            alt='photo_13'
            />

            <img
            src='https://lh3.googleusercontent.com/pw/ADCreHex_iRf35V73QHsjx680BaECTl1aZrEaeiMh8vcYwdxsCACYg25JcOkcAwuu2qQ5BqKUUTVBeC3anWLoorJKSL_ZrVSy8_Sw5sD91-9h2mVIbCgzsUZ4X1KGFhx-hopVPc3Q3NuMZhXBoF3vdMHrnckyg=w596-h893-s-no-gm?authuser=0'
            className='w-100 shadow-1-strong rounded mb-4'
            alt='photo_14'
            />
        </MDBCol>

        <MDBCol lg={4} className='mb-4 mb-lg-0'>
            <img
            src='https://lh3.googleusercontent.com/pw/ADCreHckM0bqIqsCoqB6U2zLLV8E45mt61cBsfrfWXXeKCRNisNqZxeTuaTfUMAfHA4uhIZCP1SjVh1I6u_l2Y4_oTyBHgb9mxNQKwXWhHATIKoOjc4L_5jP4MQNFXBNqJ8ne_RuoBPgQApIjPpeP9RGIoiE0A=w596-h893-s-no-gm?authuser=0'
            className='w-100 shadow-1-strong rounded mb-4'
            alt='photo_15'
            />

            <img
            src='https://lh3.googleusercontent.com/pw/ADCreHfNkskZqbBint-S0m6n3vcHOy2jMW2yxRR2YGvrsRvGQW0ihSkJ3Asdpyym_-6w3zXRsuZW_pruCILq1Yv24xwfZScBjfduzRc7uduRyWzlIjnm70zRPQZtRd4E3_RVyLYLSmMYmwwoGctlRLYm9VBbtQ=w596-h893-s-no-gm?authuser=0'
            className='w-100 shadow-1-strong rounded mb-4'
            alt='photo_16'
            />
        </MDBCol>
        <MDBCol lg={4} className='mb-4 mb-lg-0'>
            <img
            src='https://lh3.googleusercontent.com/pw/ADCreHfDKNVuP-P2MUBL2WUWCHQwotJtZMH3YwLK7qTpnHDBEWhQFxHQL9SaLSjaUNq98O0WfNmFSNvgyf29uBDkyVUxj0KG1V1RodAy4_C8ixWSJf6e6BCqAG6A523bDkWp_SATtZxRP72-TQCEKVQYxTISUA=w596-h893-s-no-gm?authuser=0'
            className='w-100 shadow-1-strong rounded mb-4'
            alt='photo_17'
            />

            <img
            src='https://lh3.googleusercontent.com/pw/ADCreHePnP5YUH0qgy4owg6YIhpmdObL81Bd5OhHmzcO_2nPintTVs78fMILaXR4kAAEDIOcr13IcEDIScWZVHwZfgn8jC9qjI55fpe4sd5gGIZe0Q2dyUTYMB0Y-FIztEugSv5Z2uNL6UPoarnDfem6S3T2KQ=w596-h893-s-no-gm?authuser=0'
            className='w-100 shadow-1-strong rounded mb-4'
            alt='photo_18'
            />
        </MDBCol>
        </MDBRow>
    </div>
  );
}


