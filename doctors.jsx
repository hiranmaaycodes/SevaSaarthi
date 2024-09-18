import React from 'react';

const doctors = [
  {
    name: 'Dr. Abhijit Sen',
    profession: 'Orthopaedics',
    time: '12:00 PM, October 14',
  },
  {
    name: 'Dr. Adit Roy',
    profession: 'Cardiology',
    time: '1:30 PM, October 15',
  },
  {
    name: 'Dr. S. K. Chakrabory',
    profession: 'Gastroenterology',
    time: '3:00 PM, October 16',
  },
  {
    name: 'Dr. B. K. Sen',
    profession: 'Dental Care',
    time: '3:00 PM, September 27',
  },
  {
    name: 'Dr. Imtiaz Kamal',
    profession: 'Urology',
    time: '3:00 PM, October 18',
  },
];

const DoctorBooking = () => {
  return (
    <div
      className='relative flex size-full min-h-screen flex-col bg-slate-50 group/design-root overflow-x-hidden'
      style={{ fontFamily: 'Epilogue, "Noto Sans", sans-serif' }}
    >
      <div className='flex items-center bg-slate-50 p-4 pb-2 justify-between'>
        <div
          className='text-[#0e171b] flex size-12 shrink-0 items-center'
          data-icon='ArrowLeft'
          data-size='24px'
          data-weight='regular'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24px'
            height='24px'
            fill='currentColor'
            viewBox='0 0 256 256'
          >
            <path d='M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z'></path>
          </svg>
        </div>
      </div>

      <h2 className='text-[#0e171b] tracking-light text-[28px] font-bold leading-tight px-4 text-left pb-3 pt-5'>
        Book a Doctor
      </h2>

      <div className='flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3'>
        <label className='flex flex-col min-w-40 flex-1'>
          <input
            placeholder='Select Specialization'
            className='form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#0e171b] focus:outline-0 focus:ring-0 border-none bg-[#e7eff3] focus:border-none h-14 placeholder:text-[#4e7f97] p-4 text-base font-normal leading-normal'
          />
        </label>
      </div>

      <div className='flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3'>
        <label className='flex flex-col min-w-40 flex-1'>
          <input
            placeholder='Enter Your Location'
            className='form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#0e171b] focus:outline-0 focus:ring-0 border-none bg-[#e7eff3] focus:border-none h-14 placeholder:text-[#4e7f97] p-4 text-base font-normal leading-normal'
          />
        </label>
      </div>

      <h3 className='text-[#0e171b] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4'>
        Available Doctors
      </h3>

      {doctors.map((doctor, index) => (
        <div
          key={index}
          className='flex items-center gap-4 bg-slate-50 px-4 min-h-[72px] py-2 justify-between'
        >
          <div className='flex flex-col justify-center'>
            <p className='text-[#0e171b] text-base font-medium leading-normal line-clamp-1'>
              {doctor.name}
            </p>
            <p className='text-[#4e7f97] text-sm font-normal leading-normal line-clamp-2'>
              {doctor.profession}
            </p>
          </div>
          <div className='shrink-0'>
            <button className='flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 bg-[#e7eff3] text-[#0e171b] text-sm font-medium leading-normal w-fit'>
              <span className='truncate'>{doctor.time}</span>
            </button>
          </div>
        </div>
      ))}

      <div className='flex justify-stretch'>
        <div className='flex flex-1 gap-3 flex-wrap px-4 py-3 justify-between'>
          <button className='flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-transparent text-[#0e171b]'>
            <span className='truncate'>Filter</span>
          </button>
          <button className='flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#e7eff3] text-[#0e171b]'>
            <span className='truncate'>Sort</span>
          </button>
        </div>
      </div>

      <div className='h-5 bg-slate-50'></div>
    </div>
  );
};

export default DoctorBooking;
