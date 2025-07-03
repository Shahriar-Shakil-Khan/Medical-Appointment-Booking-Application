
import CountUp from 'react-countup';

const CounterPage = () => {
  
    return (

        <div class="container mx-auto p-6">
        <div class="text-center mb-8">
            <h1 class="text-3xl font-semibold text-white">We Provide Best Medical Services</h1>
            <p class="text-white mt-2">Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div class="card bg-white shadow-lg rounded-lg p-6 text-center">
                <div class="text-4xl mb-4">
                    <i class="fas fa-user-md"></i>
                </div>
                <h2 class="text-xl font-semibold text-gray-800"> <CountUp start={10} end={199} duration={10} delay={0}/>+</h2>
                <p class="text-gray-600">Total Doctors</p>
            </div>

            <div class="card bg-white shadow-lg rounded-lg p-6 text-center">
                <div class="text-4xl mb-4">
                    <i class="fas fa-star"></i>
                </div>
                <h2 class="text-xl font-semibold text-gray-800"><CountUp start={70} end={467} duration={10} delay={0}/>+</h2>
                <p class="text-gray-600">Total Reviews</p>
            </div>

            <div class="card bg-white shadow-lg rounded-lg p-6 text-center">
                <div class="text-4xl mb-4">
                    <i class="fas fa-procedures"></i>
                </div>
                <h2 class="text-xl font-semibold text-gray-800"><CountUp start={100} end={1900} duration={10} delay={0}/>+</h2>
                <p class="text-gray-600">Patients</p>
            </div>

            <div class="card bg-white shadow-lg rounded-lg p-6 text-center">
                <div class="text-4xl mb-4">
                    <i class="fas fa-users"></i>
                </div>
                <h2 class="text-xl font-semibold text-gray-800"><CountUp start={1} end={300} duration={10} delay={0}/>+</h2>
                <p class="text-gray-600">Total Staffs</p>
            </div>
        </div>
    </div>

        
        // <div className='bg-black w-full h-[150px]'>
        //     <h1>
        //         <CountUp start={0} end={100} duration={2} delay={0}/>
        //     </h1>
        // </div>
    );
};

export default CounterPage;

