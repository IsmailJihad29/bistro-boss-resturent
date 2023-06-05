/* eslint-disable react/prop-types */
const Button = ({btnHeading}) => {
    return (
        <div>
            <button className='btn btn-outline border-0 border-b-4 border-yellow-600 text-yellow-600 hover:bg-slate-800 hover:border-yellow-600 hover:text-yellow-600'>{ btnHeading}</button>
        </div>
    );
};

export default Button;