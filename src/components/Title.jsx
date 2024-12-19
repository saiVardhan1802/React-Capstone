// import PropTypes from 'prop-types';

// export default function Title(props) {

//     return (
//         <h1
//             style=
//                     {props.style}
                
//         >Super app</h1>
//     )
// }

// Title.propTypes = {
//     style: PropTypes.object, // style should be an object
// };

function Title(props) {
    return (
        <h1 style={props.style}>Super app</h1>
    )
}

export default Title;