import React from "react";

const ShowMessage = ({message}) => {
    return <>
        <div 
        className="toast-container position-fixed bottom-0 end-0 p-3 bg-info rounded-1">
        <div role="alert" aria-live="assertive" aria-atomic="true">
                <div className="toast-body">
                    {message}
                </div>
            </div>
        </div>
    </>
}


export default ShowMessage;