import React, { useState } from 'react';

const Loading = () => {
    const [isLoading, setIsLoading] = useState(null)

    return (
        <div>
            {
                isLoading && <h4 className='text-center'>Loading...</h4>
            }
        </div>
    );
};

export default Loading;