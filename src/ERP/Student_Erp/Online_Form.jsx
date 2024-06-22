// import React, { useState, useEffect } from 'react';

// const Online_Form = () => {
//     const [isOpen, setIsOpen] = useState(true);

//     useEffect(() => {
//         const timer = setTimeout(() => {
//             setIsOpen(false);
//         }, 6000); 

//         return () => clearTimeout(timer);
//     }, []);

//     const handleSubmit = (e) => {
//         e.preventDefault(); 
//     };

//     return (
//         <div>
//             {isOpen ? (
//                 <form onSubmit={handleSubmit}>
//                     <h1>hello entrance</h1>
                  
//                     <button type="submit">Submit</button>
//                 </form>
//             ) : (
//                 <div>
//                     <h2>Thank you for your submission!</h2>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Online_Form;


import React, { useState, useEffect } from 'react';

const Online_Form = () => {
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        // Check if current time is within the specified time range
        const currentTime = new Date();
        // const startTime = new Date('2024-05-11T08:00:00'); 
        // const endTime = new Date('2024-05-11T10:00:00');  
        const startTime = new Date('2024-05-11T08:00:00'); 
        const endTime = new Date('2024-05-11T10:00:00'); 

        if (currentTime > startTime && currentTime < endTime) {
            setShowForm(true);
        } else {
            setShowForm(false);
        }
    }, []);

    return (
        <div>
            cfscsdc
            {showForm && (
                <iframe
                    title="Google Form"
                    src="https://docs.google.com/forms/d/e/1FAIpQLSeVsaGS91Lml9_5Bwp1Gt5horI-mIHHr9GxpZAhpeRlKoFBQA/viewform"
                    width="640"
                    height="700"
                    frameborder="0"
                    marginheight="0"
                    marginwidth="0"
                >
                    Loading...
                </iframe>
            )}
        </div>
    );
};

export default Online_Form;


