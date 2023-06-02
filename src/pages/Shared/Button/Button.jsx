/* eslint-disable react/prop-types */
const Button = ({btnHeading}) => {
    return (
        <div>
            <button className='btn btn-outline border-0 border-b-4 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:border-yellow-500 '>{ btnHeading}</button>
        </div>
    );
};

export default Button;