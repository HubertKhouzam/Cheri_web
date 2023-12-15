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
        <MDBRow className='mx-auto container'>
        <MDBCol lg={4} md={12} className='mb-4 mb-lg-0'>
            <img
            src='/photos_khai/DSC03066.jpg'
            className='w-100 shadow-1-strong rounded mb-4'
            alt='photo_1'
            />

            <img
            src='/photos_khai/4_but_better.JPG'
            className='w-100 shadow-1-strong rounded mb-4'
            alt='photo_2'
            />
        </MDBCol>

        <MDBCol lg={4} className='mb-4 mb-lg-0'>
            <img
            src='/photos_khai/DSC03176.jpg'
            className='w-100 shadow-1-strong rounded mb-4'
            alt='photo_3'
            />

            <img
            src='/photos_khai/DSC04270.JPG'
            className='w-100 shadow-1-strong rounded mb-4'
            alt='photo_4'
            
            />
        </MDBCol>

        <MDBCol lg={4} className='mb-4 mb-lg-0'>
            <img
            src='/photos_khai/DSC04129.JPG'
            className='w-100 shadow-1-strong rounded mb-4'
            alt='photo_5'
            />

            <img
            src='/photos_khai/IMG_5092.JPG'
            className='w-100 shadow-1-strong rounded mb-4'
            alt='photo_6'
            />
        </MDBCol>
        
        <MDBCol lg={4} className='mb-4 mb-lg-0'>
            <img
            src='/photos_khai/DSC04063.JPG'
            className='w-100 shadow-1-strong rounded mb-4'
            alt='photo_7'
            />

            <img
            src='/photos_khai/DSC04220.JPG'
            className='w-100 shadow-1-strong rounded mb-4'
            alt='photo_8'
            />
        </MDBCol>

        <MDBCol lg={4} className='mb-4 mb-lg-0'>
            <img
            src='/photos_khai/DSC03309.jpg'
            className='w-100 shadow-1-strong rounded mb-4'
            alt='photo_9'
            />

            <img
            src='/photos_khai/DSC03114.jpg'
            className='w-100 shadow-1-strong rounded mb-4'
            alt='photo_10'
            />
        </MDBCol>

        <MDBCol lg={4} className='mb-4 mb-lg-0'>
            <img
            src='/photos_khai/DSC03393-2.jpg'
            className='w-100 shadow-1-strong rounded mb-4'
            alt='photo_11'
            />

            <img
            src='/photos_khai/DSC03346.jpg'
            className='w-100 shadow-1-strong rounded mb-4'
            alt='photo_12'
            />
        </MDBCol>

        <MDBCol lg={4} className='mb-4 mb-lg-0'>
            <img
            src='/photos_khai/DSC03098.jpg'
            className='w-100 shadow-1-strong rounded mb-4'
            alt='photo_13'
            />

            <img
            src='/photos_khai/DSC03140.jpg'
            className='w-100 shadow-1-strong rounded mb-4'
            alt='photo_14'
            />
        </MDBCol>

        <MDBCol lg={4} className='mb-4 mb-lg-0'>
            <img
            src='/photos_khai/DSC03074.jpg'
            className='w-100 shadow-1-strong rounded mb-4'
            alt='photo_15'
            />

            <img
            src='/photos_khai/DSC03263.jpg'
            className='w-100 shadow-1-strong rounded mb-4'
            alt='photo_16'
            />
        </MDBCol>
        <MDBCol lg={4} className='mb-4 mb-lg-0'>
            <img
            src='/photos_khai/DSC03137.jpg'
            className='w-100 shadow-1-strong rounded mb-4'
            alt='photo_17'
            />

            <img
            src='/photos_khai/DSC03216.jpg'
            className='w-100 shadow-1-strong rounded mb-4'
            alt='photo_18'
            />
        </MDBCol>
        </MDBRow>
    </div>
  );
}


