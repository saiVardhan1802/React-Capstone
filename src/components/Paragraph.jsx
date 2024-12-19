import PropTypes from 'prop-types';

export default function Paragraph(props) {
    const defaultStyle = {
        color: 'white',
        fontFamily: 'Roboto',
        letterSpacing: '0.02em',
        textAlign: 'left',
        textUnderlinePosition: 'from-font',
        textDecorationSkipInk: 'none',
        position: 'relative',
    }
    return (
        <p
        style={{
           ...defaultStyle, ...props.style
            
        }}
    >{props.content}</p>
    )
}

Paragraph.propTypes = {
    style: PropTypes.object, // style should be an object
    content: PropTypes.string,
};

// fontSize: '4rem',
//             fontWeight: '900',
//             lineHeight: '7.44vh',
            
            
            
//             bottom: '25vh',
//             left: '3vw'